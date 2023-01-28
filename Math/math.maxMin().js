let a = [1,2,3,4,5,6,7,8,9,1,0,10,45,21,33,66,21,11,2,41,32,12]
let max = a.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max);
// let min = a.reduce((b, a) => Math.min(a, b), -Infinity);
// console.log(min);
