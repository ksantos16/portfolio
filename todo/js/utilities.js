import { qs, writeToLS, readFromLS, bindTouch } from "./ls.js";


let toDoList = null;

function storeToDoTasks(value, key) {
    const buildList = {
        id: new Date.now(),
        content: value,
        completed: false
    };

    toDoList.push(buildList),
        writeToLS(key, toDoList);
};

function getToDoTask(key) {
    if (toDoList === null) {
        toDoList = readFromLS(key) || []
    }
    return toDoList;
}

function removeTask(key) {
    const newToDoList = toDoList.filter((task) => task !== key);
    toDoList = newToDoList;
    writeToLS(key, newToDoList);
}

function filterToDos(key, completed = true) {

    let toDos = getToDoTask(key);
    return toDos.filter(item => item.completed === hidden);
}

function renderToDoList(list, element, toDos, hidden) {
    console.log(list);
    element.innerHTML = '';


    list.forEach(toDo => {

        const task = document.createElement("li");
        const lsDate = new Date(toDo.id).toLocaleDateString("en-US");

        let checkbox = null;
        let removeButton = null;

        if (toDo.completed || hidden) {
            task.innerHTML = `<input type="checkbox" name="checked" class="strikethrough"><label>${toDo.content}</label><button class="removeBtn">X</button>`
        } else {
            task.innerHTML = `<input type="checkbox" name="checked"><label>${toDo.content}</label><button class="removeBtn">X</button>`
        }

        //childNodes[0] is the same as firstChild, so is this like inheritance?
        checkbox = task.childNodes[0].choldNodes[0];

        if (checkbox) {
            checkbox.addEventListener('change', function () {
                toDos.completeToDo(toDo.id);
            });
        }

        removeButton = task.childNodes[1];
        if (removeButton) {
            removeButton.addEventListener('click', function () {
                toDos.removeTask(toDo.id);
            });
        }

        element.appendChild(task);
    });
}



export default class ToDo {
    constructor(elementId, key) {
        //listElement
        this.elementId = elementId;
        //local storage key(the Date ())
        this.key = key;
        //assigning add task button here
        bindTouch("add", this.newToDo.bind(this));

        this.listToDo();
    }

    newToDo() {
        const item = document.querySelector("#todoinput");
        storeToDoTasks(this.value, this.id);
        item.value = "";
        this.listToDo();
    }

    findToDo(id) {
        let toDo = toDoList.find(element => {
            return element.id === id;
        });
    }

    completeToDo(id) {
        let toDo = this.findToDo(id);

        if (toDo) {
            toDo.completed = !toDo.completed;
            writeToLS(this.key, toDoList);
            renderToDoList(toDoList, this.elementId, this, true);
        }
    }

    removeToDo(id) {
        let toDo = this.findToDo(id);

        if (toDo) {
            removeTask(id);
            renderToDoList(toDoList, this.elementId, this, true);
        }

    }

    listToDo(hidden = true) {
        renderToDoList(getToDoTask(this.key, this.elementId, this, hidden));
    }
}




// function showCompletedTask() {


// }

// function showActiveTasks() {

// }

// function countActiveTasks() {

// }




// function submitTask() {

// }

