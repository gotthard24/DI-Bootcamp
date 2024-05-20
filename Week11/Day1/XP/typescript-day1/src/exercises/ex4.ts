const checkNum = (num: number):string =>{
    if (num > 0){
        return 'positive'
    } else if (num < 0){
        return 'negative'
    } else {
        return 'zero'
    }
}

console.log(checkNum(1));
