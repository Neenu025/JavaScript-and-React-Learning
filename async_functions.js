//a new promise
const p = new Promise((resolve, reject)=> {
    resolve("Promise resolved value")
})



//async function
async function getData(){
    return p
}
const dataPromise = getData()

dataPromise.then (res => console.log(res)) //used then method to get data responese out of promises


//async await example
async function handlePromises(){
    const val = await p  ///await always comes before promises
    console.log(val)
}
handlePromises()
