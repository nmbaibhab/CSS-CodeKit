let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let result = document.getElementById('result');
let output = document.getElementById('output');
let text = document.getElementById('text');
const clipboardEl = document.getElementById('clipboard');

input1.addEventListener('input', setValue);
input2.addEventListener('input', setValue);
input3.addEventListener('input', setValue);
input4.addEventListener('input', setValue);

result.innerHTML = "400 x 400"

function setValue(e) {
    let i1 = document.getElementById('input1').value;
    let i2 = document.getElementById('input2').value;
    let i3 = document.getElementById('input3').value;
    let i4 = document.getElementById('input4').value;
    // console.log(i1);

    i1 = i1 == "" ? 0 : i1;
    i2 = i2 == "" ? 0 : i2;
    i3 = i3 == "" ? 0 : i3;
    i4 = i4 == "" ? 0 : i4;

    result.style.borderRadius = `${i1}px ${i2}px ${i3}px ${i4}px`
    text.innerHTML = `border-radius: ${i1}px ${i2}px ${i3}px ${i4}px`
}

//copy password to clipboard
clipboardEl.addEventListener('click', () => {
    //creating a textarea
    const textarea = document.createElement('textarea');
    const password = text.innerText;

    if (!password) {
        return;
    }
    //copy the password to the textarea
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('border radius copied to clipboard');
})