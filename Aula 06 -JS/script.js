// async function hello(name){
//     return `Olá, ${name}`
// }
// hello("João").then(res => console.log(res))

function factorial(n) {
    if (n < 0) return Promise.reject("Number cannot be negative")
    let res = 1
    for (let i = 2; i <= n; i++) res *= i;
    return Promise.resolve(res)
}
function callWithThenCatch() {
    factorial(5)
        .then(res => console.log("OK: " + res))
        .catch(error => console.log("NOT OK: " + error))

    factorial(-1)
        .then(res => console.log("OK: " + res))
        .catch(error => console.log("NOT OK: " + error))
}

async function factorial(n) {
    if (n < 0) return Promise.reject("Number cannot be negative")
    let res = 1
    for (let i = 2; i <= n; i++) res *= i;
    return Promise.resolve(res)
}

async function callWithAsyncAwait() {
    try {
        const f1 = await factorial(3) //only with assync function (not using then/catch)
        console.log(f1)
        const f2 = await factorial(-2) //only with assync function (not using then/catch)
        console.log(f2)
    }
    catch (e) {
        console.log("No catch: " + e)
    }
}

callWithThenCatch()
callWithAsyncAwait()