console.log('hi')

let typeString = '34ahsjs';
let typeNumber = parseInt(typeString);
// let typeNumber = Number(typeString);
// let typeNumber = + typeString;

console.warn(typeNumber, typeof typeNumber)


console.log(3+3);
console.log('3'+'3');

console.warn('3'+3)

console.log(3-3);
console.log('3'-'3');
console.log('3'-3);

let arr = [1,2,3,4]
let sum = 0 
for(let i =0;i<arr.length ;i++){
    sum+=arr[i];
}

console.log(sum)

for(let elem of arr){
    sum+=elem
}
console.warn(sum)


