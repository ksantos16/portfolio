const lastmod = document.querySelector('#date');
const toadysdate = new Date()
lastmod.innerHTML = `${toadysdate}`;


// NOTE: how these buttons work to recall the information from localStorage you have to input the name in the input box that you 
// used when you saved the story click Find or Edit and then you can hit Display. If you just input the name and hit Display it 
// will not bring up the story.


function loadStory() {
    // imagine storyName and storyHTML are like boxes we put stuff that pertains to the name the box is given. 
    // Ex. given is if I had a box in my kitchen that had a label that says flour I would put flour in that box.

    // reding the line below in "English" it says, "Hey document, get the element who's id is 'name_input'. 
    // Take what you find inside the input box and the screen, its value, and store what you find in a variable namen'storyName'."
    let storyName = document.getElementById('name_input').value
    // reding the line below in "English" it says, "Hey localStorage, get the item stored using what's in 
    // the storyName variable/box as a key. Put the story you find in a variable/box called 'storyHTML'"
    let storyHTML = localStorage.getItem(storyName)
    // reding the line below in "English" it says, "Hey document, get the element who's id is 'story_editor' 
    // and put in the visual box on the screen (in it's value) what is in the 'storyHTML' variable."
    document.getElementById('story_editor').value = storyHTML
}

function saveStory() {
    // reding the line below in "English" it says, "Hey document, get the element who's id is 'name input'. 
    // Take what you find inside the input box on the screen, its value, and store what you find in a variable name 'storyName'."
    // NOTE: When you want to get the user's input from any input or text area tag, you use the special 
    // word 'value'. And when you want to show something to a user, you use a section and the special word 'innerHTML'. 
    // Again, input or textarea use value; a section, use innerHTML.
    let storyName = document.getElementById('name_input').value
    let storyHTML = document.getElementById('story_editor').value
    // line below stores the story. In "English" it says, "Hey localStorage, store whats in the 'storyHTML 
    // variable/box and label the stored piece of information with what you find on the storyName variabke/box."
    localStorage.setItem(storyName, storyHTML)
}

function displayStory() {
    // reding the line below in "English" it says, "Hey document, go get the element who's id is 'story_editor. 
    // Take what you fond inside it, its value, and store what you find in a variable(box) named 'storyHTML'."
    let storyHTML = document.getElementById('story_editor').value
    // reding the line below in "English" it says, "Hey document, go get the element who's id is 'story_display' 
    // and put what you find in the storyHTML variable/box beween the story display's starting and ending tags."
    document.getElementById('story_display').innerHTML = storyHTML
}