// // let x = 942

// // let [...y] = x.toString()

// // console.log(y);

// // z = y.reduce((total, item) => total + parseInt(item), 0)

// // console.log(z);

// function minimize(num) {
//     let [...digits] = num.toString()
//     let result = digits.reduce((total, item) => total + parseInt(item), 0)
//     return result > 9 ? minimize(result) : result
// }

// console.log(minimize(942))

// class Animal{
//     constructor(type, name){
//         this.type = type
//         this.name = name
//     }
// }

// cat = new Animal('cat', 'siam')
// dog = new Animal('dog', 'hasky')

// console.log(cat);

// // cat.name = 'sisi'
// class Dog extends Animal{
//     constructor(name){
//         super('Dog', name)
//     }
// }

// let dog1 = new Dog("Shadow")
// console.log(dog)
// console.log(dog1);


class Animal{
    constructor(type, name){
        this.type = type
        this.name = name
    }
}

class Dog extends Animal{
    constructor(name){
        super('Dog', name)
    }
}

class Dog2 extends Animal {
constructor(size) {
    super(name);
    this.size = size;
}
};