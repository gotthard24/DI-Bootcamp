// //EXERCISE 1
// class Person {
//     private firstName: string;
//     private lastName: string;
//     public age: number;
//     protected address: string;

//     constructor(firstName: string, lastName: string, age: number, address: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.address = address;
//     }

//     getFullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //EXERCISE 2

// interface Vehicle{
//     make: string;
//     model: string;
//     start(): string;
// }

// interface Car extends Vehicle{
//     numberOfDoors: number
// }

// class Sedan implements Car {
//     make: string;
//     model: string;
//     numberOfDoors: number;
  
//     constructor(make: string, model: string, numberOfDoors: number) {
//       this.make = make;
//       this.model = model;
//       this.numberOfDoors = numberOfDoors;
//     }
  
//     start(): string {
//       return `The ${this.make} ${this.model} is starting.`;
//     }
// }

// const myCar = new Sedan('Toyota', 'Camrysina', 14);
// console.log(myCar.start());

// //EXERCISE 3

// // type T = {
// //     val1: string;
// //     val2: string
// // }

// // type U = {
// //     val3: number;
// //     val4: number;
// // }

// // type Y = T & U

// // const combineObjects = (obj1: T, obj2: U): Y =>{
// //     return {...obj1, ...obj2}
// // }

// // Final variant
// const combineObjects = <T,U>(obj1: T, obj2: U): T & U =>{
//         return {...obj1, ...obj2}
//     }

// console.log(combineObjects({val1: '1', val2: '2'}, {val3: 3, val4: 4}));


// //EXERCISE 4

// class Stack<T> {
//     private items: T[] = [];
  
//     push(val: T): void {
//       this.items.push(val);
//     }

//     pop(): T | undefined {
//       return this.items.pop();
//     }

//     isEmpty(): boolean {
//       return this.items.length === 0;
//     }
// }

// let stack = new Stack()
// let stackNum = new Stack<number>()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push('4')

// console.log(stack);

// stack.pop()

// console.log(stack);

// console.log(stack.isEmpty());

// stackNum.push('2')

//EXERCISE 5

function filterArray<T>(array: T[], predicate: (element: T) => boolean): T[] {
    let resultArray: T[] = [];
    for (let item of array) {
        if (predicate(item)) {
            resultArray.push(item);
        }
    }
    return resultArray;
}

let numbers = [1, 2, 3, 4, 5];
let odds = filterArray(numbers, (num) => num % 2 !== 0);
console.log(odds); 
