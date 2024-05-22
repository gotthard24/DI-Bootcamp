"use strict";
// console.log("day3");
// //index keys
const checkBool = (arg) => {
    return { value: arg, is: !!arg };
};
const hasId = (arg) => {
    return arg.id;
};
const getUserInfo = (users, key) => {
    return users.map(user => user[key]);
};
//generics with classes
class StateObject {
    constructor(initialState) {
        this._state = initialState;
    }
    get state() {
        return this._state;
    }
    set state(newState) {
        this._state = newState;
    }
}
const userName = new StateObject('John');
// userName.state = 12
userName.state = 'Daniel';
console.log(userName.state);
let post = { title: "1", content: '2', author: '3' };
const updatePost = (post, update) => {
    return Object.assign(Object.assign({}, post), update);
};
const readonlyPost = Object.assign(Object.assign({}, post), { author: "John" });
