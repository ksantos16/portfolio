// call () Method
function sayHello() {
    return `Hello, my name is ${this.name}`;
}

const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

sayHello.call(clark);

sayHello.call(bruce);

/*If the function that’s called requires any parameters, these need to be provided as
arguments after the first argument, which is always the value of this*/

//update the sayHello() function to give a more generalized greeting

function sayHello(greeting = 'Hello') {
    return `${greeting}, my name is ${this.name}`;
}
sayHello.call(clark, 'How do you do');

sayHello.call(bruce);

//using null in the call () method
function square(x) {
    return x * x;
}

square.call(null, 4)

//a description property to a function that describes what it does

square.description = 'Squares a number that is provided as an argument'

//Memoization

function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x]
}

square(3);

square(-11);

square.cache;

//Immediately Invoked Function Expressions

(function () {
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();


//Initialization Code

(function () {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(), today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();

//Self-contained Code Blocks

(function () {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
}());
(function () {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());

/*Notice that both code blocks include a variable called name, but the modules
don’t interfere with each other.*/


//Rewritting a functionS

function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}

function party() {
    console.log('Been there, got the T-Shirt');
}

party();

party();

party();

/*Every time the function is called after the first time, it will log the message “Been
there, got the T-Shirt”*/

const beachParty = party; // note that the party function has not been invoked
beachParty(); // the party() function has now been redefined, even though it hasn't been called explicitly

party();

beachParty(); // but this function hasn't been redefined

beachParty(); // no matter how many times this is called it will remain the same ('Wow this is amazing!')

party.music = 'Classical Jazz'; // set a property of the function

party();

party.music; // function has now been redefined, so the property doesn't exist


//Recursive Functions

function collatz(n, sequence = [n]) {
    if (n === 1) {
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }
    return collatz(n, [...sequence, n]);
}

/*This function takes a number as a parameter, as well as another parameter called
sequence, which has a default value of an array containing the first parameter.
The second parameter is only used when the function calls itself recursively.
The first thing the function does is tests to see if n has a value of 1. If it does, the
function returns a message to say how many steps it took. If it hasn’t reached 1, it
checks if the value of n is even (in which case it divides it by 2), or odd, in which
case it multiplies by 3 and then adds 1. The function then calls itself, providing
the new value of n and the new sequence as arguments. The new sequence is
constructed by placing the old sequence and the value of n inside a new array
and applying the spread operator to the old sequence.*/


//Callback

function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}

function selfDestruct() {
    console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ...?');

wait('This tape will self-destruct immediately ... ', selfDestruct, 0);
console.log('Hmmm, should I accept this mission or not ...?');



//Promises

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log('Before the roll');

const roll = new Promise((resolve, reject) => {
    const n = dice.roll();
    if (n > 1) {
        setTimeout(() => { resolve(n) }, n * 200);
    } else {
        setTimeout(() => reject(n), n * 200);
    }
});
roll.then(result => console.log(`I rolled a ${result}`))
    .catch(result => console.log(`Drat! ... I rolled a ${result}`));
console.log('After the roll');


// let login = "";
// let userName = "";
// //Chaining multiple Promises
// login(userName)
//     .then(user => getPlayerInfo(user.id))
//     .then(info => loadGame(info))
//     .catch(error)
// throw error;


// Async Functions
async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo(user.id);
        // load the game using the returned info
    }
    catch (error) {
        throw error;
    }
}

//Generalized Functions

function random(a, b = 1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a, b] = [b, a];
    }
    return Math.floor((b - a + 1) * Math.random()) + a;
}

console.log(random(6));
console.log(random(10, 20));


// more generic

function random(a, b, callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
    const result = Math.floor((b - a + 1) * Math.random()) + a
    if (callback) {
        result = callback(result);
    }
    return result;
}

//Functions That Return Functions

function greeter(greeting = 'Hello') {
    return function () {
        console.log(greeting);
    }
}
const englishGreeter = greeter();
englishGreeter();

const frenchGreeter = greeter('Bonjour');
frenchGreeter();

const germanGreeter = greeter('Guten Tag');
germanGreeter()

// Closure

function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
}

const closure = outer(); //The variable closure now points to the inner() function that is returned by the outer() function.

closure();


