const todoForm = document.querySelector(".todoForm")
const todoInput = todoForm.querySelector(".todoInput")
const todoUl = document.querySelector(".todoUl")
const finishUl = document.querySelector(".finish")




const todo_LS = 'todos';
let todos = [];
const finishs_LS = 'finishs'
let finishs = [];



function deleteTodo(ID) {
    todoUl.querySelector(`#${ID}`).remove()
    const cleanTodos = todos.filter(function (todo) {
        return todo.id !== ID
    })
    todos = cleanTodos;
    saveTodos();
}

function deleteFinish(ID) {
    finishUl.querySelector(`#${ID}`).remove()
    const cleanFinishs = finishs.filter(function (finish) {
        return finish.id !== ID
    })
    finishs = cleanFinishs;
    saveFinishs();
}


function loadTodos() {
    if (localStorage.getItem(todo_LS) !== null) {
        const parseTodos = JSON.parse(localStorage.getItem(todo_LS))
        parseTodos.forEach(function (todo) {
            paintTodo(todo.text);
        });
    }
}

function loadFinishs() {
    if (localStorage.getItem(finishs_LS) !== null) {
        const parseFinishs = JSON.parse(localStorage.getItem(finishs_LS))
        parseFinishs.forEach(function (finish) {
            paintFinish(finish.text);
        });
    }
}


function saveTodos() {
    localStorage.setItem(todo_LS, JSON.stringify(todos))
}

function saveFinishs() {
    localStorage.setItem(finishs_LS, JSON.stringify(finishs))
}


function paintTodo(text) {
    const li = document.createElement("li");
    const makeDelBtn = document.createElement("button");
    const completeBtn = document.createElement("button")
    const span = document.createElement("span");
    const giveId = `id${todos.length + 1}`;
    makeDelBtn.innerText = "delete";
    completeBtn.innerText = "complete";
    span.innerText = text;
    li.id = giveId;
    li.appendChild(span)
    li.appendChild(makeDelBtn)
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

todoUl.addEventListener("click", btnClickHandler)
finishUl.addEventListener("click", btnClick2Handler)

function paintFinish(text) {
    const li = document.createElement("li");
    const makeDelBtn = document.createElement("button");
    const completeBtn = document.createElement("button")
    const span = document.createElement("span");
    const giveId = `id${finishs.length + 1}`;

    makeDelBtn.innerText = "delete";
    completeBtn.innerText = "back";
    span.innerText = text;
    li.id = giveId;
    li.appendChild(span)
    li.appendChild(makeDelBtn)
    li.appendChild(completeBtn)

    finishUl.appendChild(li)

    finishsObj = {
        text: text,
        id: giveId
    };

    finishs.push(finishsObj);
    saveFinishs();

}


function completeHandler(clickedText, clickedId) {
    paintFinish(clickedText);
    deleteTodo(clickedId);

}

function backHandler(clickedText, clickedId) {
    paintTodo(clickedText);
    deleteFinish(clickedId);
}


function deleteHandler(clickedId) {
    deleteTodo(clickedId)
}

function deleteFinishHandler(clickedId) {
    deleteFinish(clickedId)
}

function btnClickHandler() {
    // console.dir(event.target.parentElement.id)
    // console.dir(event.target.parentElement.children[0].innerText)
    // console.dir(event.target.innerText)

    const clickedBtn = event.target;
    const clickedId = clickedBtn.parentElement.id
    const clickedText = clickedBtn.parentElement.children[0].innerText
    if (clickedBtn.innerText == 'complete') {
        completeHandler(clickedText, clickedId);
    } else if (clickedBtn.innerText == 'delete') {
        deleteHandler(clickedId)
    }
}

function btnClick2Handler() {
    // console.dir(event.target.parentElement.id)
    // console.dir(event.target.parentElement.children[0].innerText)
    // console.dir(event.target.innerText)

    const clickedBtn = event.target;
    const clickedId = clickedBtn.parentElement.id
    const clickedText = clickedBtn.parentElement.children[0].innerText
    if (clickedBtn.innerText == 'back') {
        backHandler(clickedText, clickedId);
    } else if (clickedBtn.innerText == 'delete') {
        deleteFinishHandler(clickedId)
    }
}






function init() {
    loadTodos();
    loadFinishs();
    todoForm.addEventListener("submit", submitHandler)
}

init();