//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
}

//copy password to clipboard
clipboardEl.addEventListener('click', () =>{
    //creating a textarea
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password){
        return;
    }
    //copy the password to the textarea
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');
})

//generate event listener
generateEl.addEventListener('click', ()=>{
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,length);
})
//generate password function
function generatePassword(lower, upper, number, length){
    // initilize password variable
    let generatedPassword = '';
    
    const typesCount = lower + upper + number ;
    // console.log(typesCount);
    
    //filter out un-checked types
    const typesArr = [{lower} , {upper} , {number}].filter(item => Object.values(item)[0]);
    // console.log(typesArr);
    
    if(typesCount === 0){
        return '';
    }
    //loop over the length call generator for each type
    for(let i=0; i<length; i+=typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0];
            // console.log(funcName);
            
            generatedPassword += randomFunc[funcName]();
        })
    }
    //add final password and show
    const finalPassword = generatedPassword.slice(0,length);

    return finalPassword;
}

//generate functions
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}