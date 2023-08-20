
// function callback(){
//     console.warn("from func!")
// }
// function mainFunction(callbackParam){
//     console.log("main func");
//     callbackParam()
// callback()
// }


// mainFunction(callback)

// mainFunction(()=>{console.warn("changedddd")})
// mainFunction(()=>{console.warn("changed 2")})
// mainFunction(()=>{let v = 5; console.warn(v)})


// function callBackTimeOut(){
//     console.warn("callll");
// }
// setTimeout( callBackTimeOut, 5000);
// setTimeout(()=>console.warn("arrow callll"), 8000);
// clearTimeout()

// const timeId = setInterval(()=>console.warn("callleddd"), 5000);
// console.warn(timeId)
// setTimeout(()=> {console.warn("clearing");
// clearInterval(timeId)}, 12000);



const elem = document.querySelector('.h1class');
elem.style.color = 'red'
// console.warn(elem)

// const div = document.querySelector('.divvv')
// setTimeout(()=>div.innerHTML = '', 4000)


const elementBycn = document.getElementsByClassName('h1class')
console.warn(elementBycn)

// document.getElementsByTagName('p')