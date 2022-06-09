//Canvas
const canvas = document.getElementById("myCanvas");

//Context is the place where your drawing is rendered.
const context = canvas.getContext("2d");

// "Paint Brush"
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";

//Drawing a rectangle
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

//Repeating image in a background
const canvas1 = document.getElementById("demo1");
const context1 = canvas1.getContext("2d");

context1.strokeStyle = "red";

const img = new Image();
img.src = "../week8/images/bg-bike.png";
console.log(img);

img.onload = function () {
    const pattern = context1.createPattern(img, "repeat");
    console.log(pattern);
    context1.fillStyle = pattern;
    context1.fillRect(10, 10, 100, 100);
    context1.strokeRect(10, 10, 100, 100);
};



//Doing a Gradient
const canvas2 = document.getElementById("demo2");
const context2 = canvas2.getContext("2d");
context2.strokeStyle = "red";
const gradient = context2.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, "blue");
gradient.addColorStop(1, "white");
context2.fillStyle = gradient;
context2.fillRect(10, 10, 100, 100);
context2.strokeRect(10, 10, 100, 100);



//Drawing a Circle
const canvas3 = document.getElementById("demo3");
const context3 = canvas3.getContext("2d");
context3.beginPath();
context3.arc(100, 100, 50, 0, Math.PI * 2, true);
context3.closePath();
context3.strokeStyle = "red";
context3.fillStyle = "blue";
context3.lineWidth = 3;
context3.fill();
context3.stroke();


/*function determineLocation() {
    if (navigator.onLine) {
        if (Modernizr.geolocation) {
            navigator.geolocation.getCurrentPosition(displayOnMap);
            let container = Raphael(document.getElementById("spinner"), 125, 125);
            let spinner = container.image("../week8/images/spinnerBW.svg", 0, 0, 125, 125);
        }
    }
}

var container = Raphael(document.getElementById("spinner"), 125, 125);
var spinner = container.image("../week8/images/spinnerBW.svg", 0, 0, 125, 125);
var attrsToAnimate = { transform: "r720" };
spinner.animate(attrsToAnimate, 60000);*/


let mice = document.querySelectorAll("#mouseContainer img");

let mouse = null;
for (let i = 0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", this.id);
    });
};



let cat = document.getElementById("cat");
cat.addEventListener("dragover", function (event) {
    event.preventDefault();
});

cat.addEventListener("drop", function (event) {
    const mouseHash = {};

    cat.addEventListener("drop", function (event) {
        const mouseHash = {
            mouse1: 'NOMNOMNOM',
            mouse2: 'Meow',
            mouse3: 'Purrrrrr ...'
        };
        const catHeading = document.getElementById('catHeading');
        const mouseID = event.dataTransfer.getData("text/plain");

        catHeading.innerHTML = mouseHash[mouseID];
        const mousey = document.getElementById(item);
        mousey.parentNode.removeChild(mousey);
        event.preventDefault();
    });
});

// function drop_handler(ev) {
//     ev.preventDefault();
//     // Get the id of the target and add the moved element to the target's DOM
//     const data = ev.dataTransfer.getData("text/plain");
//     ev.target.appendChild(document.getElementById(data));
// }


























