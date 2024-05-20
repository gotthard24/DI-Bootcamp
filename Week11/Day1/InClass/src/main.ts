// let userName = 'John'
// let age = 25

// userName = 'Daniel'
// // age = '25'

// let a = 12
// let b = '12'
// let c = 2

// console.log(a+b);
// // console.log(a / b);

let a: number
let b: string

let num: number = 12

type MyType = [string, number, boolean]

interface MyUser{
    name: string,
    age: number,
    address?: string
}

let arr: MyType = ['1',2,true,]

let user: MyUser = {
    name: '1',
    age: 2,
}

enum Grade {
    U ,
    D,
    C,
    B,
    A
}

const printUser = (user: MyUser) => {
    console.log(user);
}

// printUser(user)
// printUser({name: '2', age: 3, address: '4'})

console.log(Grade[2]);

let students =[{name: '1', grade: Grade[0]}, {name: '2', grade: Grade[1]}, {name: '3', grade: Grade[2]}]

console.log(students);

let literal: 'loading' | 'success' | 'failed';