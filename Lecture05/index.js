const button = document.querySelector('#submit');
const ip = document.querySelector('#name');
const valueParagraph = document.querySelector('.value');

button.addEventListener('click',()=>{
    const value = ip.value;
    // console.log(value);
    valueParagraph.innerText = value;
})

const passwordIp = document.querySelector('#password');
const passwordButton = document.querySelector('#password-btn');

passwordButton.addEventListener('click',()=>{
    if(passwordIp.type === 'password'){
        passwordIp.type = 'text';
passwordButton.innerText = 'Hide';
    }
    else{
        passwordIp.type = 'password';
passwordButton.innerText = 'Show';
    }
})