//a new promise
const p = new Promise((resolve, reject)=> {
    resolve("Promise resolved value")
})



//async function
async function getData(){
    return p
}
const dataPromise = getData()

dataPromise.then (res => console.log(res))


//async await example
async function handlePromises(){
    const val = await p
    console.log(val)
}
handlePromises()
