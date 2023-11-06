function verify() {
    console.log("a, b, x")
    let x = parseInt(elementX.value);
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    console.log(a, b, x)

    if (x >= a && x <= b) {
        result = ' X принадлежит заданному промежутку'
        document.getElementById('result').innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = ' X не принадлежит заданному промежутку'
        document.getElementById('result').innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formul')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById('UserEnter').submit();
    } else {
        alert('Повторите ввод')
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById('result').innerText
console.log(messageText)
let result;
let check = false;

const elementX = document.getElementById('x');
elementX.addEventListener('input', verify);

const elementA = document.getElementById('a');
elementA.addEventListener('keyup', verify);

const elementB = document.getElementById('b');
elementB.addEventListener('keyup', verify);

const elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById('send');
elementSend.addEventListener('click', send)