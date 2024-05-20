const add = (arg1: number | string, arg2: number | string): number | string => {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    } else {
        return 'ti tupoi';
    }
}

console.log(add(1 ,'1'));

