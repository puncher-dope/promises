// console.log('Request data...');
// //     setTimeout(() => {
// //         console.log('Preparing data...');
// //         const backendData = {
// //             server: 'aws',
// //             port: 2000,
// //             status:'working'
// //         }
// //             setTimeout(() => {
// //                     backendData.modifide = true
// //                     console.log('Data received:', backendData);
// //             }, 2000)
// //     }, 2000);


// // const p = new Promise((resolve, reject)=> {
// //     setTimeout(() => {
// //         console.log('Preparing data...');
// //                 const backendData = {
// //                     server: 'aws',
// //                     port: 2000,
// //                     status:'working'
// //                 }
// //                 resolve(backendData)
// //     }, 2000)
// // })
// // p.then(data => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             data.modified = true;
// //             resolve(data)//resolve-успех, reject -не успех, его словит ошибка
// //         }, 2000);
// //     })
// // })
// // .then(clientData => {
// //     console.log('Data received', clientData);
// //     clientData.fromPromise = true
// // })
// // .catch(err => console.error('Error: ', err))//catch ловит reject -ошибки
// // .finally(() => console.log('Finally'))//это вводится независимо от ошибок


// // const sleep = ms => new Promise(resolve => 
// //     setTimeout(() => {
// //     resolve()
// // }, ms))
// const sleep = ms => new Promise(resolve => {
//     setTimeout(() => resolve(), ms)
// })

// sleep(2000).then(() => console.log('After two seconds...'))
// sleep(4000).then(() => console.log('After four seconds...'))

// Promise.all([sleep(2000), sleep(5000)])//.all выдает последний промис из масива промисов
// .then(() => {
//     console.log('All promises');
// })

// Promise.race([[sleep(2000), sleep(5000)]])// .race выдает первый промис из массива промисов
// .then(() => {
//     console.log('Race promises');//консолим всё в GIT
// })
//------------------------------------------------------------------------------------------


//Повторяем промисы 

console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');
    
//     const backData ={
//         server: 'aws',
//         status:'working',
//         port: 2000
//     }

//     setTimeout(() => {
//         backData.modified = true;
//         console.log('Data received', backData);
        
//     }, 2000);
// }, 2000)

//===========================================Дабы избежать вложенность таймаутов

// const p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backData ={
//                     server: 'aws',
//                     status:'working',
//                     port: 2000
//         }
//         resolve(backData)
//     },2000)  
// })
// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data)
//         }, 2000);
//     })
//-----------------------------------------------------------------------
//     // p2.then((clientData) => {
//     //     console.log('Data received', clientData);
//     // }) этот кусок чисто для изучения, он может быть лишним
//-----------------------------------------------------------------------
// }).then((clientData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Ты пидор');
//             resolve(clientData);
//         }, 2000);
//     })
// }).then((dataData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             dataData.sex = 'lox';
//             console.log('You lose', dataData);
//             dataData.new = 'superNew'
//             resolve(dataData)
//         }, 2000);
//     })
// }).then((dataPreData) => {
//     console.log('do not understantd', dataPreData);
// })
// .catch((err) => console.error('Error', err))
// .finally(()=> console.log('Finally'))

//======================================Тут я сам решил потестировать работу промисов===============================
//==============resolve(user)---отдал данные узера, then((typaData) принял такие return typaData из же отдал, 
// then((typaVtorayaData) принял такую хуйню, короче можно для приема использовать любые названия
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing...');
//         const user ={
//             name:'Gone',
//             password:'loмуyourmom',
//             age:20
//         }
//         resolve(user)
//     }, 2000)
// }).then((typaData) => {
//     typaData.job = 'developer'
//     return typaData
// }).then((typaVtorayaData) => {
//     return new Promise((resolve, reject) => {
//     typaVtorayaData.port = 404
//     console.log('Изменения такие:', typaVtorayaData);
//     reject(typaVtorayaData.port)
//     })
// }).catch((err) => {
//     console.error('Error', err)
// })

//---------------------------------------------------Тут просто из урока функция

const sleep = ms => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, ms)
})

sleep(2000).then(() => console.log('after 2 sec'))
sleep(3000).then(() => console.log('after 3 sec'))