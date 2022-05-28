const toDoInput = document.querySelector("#todoinput");
const toDoButton = document.querySelector("#add");
const toDoList = document.querySelector("#toDoList");
const allBtn = document.querySelector("#allBtn");
const activeBtn = document.querySelector("#activeBtn");
const completeBtn = document.querySelector("#completeBtn");

toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", removeTask);
toDoList.addEventListener("change", completedTask);
allBtn.addEventListener("click", filterToDo);
activeBtn.addEventListener("click", filterToDo);
completeBtn.addEventListener("click", filterToDo);


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


    const completedBtn = document.querySelector(".completed");
    // completedBtn.classList.add("completed-btn");
    // toDoDiv.appendChild(completedBtn);

    const removeBtn = document.querySelector(".removeBtn");
    // removeBtn.classList.add("remove-btn");
    // toDoDiv.appendChild(removeBtn);

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

function filterToDo(event) {
    const todos = toDoList.childNodes;
    //console.log(todos);

    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "block";
                break;
            case "complete":
                if (todo.classList.contains("complete")) {
                    todo.style.display = "block";

                } else {
                    todo.style.display = "none";
                }
                break;
            case "active":
                if (!todo.classList.contains("complete")) {
                    todo.style.display = "block";

                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}