const todoForm = document.querySelector(".todoForm")
const todoInput = todoForm.querySelector(".todoInput")
const todoUl = document.querySelector(".todoUl")

const todo_LS = 'todos';
const todos = [];

function loadTodos() {
    if (localStorage.getItem(todo_LS) !== null) {
        const parseTodos = JSON.parse(localStorage.getItem(todo_LS))
        parseTodos.forEach(function (todo) {
            paintTodo(todo.text);
        });
    }
}

function saveTodos() {
    localStorage.setItem(todo_LS, JSON.stringify(todos))
}

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const completeBtn = document.createElement("button")
    const span = document.createElement("span");
    const giveId = todos.length + 1;
    delBtn.innerText = "delete";
    completeBtn.innerText = "complete";
    span.innerText = text;
    li.id = giveId;
    li.appendChild(span)
    li.appendChild(delBtn)
    li.appendChild(completeBtn)
    todoUl.appendChild(li);

    todoObj = {
        text: text,
        id: giveId
    };

    todos.push(todoObj);
    saveTodos();

}


function submitHandler(event) {
    event.preventDefault();
    const inputValue = todoInput.value;
    paintTodo(inputValue);
    todoInput.value = "";
}


function init() {
    loadTodos();
    todoForm.addEventListener("submit", submitHandler)
}

init();