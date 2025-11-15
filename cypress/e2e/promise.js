let promise1 = new Promise((resolve, reject) => {
    let result = true
    resolve('Resolving the promise 1')
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolving the promise 2 after 8 secs')
    }, 8000)
})

promise1.then((value1) => {
    console.log('Promise resolved with value -> '+value1)
    return promise2
}).then((value2) => {
    console.log('Promise resolved with value -> '+value2)
})
.catch((error) => {
    console.log('Promise rejected with value -> '+error)
})

console.log('Am I to be executed first ??? ')