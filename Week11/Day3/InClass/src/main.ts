// console.log("day3");
// //index keys

// interface IEmployee {
//     [key: string]:string | number;
//     // readonly [key: string]:string | number;
//     name: string;
//     age: number;
//     role: string;
// }

// let employee1: IEmployee = {
//     name: 'John',
//     age: 30,
//     role: 'Developer',
// }

// // console.log(employee1["name"]);
// // console.log(employee1.name);
// employee1["email"] = 'jjj@gmail.com'

// let prop: string = 'age'

// console.log(employee1[prop]);

// for (let key in employee1) {
//     console.log(key, employee1[key]);
// }
// // console.log(1);

// Object.keys(employee1).forEach((key) => {
//     console.log(key, employee1[key as keyof typeof employee1]);
// })

// const logEmployee = (employee: IEmployee, key: keyof IEmployee) =>{
//     console.log(key, employee[key]);
// }
// console.log('func');

// logEmployee(employee1, 'name')

// type names = "name" | "age" | "role"
// type NewEmployee = Record<names, string | number>

// //Generics

// const srtEcho = (arg: string): string => arg

// const echo = <T>(arg: T): T => arg

// // to check the type 

// const isObj = <T>(arg: T): boolean => {
//     return typeof arg === 'object' && !Array.isArray(arg) && arg !== null
// }

// console.log(isObj([{name: 'John'}]));
// console.log(isObj({name: 'John'}));

// const isTrue = <T>(arg: T): {arg: T, is: boolean} =>{
//     if(Array.isArray(arg) && !arg.length){
//         return {arg, is: false}
//     }
//     if(typeof arg === 'object' && !Object.keys(arg as keyof T).length){
//         return {arg, is: false}
//     }
//     return {arg, is: !!arg}
// }

// console.log(isTrue(1));

interface IBoolCheck<T> {
    value: T;
    is: boolean;
}

const checkBool = <T>(arg: T): IBoolCheck<T> => {
    return {value: arg, is: !!arg}
}

interface IHasId {
    id: number;
}

const hasId = <T extends IHasId>(arg: T): number => {
    return arg.id
}

const getUserInfo = <T extends IHasId, K extends keyof T>(users: T[], key: K): T[K][] =>{
    return users.map(user => user[key])
}

//generics with classes

class StateObject<T> {
    private _state: T

    constructor(initialState: T){
        this._state = initialState
    }

    get state(): T {
        return this._state
    }

    set state(newState: T){
        this._state = newState
    }
}

const userName = new StateObject('John')
// userName.state = 12
userName.state = 'Daniel'
console.log(userName.state);

interface Post{
    title: string;
    content: string;
    author?: string
}

let post = {title: "1", content: '2', author: '3'}

const updatePost = (post: Post, update: Partial<Post>): Post => {
    return {...post, ...update}
}

const readonlyPost: Readonly<Post> = {...post, author: "John"}

type postTitle = Pick<Post, 'title' | 'content'>

type postAythor = Omit<Post, 'title' | 'content'>