// // // Exercise 1 : Print Full Name

// const printFullName = (obj) => `${obj.first} ${obj.last}`;
// // const printFullName = ({first, last}) => `${first} ${last}`;

// console.log(printFullName({first: 'Elie', last:'Schoppik'}))

// // Exercise 2 : Keys And Values

const keysAndValues = (obj) => {
    let keys = Object.keys(obj).sort();
    let values = keys.map(key => obj[key]);
    return [keys, values];
}

console.log(keysAndValues({ b: 2, c: 3, a: 1 }))

// // Exercise 3 : Counter Class
// class Counter {
//     constructor() {
//       this.count = 0;
//     }
  
//     increment() {
//       this.count++;
//     }
//   }
  
//   const counterOne = new Counter();
//   counterOne.increment();
//   counterOne.increment();
  
//   const counterTwo = counterOne;
//   counterTwo.increment();
  
//   console.log(counterOne.count);

// class Bird {
//     constructor() {
//       console.log("I'm a bird. 🦢");
//     }
//   }
  
//   class Flamingo extends Bird {
//     constructor() {
//       console.log("I'm pink. 🌸");
//       super();
//     }
//   }
  
//   const pet = new Flamingo();