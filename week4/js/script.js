
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


