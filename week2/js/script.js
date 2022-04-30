const lastmod = document.querySelector('#date');
const toadysdate = new Date()
lastmod.innerHTML = `${toadysdate}`;

//   This is a block statement 
{
    let blockStatement = document.querySelector('.blockStatement');
    const message = 'Hello!';
    blockStatement = alert(message);

}
// typeOf Example
document.querySelector('.typesOfOperators').innerHTML =
    typeof "john" + "<br>" +
    typeof 3.14 + "<br>" +
    typeof NaN + "<br>" +
    typeof false + "<br>" +
    typeof [1, 2, 3, 4] + "<br>" +
    typeof { name: 'john', age: 34 } + "<br>" +
    typeof new Date() + "<br>" +
    typeof function () { } + "<br>" +
    typeof myCar + "<br>" +
    typeof null;


// Method Examples

// upper method
let text = "Alexa";
let result = text.toUpperCase();
document.querySelector('.upper').innerHTML = result;

// lower method
let lowertext = "ALEXA";
let lowerResult = lowertext.toLowerCase();
document.querySelector('.lower').innerHTML = lowerResult;

let position = "Alexa";
let positionResult = position.charAt(1);
document.querySelector('.position').innerHTML = positionResult;

let index1 = text.indexOf('A');
document.querySelector('.index1').innerHTML = index1;

let index2 = text.indexOf('z');
document.querySelector('.index2').innerHTML = index2;

let last = text.lastIndexOf('a');
document.querySelector('.last').innerHTML = last;

let include = text.includes('a');
document.querySelector('.includes1').innerHTML = include;

let include2 = text.includes('z');
document.querySelector('.includes2').innerHTML = include2;

let start = text.startsWith('A');
document.querySelector('.starts1').innerHTML = start;

let start2 = text.startsWith('a');
document.querySelector('.starts2').innerHTML = start2;

let end = text.endsWith('A');
document.querySelector('.ends1').innerHTML = end;

let end2 = text.endsWith('a');
document.querySelector('.ends2').innerHTML = end2;

let example = 'JavaScript';
let exampleResult = example.concat('Ninja');
document.querySelector('.concat1').innerHTML = exampleResult;

let example2 = 'Hello';
let example2Result = example2.concat(' ', 'World', '!');
document.querySelector('.concat2').innerHTML = example2Result;

let example3 = 'Java' + 'Script' + ' ' + 'Ninja';
document.querySelector('.concat3').innerHTML = example3;

let example4 = '    Hello World    ';// the space in the middle ➥ will be preserved
let example4Result = example4.trim();
document.querySelector('.trim1').innerHTML = example4Result;

let example5 = ' \t\t JavaScript Ninja! \r';// escaped tabs and ➥ carriage returns are also removed
let example5Result = example5.trim();
document.querySelector('.trim2').innerHTML = example5Result;

let example6 = example2.repeat(2);
document.querySelector('.repeat').innerHTML = example6;


// Array Examples

let avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
// removes the last item from an array, we can use the pop() method, so it removed Hulk
avengers.pop();
console.log(avengers);
//  shift() method works in a similar way to the pop() method, but this removes the first item in the array, got rid of captin america
avengers.shift();
console.log(avengers);
// push() method appends a new value to the end of the array, so this is adding Hulk back
avengers.push('Hulk');
console.log(avengers);
//  unshift() method appends a new value to the beginning of the array
avengers.unshift('Captain America');
console.log(avengers);
// concat adds to the array, so this is going to add Hawkeye and Black Widow to the end of the list
// avengers = avengers.concat(['Hawkeye', 'Black Widow']);
// // console.log(avengers);
//the sprread operator used ... before and after avengers, adds to the array, so this is going to add Hawkeye and Black Widow to the end of the list
avengers = [...avengers, ...['Hawkeye', 'Black Widow']];
console.log(avengers);
// needed to make avengers2 a variable in order to get the join, that replaced the commas with & sign
let avengers2 = avengers.join(' & ');
console.log(avengers);
avengers.slice(2, 4) /*starts at the third item (index of 2) and finishes at the fourth (the item with index 4 is not included). Note: that this operation is non-destructive ― no items are actually removed from
the array, as we can see if we take a look at the avengers array*/
avengers.splice(3, 1, 'Scarlet Witch'); // This is a destructive operation as it changes the value of the array
console.log(avengers);
// avengers.reverse(); what was last like scarlet witch is now first in the list
console.log(avengers);
avengers.sort();
// sorted A-Z
console.log(avengers);

