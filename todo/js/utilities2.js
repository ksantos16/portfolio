const toDoInput = document.querySelector("#todoinput");
const toDoButton = document.querySelector("#add");
const toDoList = document.querySelector("#toDoList");
const allBtn = document.querySelector("#allBtn");
const activeBtn = document.querySelector("#activeBtn");
const completeBtn = document.querySelector("#completeBtn");

toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", removeTask);
toDoList.addEventListener("change", completedTask);
allBtn.addEventListener("click", allToDos);
activeBtn.addEventListener("click", completedToDos);
completeBtn.addEventListener("click", activeToDos);


function addToDo(event) {
    event.preventDefault();

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    let newToDo = document.createElement("li");


    newToDo.innerHTML = `<label><input type="checkbox" name="checked" class="completed">${toDoInput.value}</label>
                        <button class="removeBtn">X</button>`;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);


    const completedBtn = document.querySelector(".completed");

    const removeBtn = document.querySelector(".removeBtn");

    toDoList.appendChild(toDoDiv);

    toDoInput.value = "";
}

function removeTask(event) {
    const item = event.target;

    if (item.classList[0] === "removeBtn") {
        const todo = item.parentElement;
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


function allToDos() {
    const todos = toDoList.childNodes;

}

function completedToDos(event) {
    const todos = toDoList.childNodes;
    const item = event.target;
    //console.log(todos);

    todos.forEach(function (todo) {
        if (todo.classList[0] === "completed") {
            todo.style.display = "block";

        } else {
            todo.style.display = "none";
        }
    });
}

function activeToDos(event) {
    const todos = toDoList.childNodes;
    //console.log(todos);

    todos.forEach(function (todo) {
        if (!todo.classList[0] === "completed") {
            todo.style.display = "block";

        } else {
            todo.style.display = "none";
        }
    });
}