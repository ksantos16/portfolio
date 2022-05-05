let user = {
    name: "John",
    age: 30
};

//Here we’ve just used a Function Expression to create a function and assign it to the property user.sayHi of the object.
user.sayHi = function () {
    alert("Hello!");
};

user.sayHi(); //Then we can call it

// method shorthand
user = {
    sayHi() { // same as "sayHi: function(){...}"
        alert("Hello");
    }
};

let user2 = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" is the "current object"
        alert(this.name);
    }

};

user2.sayHi(); // John

let user3 = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

//The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.


let user5 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user5.sayHi(); // Ilya


let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // shows the current step
        alert(this.step);
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

//This object has a sides property and a roll() method. Inside the roll() method we use this.sides to refer to the value of the object’s sides property.
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}


//Example of an Object Literal

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

// Computed Properties

//The new Symbol date type can also be used as a computed property key:
const name = Symbol('name');
const supergirl = { [name]: 'Supergirl' };
//You can access the property using the square bracket notation:
supergirl[name];

//A new property can be added to an object using a symbol as a key if the square bracket notation is used:

const realName = Symbol('real name');
supergirl[realName] = 'Kara Danvers';

//The symbols used for property keys are not limited to being used by only one object - they can be reused by any other object:
const daredevil = { [name]: 'Daredevil', [realName]: 'Matt Murdoch' };

//hasOwnProperty() Method

superman.hasOwnProperty('city');
//<< false
superman.hasOwnProperty('name');
//<< true

//Finding all the Properties of an Object

for (const key in superman) {
    console.log(key + ": " + superman[key]);
}
/* << "name: Superman"
<< "real name: Clark Kent"
<< "height: 75"
<< "weight: 235"
<< "hero: true"
<< "villain: false"
<< "allies: Batman,Supergirl,Superboy"
<<"fly: function (){
console.log(\"Up, up and away!\");
    }" */

//In this example, we create a variable called key. We then iterate over the
// properties of the superman object and use key to log the property name and
// superman[key] to look up the value of each property

/*To make sure that only an object’s own properties are returned, a quick check can
be implemented beforehand:*/

for (const key in superman) {
    if (superman.hasOwnProperty(key)) {
        console.log(key + ": " + superman[key]);
    }
}

//can also search by  Object.keys(),  Object.values(), or Object.entries()
//Example

for (const [key, value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
}

//Adding Properties
//Example
superman.city = 'Metropolis';
//now this will be apart of the superman object

//Objects as Parameters to Functions

function greet({ greeting, name, age }) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}

greet({
    greeting: `What's up dude`, age: 10, name: `Bart`
});

//<< 'What\'s up dude! My name is Bart and I am 10 years old.'

//Namespace
//Example

const myMaths = {
    square(x) {
        return x * x;
    },
    mean(array, callback) {
        if (callback) {
            array.map(callback);
        }
        const total = array.reduce((a, b) => a + b);
        return total / array.length;
    }
};

myMaths.square(3)
// << 9
// myStats.mean([1, 2, 3])
// << 2


//JSON

const batman =
{
    "name": "Batman",
    "real name": "Bruce Wayne",
    "height": 74,
    "weight": 210,
    "hero": true,
    "villain": false,
    "allies": ["Robin", "Batgirl", "Superman"]
}


//The parse() method takes a string of data in JSON format and returns a JavaScript object:
//JSON.parse(batman);

//The stringify() method does the opposite, taking a JavaScript object and returning a string of JSON data, as can be seen in the example:

const wonderWoman = {
    name: 'Wonder Woman',
    'real name': 'Diana Prince',
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl', 'Donna Troy', 'Superman'],
    lasso: function () {
        console.log('You will tell the truth!');
    }
}

JSON.stringify(wonderWoman);


//Creating Regular Expressions

const pattern = /[a-zA-Z]+ing$/;


//test() Method

pattern.test('joke');
//<< false
pattern.test('joking');
//<< true


//Modifers

//For example, the following regular expression will match anything that starts
//with J followed by one or more vowels, then any letters or numbers ending in ing:
//pattern = /^J[aeiou]+\w+ing$/;
//<< /J[aeiou]+\w+ing/


/*A Practical Example
If we were looking for PDF files and had a list of filenames, this regular
expression could be used to find them (assuming they have a .pdf extension, of
course):*/

const pdf = /.*\.pdf$/;
pdf.test('chapter5.pdf');
//<< true
pdf.test('report.doc');
//<< false


//A Function To Create Elements

const heroes = document.getElementById('roster');
const flash = document.createElement('li');
flash.textContent = 'Flash';

function createElement(tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el
}
const aquaman = createElement('li', 'Aquaman');

heroes.appendChild(flash);
heroes.insertBefore(aquaman, flash);

const h1 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText, oldText);


//Event Listeners

// function doSomething() {
//     console.log('Something Happened!');
// }
// addEventListener('click', doSomething);

//The type property returns the type of event that occurred
// function doSomething(event) {
//     console.log(event.type);
// }
// addEventListener('click', doSomething);

//The target property returns a reference to the node that fired the event.
// function doSomething(event) {
//     console.log(event.target);
// }

// addEventListener('click', doSomething);

// const clickParagraph = document.getElementById('click');
// clickParagraph.addEventListener('click', () =>
//     console.log('click'));
// clickParagraph.addEventListener('mousedown', () =>
//     console.log('down'));
// clickParagraph.addEventListener('mouseup', () =>
//     console.log('up'));

// const dblclickParagraph =
//     document.getElementById('dblclick');
// dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event) {
    event.target.classList.toggle('highlight');
}

// const mouseParagraph = document.getElementById('mouse');
// mouseParagraph.addEventListener('mouseover', highlight);
// mouseParagraph.addEventListener('mouseout', highlight);
// mouseParagraph.addEventListener('mousemove', () =>
//     console.log('You Moved!'));

addEventListener('keydown', highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('keydown', (event) => console.log(`You wpressed the ${event.key} character`));
// the following code will check to see if the user pressed the C key while holding down the Ctrl key:
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
        console.log('Action canceled!');
    }
});
//checks to see if the Shift key was held down when the mouse was clicked:
addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});

//Remove Listener
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click', remove);
}

//changing behavior
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

