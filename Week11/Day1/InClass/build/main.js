"use strict";
// let userName = 'John'
// let age = 25
// userName = 'Daniel'
// // age = '25'
// let a = 12
// let b = '12'
// let c = 2
// console.log(a+b);
// // console.log(a / b);
let a;
let b;
let num = 12;
let arr = ['1', 2, true,];
let user = {
    name: '1',
    age: 2,
};
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
const printUser = (user) => {
    console.log(user);
};
// printUser(user)
// printUser({name: '2', age: 3, address: '4'})
console.log(Grade[2]);
let students = [{ name: '1', grade: Grade[0] }, { name: '2', grade: Grade[1] }, { name: '3', grade: Grade[2] }];
console.log(students);
let literal;
