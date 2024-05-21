// type StrOrNum = string | number | boolean
// type StrOrNumArray = (string | number)[]

// // type Student = {
// //     name: string;
// //     age: number;
// //     isGood: StrOrNumArray;
// // }

// // type User = {
// //     name: string;
// //     isGood: StrOrNum;
// // }

// type Status = 'success' | 'error'

// let userStatus: Status = 'error'

// // function return

// // const add = (a: number, b: number | string): number => {
// //     if (typeof b === 'string'){
// //         return -1
// //     }
// //     return a + b
// // }

// // console.log(add(2, '3'));

// //function overloading

// function add (a: number, b: number): number;
// function add (a: string, b: string): string;
// function add (a: any, b: any): any {
//     return a + b
// }

// // console.log(add(2, 3));
// // console.log(add('s', 'd'));

// // not return

// const logMessage = (name: string): void => {
//     console.log(`Hello ${name}`)
// }

// // logMessage('Dan')

// type addFunc = (a: number, b: number) => number

// const addd: addFunc = (a,b) => {
//     return a + b
// }

// const addVAT: addFunc = (a,b) => {
//     return a + b * 0.07
// }

// const addOptional = (a: number, b?: number) =>{
//     return a + (b || 0)
// }

// const addDefault = (a: number, b: number = 1) => {
//     return a + b
// }

// const addRest = (a: number, ...rest: number[]): number => {
//     return rest.reduce((acc, val) => acc + val, a)
// }

// // console.log(addRest(100, 3,4,5,6));

// const throwError = (message: string): never => {
//     throw new Error(message)
// }

// //assertion

// type One = string
// type Two = string | number
// type Three = 'hello'

// let a: One = 'hello'
// let b = a as Two
// let c = b as Three

// let d = <One>'World'
// let e = <Two>d

// // console.log(e);
// // const img = document.querySelector('img') as HTMLImageElement

// // img.src = 'https://i.pngimg.me/thumb/f/720/m2H7N4b1H7A0d3A0.jpg'

// // const input = <HTMLInputElement>document.querySelector('input')

// const year = document.getElementById('year') as HTMLSpanElement
// const thisYear = new Date().getFullYear().toString()
// year.setAttribute('datetime', thisYear)
// year.textContent =  thisYear

// //Class

// // class User {
// //     public name: string
// //     private age: number
// //     protected active: boolean

// //     constructor(name: string,age: number,active: boolean){
// //         this.name = name
// //         this.age = age
// //         this.active = active
// //     }

// //     getAge(){
// //         return `My age is ${this.age}`
// //     }
// // }

// // class Student extends User {
// //     constructor(name: string,age: number,active: boolean){
// //         super(name, age, active)
// //     }
// //     getActive(){
// //         return this.active
// //     }
// // }

// // let student = new Student('Doe', 20, true)
// // console.log(student.name);
// // console.log(student.age);
// // console.log(student.active);

// interface UserInterface {
//     name: string;
//     age: number;
//     isActive: boolean;
// }

// class User implements UserInterface {
//     constructor(
//         private _name: string,
//         private _age: number,
//         private _isActive: boolean
//     ) {}

//     get name(): string {
//         return this._name;
//     }

//     set name(param: string) {
//         this._name = param;
//     }

//     get age(): number {
//         return this._age;
//     }

//     get isActive(): boolean {
//         return this._isActive;
//     }
// }

// const user = new User("Dan", 26, true);
// console.log(user.name);  
// console.log(user.age);   
// console.log(user.isActive);

// user.name = 'Biba'