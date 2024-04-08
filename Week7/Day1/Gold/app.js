// // Exercise 1 : Promise.All()

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
// .then(result => console.log(result))

// Exercise 2 : Analyse Promise.All()

// function timesTwoAsync(x) {
//     return new Promise(resolve => resolve(x * 2));
// }

// const arr = [1, 2, 3];
// const promiseArr = arr.map(timesTwoAsync);

// Promise.all(promiseArr)
// .then(result => {
//     console.log(result);
// });
let nums1 = [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let m = 55
let nums2 = [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9]
let n = 99

const merge = function(nums1, m, nums2, n) {
    let resultArr = []
    for(let i = 0; i < m;i++){
        resultArr.push(nums1[i])
    }
    for(let i = 0; i < n;i++){
        resultArr.push(nums2[i])
    }

    do{
        nums1.pop()
    }
    while ( nums1.length > 0)

    resultArr.forEach(item => {
        nums1.push(item)
    })

    nums1.sort((a, b) => a - b)
};

merge(nums1, m, nums2,n)
console.log(nums1); 