document.querySelector('.array').textContent = avengers;
document.querySelector('.array2').textContent = avengers2;


// Multi-dimensional Array

const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];
const nested = [summer, winter];
console.log(nested);

// Flattening an array involves removing all nested arrays so all the values are on the same level in the array. So the reslut will combine the winter and summer list to be one list.
const flat = [...summer, ...winter];
console.log(flat);


// Sets

const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
console.log(jla);

// // The number of values in a set can be found using the size() method
// jla.size();
// console.log(jla);

// // The has() method can be used to check if a value is in a set. This returns a boolean value of true or false:
// jla.has('Superman');
// console.log(jla);


// A set can be converted into an array by placing the set, along with the spread operator directly inside an array literal

const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);

// const shoppingArray = [...shoppingSet]
// console.log(shoppingArray);

// OR you can use Array.from(), to turn a Set into an Array
const shoppingArray = Array.from(shoppingSet)
console.log(shoppingArray);

// Maps

// An empty map object can be created using the new operator and Map() constructor:
let romanNumerals = new Map();
//set() method can be used to add a key and value pair to a map. The first value is the key and the second is the value:
romanNumerals.set(1, 'I');
console.log(romanNumerals);
//Multiple items can be added to the set by repeatedly calling the set() 
romanNumerals.set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);

//A map is a bit like a dictionary where you can look up a value based on the key. To look up a value, we can use the get() method:
const lookup = romanNumerals.get(4);
console.log(lookup);

// The has() method can be used to check if a particular key is in a map
const lookup2 = romanNumerals.has(5);
console.log(lookup2);

//A map can be created with multiple values by using a nested array as a parameter:
const dcHeroes = new Map([
    ['Clark Kent', 'Superman'],
    ['Bruce Wayne', 'Batman']
]);
console.log(dcHeroes);

// Logic

const n = 12;
if (n % 2 === 0) {
    console.log('n is an even number');
} else {
    console.log('n is an odd number');
}
// This uses the % operator that we met in the previous chapter to check the
// remainder when dividing the variable n by 2. All even numbers leave no
// remainder when divided by 2, so we can test to see if n%2 is equal to zero; if it is,
// n must be even. If n is not even, then it must be odd.

// Ternary Operator
const x = 5;
x % 2 === 0 ? console.log('x is an even number') :
    console.log('x is an odd number');

// We could make the example even shorter by placing the ternary operator inside a template string
console.log(`n is a ${(n % 2 === 0) ? 'even' : 'odd'} number`);

// Switch Statements

// if (number === 4) {
//     console.log('You rolled a four');
//     } else if (number === 5) {
//     console.log('You rolled a five');
//     } else if(number === 6){
//     console.log('You rolled a six');
//     } else {
//     console.log('You rolled a number less than four');
//     }

const number = 5;
switch (number) {
    case 4:
        console.log('You rolled a four');
        break;
    case 5:
        console.log('You rolled a five');
        break;
    case 6:
        console.log('You rolled a six');
        break;
    default:
        console.log('You rolled a number less than four');
        break;
}


// While Loops
let bottles = 10;
while (bottles > 0) {
    console.log(`There were ${bottles} green bottles, hanging on
a wall. And if one green bottle should accidentally fall,
there'd be ${bottles - 1} green bottles hanging on the wall`);
    bottles--;
}

// or

let mask = 11;
while (--mask) {
    console.log(`There were ${mask} green masks, hanging on
a wall. And if one green mask should accidentally fall,
there'd be ${mask - 1} green mask hanging on the wall`);
}

// do ... while Loops
let plates = 10;
do {
    console.log(`There were ${plates} green plates, hanging on
a wall. And if one green plate should accidentally fall,
there'd be ${plates - 1} green plate hanging on the wall`);
    plates--;
} while (plates > 0)

//For Loops
for (let glasses = 10; glasses > 0; glasses--) {
    console.log(`There were ${glasses} green glasses, hanging on
    a wall. And if one green glass should accidentally fall,
    there'd be ${glasses - 1} green glass hanging on the wall`);
}

// Nested For Loops
for (let i = 1; i < 13; i++) {
    for (let j = 1; j < 13; j++) {
        console.log(`${j} multiplied by ${i} is ${i * j}`);
    }
}
// It will have an inner loop that will run all the way through before the next step 
//of the outer loop occurs.
// The outer loop counts up from i=1 to i=12. For every iteration of the outer loop,
// the inner loop counts up from j=1 to j=12. This means that it starts in the first
// iteration with i = 1 and j = 1, producing the following output that is logged to
// the console (1 multiplied by 1 is 1)
//In the next iteration, we are still inside the inner loop, so i remains as 1, but j is
// incremented to 2, giving: (1 multiplied by 2 is 2)

