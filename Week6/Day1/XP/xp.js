// Exercise 1 : Scope
// // #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne() // a is redefined inside if as 3
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? You can't redefine const variables

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() // 0 (global var)
// funcTwo() // no output, but a is redefined to 5
// funcThree() // 5
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ? Same is in ex 1


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() //?
// funcFive() // hello 

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix() // test, cause for function it's scope more prioritised
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ? // nothing will change

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console // 5 then 2
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ? // nothing will change

// // Exercise 2 : Ternary Operator

// // function winBattle(){
// //     return true;
// // }

// let winBattle = () => true
// let experiencePoints = (winBattle() === true) ? 10 : 1
// console.log(experiencePoints)

// // Exercise 3 : Is It A String ?

// let isString = (input) => typeof input === 'string'

// console.log(isString('Hello'));
// console.log(isString(3));

// // Exercise 4 : Find The Sum
// let sum = (x, y) => x + y
// console.log(sum(5,12));

// // Exercise 5 : Kg And Grams
// const convert = function (weightKg) {
//     return weightKg * 1000
// } // in this case i can't call it before declaration

// console.log(convert(7))
// console.log(convertKgToGr(7))

// const conv = (weightKg) => weightKg * 1000

// console.log(conv(7))

// function convertKgToGr(weightKg) {
//     return weightKg * 1000
// }

// // Exercise 6 : Fortune Teller
// (function(numberChildren, partnerName,location, job) {
//     let message = `You will be a ${job} in ${location}, and married to ${partnerName} with ${numberChildren} kids.`
//     let body = document.getElementsByTagName('body')[0]
//     let p = document.createElement('p')
//     p.textContent = message
//     body.appendChild(p)

// })(5, "Jessica", 'USA', 'Waiter');

// // Exercise 7 : Welcome
// const navBar = document.getElementById('navBar');
// const loggedName = 'John'; 

// (function(name) {
//     let newDiv = document.createElement('div');
//     let p = document.createElement('p');
//     let img = document.createElement('img');
//     p.textContent = name;
//     img.src = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
//     img.style.width = '25px'
//     img.style.height = '25px'
//     newDiv.appendChild(p);
//     newDiv.appendChild(img);
//     newDiv.style.display = 'flex'
//     navBar.appendChild(newDiv); 
// })(loggedName);

// Exercise 8 : Juice Bar
let body = document.getElementsByTagName('body')[0]
console.log(makeJuice('small'));

function makeJuice(size) {
    let order = `The client wants a ${size} juice, containing `
    let ingredients = []
    
    addIngredients(addIngredient(), addIngredient(), addIngredient())
    addIngredients(addIngredient(), addIngredient(), addIngredient())
    displayJuice()

    function addIngredient() {
        let ingredient
        do{
           ingredient = prompt("Enter ingredient")
        }
        while (!isNaN(ingredient))

        return ingredient
    }
    function addIngredients(ingr1, ingr2, ingr3) {       
        ingredients.push(ingr1, ingr2, ingr3)
    }
    
    function displayJuice() {
        let p = document.createElement('p')
        for (item of ingredients){
            order += `${item} `
        }
        p.textContent = order
        body.appendChild(p)   
    }
}

