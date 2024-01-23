const cart = ["tops", "Jeans", "Kurta","Croptops"]


createOrder(cart)
.then(function(OrderId){
    console.log(OrderId)
    return OrderId
})
.then(function(OrderId){
    return proceedToPayment(OrderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo)
    return paymentInfo
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

function proceedToPayment(OrderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful")
    })
}

function validateCart(){
    return true
}