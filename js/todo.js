"use strict";

const addbtn = document.getElementById("add_btn");
const addvalue = document.getElementById("add_value");
const text = document.getElementById("add_text");
const todos = [];
const displayTodos = () => {
  addvalue.textContent = "";
  todos.forEach((todo, index) => {
    const createTr = document.createElement("tr"); //trを作成
    const createId = document.createElement("td"); //tdを作成
    createId.textContent = todo.taskid; //id_tdに要素数をカウント
    const createComment = document.createElement("td");
    createComment.innerHTML = todo.comment;
    const status_td = document.createElement("td");
    createTr.appendChild(createId); //id_tdをtrの子要素として追加
    createTr.appendChild(createComment); //comment_tdをtrの子要素として追加
    createTr.appendChild(status_td); //status_tdをtrの子要素として追加
    status_td.append(createstatusbutton()); //workButtonをstatus_tdに追加
    status_td.append(createremoveButton());
    addvalue.appendChild(createTr);
    text.value = "";
  });
};

function createTodo() {
  const taskid = todos.length;
  const comment = text.value;
  const status = "作業中";
  const todo = {
    taskid,
    comment,
    status,
  };
  return todo;
}

addbtn.addEventListener("click", () => {
  const todo = createTodo();
  todos.push(todo);
  displayTodos();
});

const createstatusbutton = () => {
  const todo = createTodo();
  const createstatusBtn = document.createElement("button");
  createstatusBtn.innerText = todo.status;
  return createstatusBtn;
};

const createremoveButton = (index) => {
  const todo = createTodo();
  const createremoveBtn = document.createElement("button");
  createremoveBtn.textContent = "削除";
  createremoveBtn.addEventListener("click", () => {
    todos.splice(index, 1);
    displayTodos();
    todos.reduce((Idnum, todo) => (todo.taskid = Idnum + 1), -1);
    displayTodos(todos);
  });
  return createremoveBtn;
};
