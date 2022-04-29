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
