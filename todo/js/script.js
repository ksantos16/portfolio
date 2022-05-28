const toDoInput = document.querySelector("#todoinput");
const toDoButton = document.querySelector("#add");
const toDoList = document.querySelector("#toDoList");
const filter = document.querySelector(".filtertodos");

document.addEventListener("DOMContentLoaded", getToDos);
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", removeTask);
toDoList.addEventListener("change", completedTask);
filter.addEventListener("change", filterToDos);



function addToDo(event) {
    event.preventDefault();

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    let newToDo = document.createElement("li");


    newToDo.innerHTML = `<label><input type="checkbox" name="checked" class="completed">${toDoInput.value}</label>
                        <button class="removeBtn">X</button>`;
    console.log(newToDo);
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);

    saveLocalToDos(toDoInput.value);

    const completedBtn = document.querySelector(".completed");

    const removeBtn = document.querySelector(".removeBtn");


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
        todo.classList.toggle("complete");
    }

}

function filterToDos(event) {
    const todos = toDoList.childNodes;
    //console.log(todos);

    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "block";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "block";

                } else {
                    todo.style.display = "none";
                }
                break;
            case "open":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "block";

                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalToDos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));
}

function getToDos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        const toDoDiv = document.createElement("div");
        toDoDiv.classList.add("todo");

        let newToDo = document.createElement("li");


        newToDo.innerText = todo;
        console.log(newToDo);
        newToDo.classList.add("todo-item");
        toDoDiv.appendChild(newToDo);


        const completedBtn = document.querySelector(".completed");


        const removeBtn = document.querySelector(".removeBtn");


        toDoList.appendChild(toDoDiv);
    });

}

function removeLocalToDos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));

}