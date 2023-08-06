function addNumbers(x,y){
    return x+y;
}

console.log(addNumbers(1,2));

function addMultiple(...args){
    console.log(args)
}

addMultiple(1,2,3,4)


let subtractNumbers = (x,y)=> x-y;


console.warn(subtractNumbers(3,2))

let arr=[11,2,3,4]

let sumArr = (arr)=>{
    let sum = 0;
    for(let elem of arr){
        sum+=elem;
    }
    return sum;
}

console.warn(sumArr(arr))


let minimumArr = (arr)=>{
    console.log(ind);
    var ind = 5;

    // var ind 
    // console.log(ind);
    // ind = 5;
    let minimum = arr[0]
    for(let elem of arr){
        if(elem < minimum){
            minimum = elem
        }
    }
    console.warn(minimum);
}

minimumArr(arr)