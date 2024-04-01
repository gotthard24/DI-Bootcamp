let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (groceries) => {
    groceries.fruits.forEach(element => {
        console.log(element)
    });
};

const cloneGroceries = () => {
    let name = client;
    let shopping = {...groceries};
    shopping.totalPrice = '35$'
    shopping.other.paid = false
    return shopping
}

displayGroceries(groceries)

const shopping = cloneGroceries()

console.log(groceries);
console.log(shopping);

//All works properly because of this syntax - {...groceries}, so my shopping obj has it,s own place in the memory