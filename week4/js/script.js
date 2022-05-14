
//square bracket notation of a form object
//const form = document.forms[0];

//OR

//form object
const form = document.forms['search'];
form.addEventListener('submit', search, false);

//square bracket notation,  input field has a name attribute
//of searchInput and can be accessed using this code:
//const input = form['searchInput']


const input = form.elements.searchInput;
//input.addEventListener('focus', () => alert('focused'), false);

//input.addEventListener('blur', () => alert('blurred'), false);

input.addEventListener('change', () => alert('changed'), false);

function search() {
    alert(' Form Submitted');
}

//default prevents being sent to a server
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

//this is like a placeholder, but has tp be deleted by user prior entering it's search
input.value = 'Search Here';


/* the default text will disappear when the user clicks inside the input field
(the focus event) and reappear if the user leaves the field blank and clicks away
from it (the blur event).

this is like html markup for placholder, but dont through JS
*/
input.addEventListener('focus', function () {
    if (input.value === 'Search Here') {
        input.value = ''
    }
}, false);
input.addEventListener('blur', function () {
    if (input.value === '') {
        input.value = 'Search Here';
    }
}, false);


const form1 = document.forms['hero'];
form1.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    console.log(hero);

    hero.name = heroName.value; // create a name propertybased on the input field's value

    hero.realName = realName.value;

    hero.powers = [];
    for (let i = 0; i < hero.powers.length; i++) {
        if (form1.powers[i].checked) {
            hero.powers.push(hero.powers[i].value);
        }
    }

    hero.category = hero.category.value;

    hero.age = hero.age.value;

    hero.city.options[form.city.selectedIndex].text



    const label = form.querySelector('label');
    const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = '! Your name is not allowed to start with X.';
    label.append(error);

    function validateInline() {
        const heroName = this.value.toUpperCase();
        if (heroName.startsWith('X')) {
            error.style.display = 'block';
        } else {
            error.style.display = 'none';
        }
    }

    function disableSubmit(event) {
        if (event.target.value === '') {
            document.getElementById('submit').disabled = true;
        } else {
            document.getElementById('submit').disabled = false;
        }
    }

    heroName.addEventListener('keyup', disableSubmit, false);


    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

//Constructor Function

/*const Dice = function (sides = 6) {
    this.sides = sides;
    this.roll = function () {
        return Math.floor(this.sides * Math.random() + 1)
    }
}*/


//Newer version
/*By convention, the names of constructor functions or class declarations are
capitalized, which is the convention used for classes in class-based programming
languages.*/

/*set the sides property to the argument that is provided to the constructor function, or 6, if 
no argument is provided. It also adds a method called roll(), which returns a random number
from 1 up to the number of sides the dice has.*/

class Dice {
    constructor(sides = 6) {
        this.sides = sides;
        //     this.roll = function () {
        //         return Math.floor(this.sides * Math.random() + 1);
        //     };
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
    static description() {
        return 'A way of choosing random numbers'
    }
}

// instance of the dice constructor function using the new operator.
const redDice = new Dice();

const blueDice = new Dice(20);

let type = blueDice instanceof Dice;
console.log(type);

const sidez = blueDice.sides;
console.log(sidez);

const roll = blueDice.roll()
console.log(roll);

const greenDice = new redDice.constructor(10);

type = greenDice instanceof Dice;
console.log(type);

const desc = Dice.description();
console.log(desc);

/*Static methods are not available to instances of the class. So, in our example, the
instances of Dice such as redDice and blueDice cannot call the static
description() method:*/
//redDice.description
// << TypeError: red.description is not a function

//Protypal Inheritance

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
}

const leo = new Turtle('Leonardo');
console.log(leo);

Turtle.prototype.weapon = 'Hands';

Turtle.prototype.attack = function () {
    return `Feel the power of my ${this.weapon}!`;
}

/*Notice that there’s a reference to this.weapon in the prototype attack() method,
and when the instance calls the attack() method, it uses the instance’s weapon
property. This is because this in the prototype always refers to the instance that
actually calls the method.*/


const raph = new Turtle('Raphael');
console.log(raph);

const don = new Turtle('Donatello');


Turtle.prototype.weapon = 'Feet';//this isn't working, why?
console.log(Turtle);

leo.weapon = 'Katana Blades';// this has updated the weapon

leo.attack();
console.log(leo);//why am I only seeing the name and weapon and not the phrases

raph.weapon = 'Sai';
don.weapon = 'Bo Staff';

Turtle.prototype.food = 'Pizza';

Turtle.prototype.eat = function () {
    return 'Mmm, this ${this.food} tastes great!';
}

console.log(Turtle);// Why wasn't food added?

const mike = new Turtle('Michelangelo');
mike.weapon = 'Nunchakus';
mike.attack();


const food = mike.food;
console.log(food);

const eat = mike.eat();
console.log(eat);


//Getter / Setters

const me = { name: 'DAZ' };

me.age = 21;

Object.getOwnPropertyDescriptor(me, 'name');

// << { value: 'DAZ', writable: true, enumerable: true, configurable: true }

Object.defineProperty(me, 'eyeColor', { value: 'blue', writable: false, enumerable: true });

me.age = 21;
me.retirementAge = 65;
Object.defineProperty(me, 'yearsToRetirement', {
    get() {
        if (this.age > this.retirementAge) { return 0; }
        else { return this.retirementAge - this.age; }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});


Object.defineProperty(me, 'age', {
    get() {
        return 21;
    },
    set(value) {
        return value;
    }
});



//Creating Objects from Other Object

const Human = {
    arms: 2,
    legs: 2,
    walk() { console.log('Walking'); }
}

const lois = Object.create(Human);

const newName = lois.name = 'Lois Lane';
console.log(newName);

const job = lois.job = 'Reporter';
console.log(job);

const jimmy = Object.create(Human, { name: { value: 'Jimmy Olsen', enumerable: true }, job: { value: 'Photographer', enumerable: true } });


//Super-class

const Superhuman = Object.create(Human);
Superhuman.change = function () {
    return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};

Superhuman.name = 'Name Needed';
Superhuman.realName = 'Real Name Needed';

const superman = Object.create(Superhuman);

superman.name = 'Superman';

superman.realName = 'Clark Kent';

console.log(superman.change());//this works

Superhuman.init = function (name, realName) {
    this.name = name;
    this.realName = realName;
    this.init = undefined; // this line removes the init function, so it can only be called once
    return this;
}

const batman = Object.create(Superhuman);
batman.init('Batman', 'Bruce Wayne');
console.log(batman.change());


//example of chaining a technique
const aquaman = Object.create(Superhuman).init('Aquaman', 'Arthur Curry');
console.log(aquaman.change());


//mix in

const wonderWoman = Object.create(Superhuman);

mixin(wonderWoman, { name: 'Wonder Woman', realName: 'Diana Prince' });


console.log(wonderWoman.change());//not working


//for-of

superman.findFriends = function () {
    for (const friend of this.friends) {
        console.log(`${friend.name} is friends with ${this.name}`);
    };
}
superman.findFriends();


//jQuery

$(para).addClass('important').append('<p>Another Paragraph</p>');

//Templates

const tasks = [
    { name: 'Get Milk' },
    { name: 'Go for a run' },
    { name: 'Finish writing last chapter' },
    { name: 'Phone bank' },
    { name: 'Email Craig' }
]

//Packages
NamedNodeMap