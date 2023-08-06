let a = [1,2,3,4]
let b =a
console.log(a)
console.log(b)

console.log("after change");
b[2] = 5
console.log(a)
console.log(b)


let arr1 = [1,2,3,4]
let arr2 = [...arr1]
console.log(arr1)
console.log(arr2)

console.log("after change");

arr2[2] = 5;
console.log(arr1)
console.log(arr2)

let obj1 = {
    "key1":"value1",
    "key2": "value2"
}


let obj2 = {...obj1};

obj2.key1 = "check";
console.log(obj1, obj2)


// console.log(1 === '1')

console.warn(0 == false)
let toggleIndicator = 0

if(toggleIndicator){
    console.warn("1")
}else{
    console.warn("0")
}



// fname lname id

// XYX. “ABC” 1

// Dhiren Sidhwani 2

// Kavish Punjabi 3
// rs = 
// [
// {
//     "fname": XYX,
//     "lname":"abs",
//     "id": 1
// }
// ]

// // if(rs[1])
// rs[1]?.fname


rs = [1,2,3,4]

console.log(rs[5]?.key)