//Array Loops

for (let i = 0, max = avengers.length; i < max; i++) {
    console.log(avengers[i]);
}
//There are a few points to note in this example:
//We want the loop to continue until it reaches the length of the
// array; this can be set as the variable max in the initialization part of the for loop,
// then the condition becomes i < max. This is preferable to using i <
// avengers.length because then the length of the avengers array would have to be
// calculated after every pass through the loop.

//For of Loop

for (const value of avengers) {
    console.log(value);
}

//For Maps

//Reference for the below example, this is what is being looped though, this is in our earlier code
// const romanNumerals = new Map();
// romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');

//Every map object has a keys() method lets us iterate over each key with the following for-of loop:
for (const key of romanNumerals.keys()) {
    console.log(key);
}

//There is also a values() method that lets us iterate over the values in a similar way:

for (const value of romanNumerals.values()) {
    console.log(value);
}

//If you want to access both the key and the value, you can use the entries() method:

for (const [key, value] of romanNumerals.entries()) {
    console.log(`${key} in Roman numerals is ${value}`);
}


//Quiz Example
// Set the questions
// const quiz = new Map([
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonderwoman's real name?","Dianna Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
//   ]);

//  // initialize score
// let score = 0;

// for(const [question,answer] of quiz.entries()){

//   // get answer from user
//   const response = prompt(question);
//   // check if answer is correct
//   if(response === answer){
//     alert('Correct!');
//     // increase score by 1
//     score++;
//   } else {
//     alert(`Wrong! The correct answer was ${answer}`);
//   }
// }

// // At the end of the game, report the player's score
// alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);


// function with arguments
// We can create a simple function called arguments() that will return the arguments object so we can see what it contains.

function arguments() {
    return arguments;
}

arguments('hello', NaN);

arguments(1, 2, 3, 4, 5);


//For example, the following function will have access to an array of all the arguments entered:
function rest(...args) {
    return args;
}

//The args parameter is an actual array, and has access to the same methods. For
// example we can use a for-of loop to iterate over each value given as an
// argument
function rest(...args) {
    for (value of args) {
        console.log(value);
    }
}
rest(2, 4, 6, 8);


// Improved Mean Function

function mean(...values) {
    let total = 0;
    for (const value of values) {
        total += value; //the += operator is used to add the next value onto the total
    }
    return total / values.length;
}

mean(2, 8, 13, 11, 4, 2);

// Default parameters should always come after non-default parameters, otherwise
// default values will always have to be entered anyway. Consider the following
// function for calculating a discounted price in a store:

function discount(price, amount = 10) {
    return price * (100 - amount) / 100;
}

//  Arrow Function

const square = x => x * x;
//In the square example above parameter, x didn’t need to go in parentheses because it’s the only parameter.

const add = (x, y) => x + y;
//Multiple parameters need to go inside parentheses, for example, the following function adds two numbers together

const hello = () => alert('Hello World!');
//If the function doesn’t require any parameters, a pair of empty parentheses must go before the arrow

// Filter

//The filter() method returns a new array that only contains items from the
//original array that return true when passed to the callback.
const numbers = [2, 7, 6, 5, 11, 23, 12]
numbers.filter(x => x % 2 === 0); // this returns true if the number is even

//To find all the falsy values, the following filter can be used:
// array.filter(x => !x);
// This uses the not operator, ! to return the compliment of a value’s boolean
// representation. This means that any falsy values will return true and be returned
// by the filter

//Chaining Iterators Together

const sales = [100, 230, 55];
totalAfterTaxSales = sales.map((amount) => amount * 1.15).reduce((acc, val) => acc + val);
console.log(totalAfterTaxSales);


//Quiz Example

// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
//     ];
//     function start(quiz){
//     let score = 0;
//     // main game loop
//     for(const [question,answer] of quiz){
//     const response = ask(question);
//     check(response,answer);
//     }
//     // end of main game loop
//     gameOver();
//     // function declarations
//     function ask(question){
//     return prompt(question);
//     }
//     function check(response,answer){
//     if(response === answer){
//     alert('Correct!');
//     score++;
//     } else {
//     alert(`Wrong! The correct answer was ${answer}`);
//     Functions 161
//     }
//     }
//     function gameOver(){
//     alert(`Game Over, you scored ${score} point${score !== 1 ?
//     ➥ 's' : ''}`);
//     }
//     }
//     start(quiz);