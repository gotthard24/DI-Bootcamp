// // Exercise 1 : Location
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// // Exercise 2: Display Student Info
// function displayStudentInfo(objUser){
//     const {first, last} = objUser
//     return `Your full name is ${first} ${last}`
// }

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

// // Exercise 3: User & Id
// const users = { user1: 18273, user2: 92833, user3: 90315 }

// let arr = Object.entries(users);

// console.log(arr);

// arr = arr.map(item => [item[0], item[1] * 2]);

// console.log(arr);

// // Exercise 4 : Person Class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member); // Object ? ... yeah ))

// // Exercise 5 : Dog Class
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };

//   // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

// // Exercise 6 : Challenges
// // false by reference
// // false by reference

// const object1 = { number: 5 }; //5
// const object2 = object1; // same 5
// const object3 = object2; // same 5
// const object4 = { number: 5}; // new 5

// object1.number = 4; 
// console.log(object2.number) // same 4 as obj1
// console.log(object3.number) //4
// console.log(object4.number) //5

class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }
}

class Mamal extends Animal{
    constructor(name, type, color){
        super(name, type, color)
    }

    sound(sound){
        console.log(`${this.color} ${this.type} ${this.name} makes '${sound}' sound`); 
    }
}

let farmerCow = new Mamal('Lily', 'cow', 'brown')
farmerCow.sound('Mooo!')