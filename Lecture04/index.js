// // const demoClass = document.querySelectorAll('h3')
// // console.log(demoClass)
// // demoClass.forEach((elem)=>console.log(elem))

// // for(let i =0 ;i<demoClass.length;i++){
// //     console.warn(demoClass[i])
// // }
// // const arr = [1,2,3,4,5]

// // let sum1 = 0;x
// // for(let i =0;i<arr.length ; i++){
// // sum1+=arr[i];
// // }

// // console.log(sum1);

// // let sum2 = 0;
// // for(let elem of arr){
// //     sum2 += elem;
// // }

// // console.log(sum2);


// // let sum3 = 0;
// // arr.forEach((element)=>sum3+=element)
// // console.log(sum3)

// const element  = document.querySelector('h2')
// console.warn(element)


// setTimeout(()=>{
//     element.classList.add('red', 'test','demo')
//     element.innerText = '<h1>changed from hello</h1>'
// }, 2000)

// // setInterval(()=> {
// //     if(element.textContent === 'Hello'){
// //         element.innerText = 'Party'
// //     }
// //     else{
// //         element.innerText = 'Hello'
// //     }
// // },2000)


const button  = document.querySelector('.clickbutton')

button.addEventListener('click', (event)=>{
    console.warn("clicked!!!");
    console.warn(event.target)
})

const inputValue = document.querySelector('.input-value');
const ip = document.querySelector('.ip');
ip.addEventListener('input',(event)=>{

    
    inputValue.innerText = event.target.value
    // inputValue.innerText = ip.value

})


console.log('hi')