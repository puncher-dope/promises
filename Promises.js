console.log('Request data...');
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status:'working'
//         }
//             setTimeout(() => {
//                     backendData.modifide = true
//                     console.log('Data received:', backendData);
//             }, 2000)
//     }, 2000);


// const p = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log('Preparing data...');
//                 const backendData = {
//                     server: 'aws',
//                     port: 2000,
//                     status:'working'
//                 }
//                 resolve(backendData)
//     }, 2000)
// })
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data)//resolve-успех, reject -не успех, его словит ошибка
//         }, 2000);
//     })
// })
// .then(clientData => {
//     console.log('Data received', clientData);
//     clientData.fromPromise = true
// })
// .catch(err => console.error('Error: ', err))//catch ловит reject -ошибки
// .finally(() => console.log('Finally'))//это вводится независимо от ошибок


// const sleep = ms => new Promise(resolve => 
//     setTimeout(() => {
//     resolve()
// }, ms))
const sleep = ms => new Promise(resolve => {
    setTimeout(() => resolve(), ms)
})

sleep(2000).then(() => console.log('After two seconds...'))
sleep(4000).then(() => console.log('After four seconds...'))

Promise.all([sleep(2000), sleep(5000)])//.all выдает последний промис из масива промисов
.then(() => {
    console.log('All promises');
})

Promise.race([[sleep(2000), sleep(5000)]])// .race выдает первый промис из массива промисов
.then(() => {
    console.log('Race promises');//консолим всё в GIT
})
//------------------------------------------------------------------------------------------


//Повторяем промисы 

const unsleep = ms => new Promise(resolve => {
    setTimeout(() =>  resolve(), ms)
})


//hello
console.log('hello')