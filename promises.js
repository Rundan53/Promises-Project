const posts=[
  {title:'Post One', body:'this is post one'},
  {title:'Post Two', body:'this is post two'},
];

function getPost(){
  return new Promise((resolve,reject)=>{
    if(posts.length>0){
      setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
          output=output+ `<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
        resolve(output);
      },1000)
    }
    else{
      reject('Array is Empty/No Posts');
    }
  })
 
}

function deletePost(){
  return new Promise((resolve,reject)=>{
    if(posts.length>0){
      let deleted=posts.pop();
      resolve(deleted);
    }
    else{
      reject('No Post To Delete');
    }
  })
 
}

function createPost(post){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let pushed=posts.push(post);
      resolve(post);
    },2000);
  })
 
}

function userActivityTime(){
  return new Promise((resolve,reject)=>{
    let LastActivityTime= new Date().toString();
    resolve(LastActivityTime);
  })
  
}





Promise.all([
  createPost({ title: 'Post Three', body: 'this is post three' }),
  createPost({ title: 'Post Four', body: 'this is post four' }),
  userActivityTime()
])
.then(([pushed,pushed2,time]) => {
  console.log(`pushedPost = ${pushed.title}`);
  console.log(`pushedPost = ${pushed2.title}`);
  console.log(`Last Activity was @ ${time}`)
  return getPost();
})
.then((post)=>{
  console.log(`Currently Available to Display = ${post}`)
  return Promise.all([deletePost(),userActivityTime()]);
})
.then(([deleted,time2])=>{
  console.log(`Deleted = ${deleted.title}`);
  console.log(`Last Activity was @ ${time2}`)
  return getPost()
})
.catch((err) => {
  console.log(err);
});


