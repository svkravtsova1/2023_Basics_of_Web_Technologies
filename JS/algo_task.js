function verify() {
    console.log("a, b, x")
    let x = parseInt(elementX.innerText);
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    console.log(a, b, x)

    if (x >= a && x <= b) {
        result = ' X принадлежит заданному промежутку'
        document.getElementById('result').innerText = result;
    } else {
        result = ' X не принадлежит заданному промежутку'
        document.getElementById('result').innerText = result;
    }
}

const elementX = document.getElementById('x');
const elementA = document.getElementById('a');
const elementB = document.getElementById('b');

const elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify);