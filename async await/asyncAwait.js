// console.log('first person ticket');
// console.log('second person ticket');

// const promiseWifeBringsTicket= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('WIFE BROUGHT TICKETS');
//         resolve('ticket');
//     },3000);
// });

// const getPopcorn = promiseWifeBringsTicket.then((t)=>{
//     console.log('husband:we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=>{
//         resolve(`popcorn ,${t}`)
//     });
// });

// const getButter = getPopcorn.then((t)=>{
//     console.log(`bought ${t}`)
//     console.log('husband:we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve,reject)=>{
//         resolve(`butter,${t}`);
// });
// });

// const getColdDrinks=getButter.then((t)=>{
//     console.log(`bought ${t}`);
//     console.log(`wife:bring me colddrinks also`);

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`coldDrinks ,${t}`);
//         },2000);
//     })
// });

// getColdDrinks.then((t)=>{
//     console.log(`bought ${t}`);
//     console.log(`has everything ${t}`);
// });


// console.log('forth person ticket');
// console.log('fifth person ticket');





//USING AWAIT IN ASYNC FUNCTION

console.log('first person shows ticket');
console.log('second person shows ticket');


const preMovie= async ()=>{

    const promiseWifeBringsTicket= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    });
    
    let t=await promiseWifeBringsTicket;



    console.log(`WIFE BROUGHT ${t}`);

    console.log('husband:we should go in');
    console.log('wife: no i am hungry');



    const getPopcorn = new Promise((resolve,reject)=>{
        resolve(`popcorn`);
    });

    let pop=await getPopcorn;



    console.log(`husband bought ${pop}`)
    console.log('husband:we should go in');
    console.log('wife: i need butter on my popcorn');


    
    const getButter = new Promise((resolve,reject)=>{
        resolve(`butter`)
    });

    let btr=await getButter;
    console.log(`bought ${btr}`);


    //if they need three different things which really no dependent on each other then we can use Promise.all with await

    console.log('wife:i also need a cold drink,KFC chicken and McD');

    const getColdDrinks= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`coldDrinks`);
        },2000);
       
    });

    const getKfc= new Promise((resolve,reject)=>{
        resolve('KFC chicken')
    });

    const getMcd= new Promise((resolve,reject)=>{
        resolve('McDonald burger');
    });

    await Promise.all([getColdDrinks,getKfc,getMcd])
    .then(([c,k,m])=>{
        console.log(`husband brings ${c,k,m}, has ${pop}, has ${btr} & offcourse ${t}`);
        
     })

    console.log('husband: can we go in now?');
    console.log('wife:we can');
    return(t);
}

preMovie().then((t)=>{
    console.log(`third person shows ${t}`);
})

console.log('forth shows person ticket');
console.log('fifth shows person ticket');