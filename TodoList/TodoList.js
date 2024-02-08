const list = document.getElementById("list");
const inputTag = document.getElementById("input");
const TodoList = document.querySelector(".list");

function TodoListInput() {
  if (window.event.keyCode === 13 && inputTag.value !== '') {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newLi.appendChild(newBtn); // li안에 button 담기
    newLi.appendChild(newSpan); // li안에 span 담기
    newSpan.textContent = inputTag.value;

    TodoList.appendChild(newLi);
    inputTag.value = "";
  }
}

function TodoListEnter(){
    if(inputTag.value !== ''){
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newLi.appendChild(newBtn); // li안에 button 담기
    newLi.appendChild(newSpan); // li안에 span 담기
    newSpan.textContent = inputTag.value;

    TodoList.appendChild(newLi);
    inputTag.value = "";

    
    }
}

function TodoListDelete() {
    while (TodoList.firstChild) {
        TodoList.removeChild(TodoList.firstChild);
        setTimeout(1000)
    }
}