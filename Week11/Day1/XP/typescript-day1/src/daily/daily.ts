const processInput = (input: number | string | boolean) => {
    if(typeof input === 'number'){
        return input * input
    } else if (typeof input === 'string'){
        return input.toUpperCase()
    } else {
        return !input
    }
}

console.log(processInput(1));
console.log(processInput('1'));
console.log(processInput(true));