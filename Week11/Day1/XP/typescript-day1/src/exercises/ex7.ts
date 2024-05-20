type Person = {
    name: string;
    age: number;
};

const createPerson = (name: string, age: number): Person => {
    return { name, age };
};

const person = createPerson('Alice', 30);
console.log(person);
