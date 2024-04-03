let arr = ["1,2,5,6,7", '2,5,7,8,15']

function findIntersection(arr) {
    let newArr = []
    let resultObj = {}
    
    arr.forEach(item => newArr.push(item.split(",")))

    console.log(newArr);

    newArr.forEach(arr => {
        for(let item of arr){
            if (item in resultObj){
                resultObj[item]++; 
            } else {
                resultObj[item] = 1; 
            }
        }
    });

    console.log(resultObj);

    let result = Object.keys(resultObj).filter(key => resultObj[key] > 1);

    console.log(result);
    return result
}

findIntersection(arr)