const toDoInput = document.querySelector("#todoinput");
const toDoButton = document.querySelector("#add");
const toDoList = document.querySelector("#toDoList");
const filter = document.querySelector(".filtertodos");

document.addEventListener("DOMContentLoaded", getLocal);
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", removeTask);
toDoList.addEventListener("change", completedTask);
filter.addEventListener("click", filterToDos);



function addToDo(event) {

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    let newToDo = document.createElement("li");


    newToDo.innerHTML = `<label><input type="checkbox" name="checked" class="completed">${toDoInput.value}</label>
                        <button class="removeBtn">X</button>`;
    console.log(newToDo);
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);



    const completedBtn = document.querySelector(".completed");

    const removeBtn = document.querySelector(".removeBtn");

    setLocal(toDoInput);
    toDoList.appendChild(toDoDiv);

    toDoInput.value = "";
}

function removeTask(event) {
    const item = event.target;

    if (item.classList[0] === "removeBtn") {
        const todo = item.parentElement;
        removeLocalToDos(todo);
        todo.remove();
    }

}

function completedTask(event) {
    const item = event.target;

    if (item.classList[0] === "completed") {
        const todo = item.parentElement;
        console.log(todo);
        todo.classList.toggle("complete");

        setLocal(todo);
    }

}

function filterToDos(event) {
    const todos = toDoList.childNodes;
    //console.log(todos);
    let found = null;

    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "block";
                break;
            case "completed":
                found = todo.querySelector('.complete');
                if (found) {
                    todo.style.display = "block";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "open":
                found = todo.querySelector('.complete');
                if (found) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "block";
                }
                break;
        }

        setLocal(todo);
    });

}

function getLocal(todo) {
    let todos;
    if (todos === null) {
        toDoList = readLocal(todo) || []
    }
    return toDoList;
}

function setLocal(value) {
    const list = new Array();
    list.push(value);
    saveLocalToDos(list);
}

function saveLocalToDos(todo) {
    localStorage.setItem("todo", JSON.stringify(todo));
}

function readLocal(todo) {
    return JSON.parse(localStorage.getItem(todo));
}

function removeLocalToDos(todo) {
    let todos;
    if (todos === null) {
        toDoList = readLocal(todo) || []
    }
    const todoIndex = todo.children[0].innerHTML;
    todos.splice(todos.indexOf(todoIndex), 1);
    const newToDoList = toDoList.filter((task) => task !== key);
    toDoList = newToDoList;
    saveLocalToDos(newToDoList);

}