function closureEx() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
}

const toFahrenheit = closureEx();

console.log(toFahrenheit(30));

// Counter Example

/*This function starts a count using the variable i. It then returns a function that
uses a closure that traps and maintains access to the value of i. This function also
has the ability to change the value of i, so it increments i by one every time it’s
invoked. The reference to the variable i that is defined in the original function is
maintained in the new function via a closure.*/

function counter(start) {
    let i = start;
    return function () {
        return i++;
    }
}

const count = counter(1); /*The variable count now points to a function that has full access to the variable i
that was created in the scope of the counter() function. Every time we invoke
the count() function, it will return the value of i and then increment it by 1*/

count();


// Generators

function* exampleGenerator() {
    // code for the generator goes here
}

function* fibonacci(a, b) {
    let [prev, current] = [a, b];
    while (true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}

const sequence = fibonacci(1, 1);

sequence.next();
sequence.next();
sequence.next();

// Pure Function

function square(x) {
    return x * x;
}

function hypotenuse(a, b) {
    return Math.sqrt(square(a) + square(b));
}

function sum(array, callback) {
    if (callback) {
        array = array.map(callback);
    }
    return array.reduce((a, b) => a + b);
}

sum([1, 2, 3]); // returns 1 + 2 + 3

sum([1, 2, 3], square); // returns 1^2 + 2^2 + 3^2


//High Order Functions


function multiplier(x) {
    return function (y) {
        return x * y;
    }
}

doubler = multiplier(2);

console.log(doubler(10));

tripler = multiplier(3);

console.log(tripler(10));


/*Here’s another example, where we create a higher-order power() function. It
returns a second function that calculates values to the power of a given argument.
To make this calculation, the second function uses a closure to maintain a
reference to the initial argument supplied to the power() function:*/

function power(x) {
    return function (power) {
        return Math.pow(x, power);
    }
}

twoExp = power(2);

function twoExp(power) {
    return Math.pow(x, power);
}

twoExp(5);

power(3)(5);

// General Curry Function

function curry(func, ...oldArgs) {
    return function (...newArgs) {
        const allArgs = [...oldArgs, ...newArgs];
        return func(...allArgs);
    }
}

const divider = (x, y) => x / y;

divider(10, 5);

const reciprocal = curry(divider, 1);

reciprocal(2);

//Response Interface

const url = 'https:example.com/data';
fetch(url)
    .then((response) => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    //.then(response => // do something with response )
    .catch(error => console.log('There was an error!'));


// AJAX Example

const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
        .then(response => {
            outputDiv.innerHTML = `<img class="contacticon" src='https://ksantos16.github.io/portfolio/week7/gif/growingrings.gif' alt = "spinner" >`;
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.text())
        .then(text => outputDiv.innerText = text)
        .catch(error => console.log('There was an error:', error))
}, false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
        .then(response => {
            outputDiv.innerHTML = `<img class="contacticon" src='https://ksantos16.github.io/portfolio/week7/gif/growingrings.gif' alt = "spinner" >`;
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(data => outputDiv.innerText = data.value)
        .catch(error => console.log('There was an error:', error))
}, false);

// To DO

// const form = document.forms['todo'];
// form.addEventListener('submit', addTask, false);
// function addTask(event) {
//     event.preventDefault();
//     const number = form.task.value;
//     const task = {
//         userId: 1,
//         title: form.task.value,
//         completed: false
//     }
//     const data = JSON.stringify(task);
//     const url = 'https://jsonplaceholder.typicode.com/todos';
//     const headers = new Headers({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     });
//     const request = new Request(url,
//         {
//             method: 'POST',
//             header: headers,
//             body: data
//         }
//     )
//     fetch(request)
//         .then(response => response.json())
//         .then(task => console.log(`Task saved with an id of ${task.id}`))
//         .catch(error => console.log('There was an error:', error))
// }


//FormData Example

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
    event.preventDefault();
    const task = new FormData(form);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
        {
            method: 'POST',
            mode: 'cors',
            header: headers,
            body: JSON.stringify(task)
        }
    )
    fetch(request)
        .then(response => response.json())
        .then(data => console.log(`${data.title} saved with an id of ${data.id}`))
        .catch(error => console.log('There was an error:', error))
}