// window.setTimeout(() => alert("Time's Up!"), 3000);

// window.setTimeout(() => alert("Time's Up!"), 3000);

// window.clearTimeout(5);

function chant() { console.log('Beetlejuice'); }

const summon = window.setInterval(chant, 1000);

window.clearInterval(summon);


/*This code receives a reference to our square div, then sets a variable called angle
to 0. We then use the setInterval() method to increase the value of angle by 2
(we also use the % operator so that it resets to 0 at 360), then set the transform
CSS3 property to rotate that number of degrees. The second argument is 1000/60,
which equates to a frame speed of 60 frames per second.*/


// const squareElement = document.getElementById('square');

// let angle = 0;
// setInterval(() => {
//     angle = (angle + 2) % 360;
//     squareElement.style.transform = `rotate(${angle}deg)`
// }, 1000 / 60);


const squareElement = document.getElementById('square');
let angle = 0;
function rotate() {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

cancelAnimationFrame(id);

const superman = document.getElementById('hero');
const powers = superman.dataset.powers;
console.log(powers);

//const maxLength = Number(element.dataset.maxLength);


localStorage.setItem('name', 'Walter White');

localStorage.getItem('name');

localStorage.name = 'Heisenberg';
console.log(localStorage.name);

// localStorage.removeItem('name');

// delete localStorage.name;

// localStorage.clear();

navigator.geolocation.getCurrentPosition(youAreHere);

function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude},
    Longitude: ${position.coords.longitude}`);
}

const user = navigator.geolocation.watchPosition(youAreHere);

navigator.geolocation.clearWatch(user);

const btn = document.getElementById('rainbow');
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {
    document.body.style.background = rainbow[Math.floor(7 *
        Math.random())];
}

btn.addEventListener('click', change);


const form = document.forms[0];
form.addEventListener('submit', factorize, false);
function factorize(event) {
    // prevent the form from being submitted
    event.preventDefault();

    const number = Number(form.number.value);
    document.getElementById('output').innerText = factorsOf(number);
}
function factorsOf(n) {
    if (Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}


const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output2');
const form2 = document.forms[0];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

form2.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}

connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);

connection.addEventListener('close', () => {
    output('DISCONNECTED');
}, false);
connection.addEventListener('error', (event) => {
    output(`<span style='color: red;'>ERROR:${event.data}</span>`);
}, false);


const canvasElement = document.getElementById('canvas');

const context = canvasElement.getContext('2d');

context.fillStyle = "#0000cc"; // a blue fill color
context.strokeStyle = "#ccc"; // a gray stroke color

context.lineWidth = 4;

context.fillRect(10, 10, 100, 50);

context.strokeRect(10, 100, 100, 50);

context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();

context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';

context.lineWidth = 4;
context.stroke();

context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);