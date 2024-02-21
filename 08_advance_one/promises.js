const promiseOne = new Promise(function (resolve, reject) {
    //do an async task
    //DB calls,cryptography,network
    setTimeout(function () {
        console.log('async task is completed');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log("promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task two');
        resolve()
    }, 1000)
}).then(function () {
    console.log(('Async two ressoled'));
})

const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "rishi@gmail.com" })
    }, 1000)
})
promisethree.then(function (user) {
    console.log(user);
})

const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;//true
        if (!error) {
            resolve({ username: "rishi", password: "123" })
        }
        else {
            reject('ERROR:something went wrong')
        }
    }, 2000)
})

promisefour.then((user) => {//arrow func
    console.log(user);
    return user.username
})
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    }).finally(() => {
        console.log("The promise is either resolved or rejected");
    })
//or
////new promise 

const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;//true
        if (!error) {
            resolve({ username: "rishi", password: "123" })
        }
        else {
            reject('ERROR:JS went wrong')
        }
    }, 2000)
});

async function consumePromiseFive() {
    try {
        const response = await promisefive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromiseFive()
//Await The await keyword is placed before the call to a function or variable that returns a promise.
// It makes JavaScript wait for the promise object to settle before running the code in the next line.
async function getAllUser() {//response ane wala hai coz async
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUser()

//using then catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})