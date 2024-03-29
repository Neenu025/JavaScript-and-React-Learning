const cart = ["tops", "Jeans", "Kurta","Croptops"]
const promise = createOrder(cart)
console.log(promise)

promise.then(function(OrderId){
    // proceedToPayment(OrderId)
    console.log(OrderId)
})
.catch(function(err){
    console.log(err.message)
})


//function for create order
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){     //using promise constructor here

        //using a simple create order logic here
        if(!validateCart(cart)){                   //if cart validation is failing
            const err = new Error("Cart is not valid")
            reject(err)  //reject operation of promise
        } 
        const OrderId = "12345"
        if (OrderId){
            setTimeout(function(){
                resolve(OrderId) 
            },5000)
              //resolve opereation of promise
        }

    })

    return pr
}

function validateCart(){
    return true
}