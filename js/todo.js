'use strict';

const addbtn = document.getElementById('add_btn');
const addvalue = document.getElementById('add_value');
const text = document.getElementById('add_text');
const todos = [];
const displayTodos = (selecttodos) => {
  addvalue.textContent = '';
  selecttodos.forEach((todo) => {
    const createTr = document.createElement('tr'); //trを作成
    const createId = document.createElement('td'); //tdを作成
    createId.textContent = todo.taskid; //idに要素数をカウント
    const createComment = document.createElement('td');
    createComment.innerHTML = todo.comment;
    const status_td = document.createElement('td');
    createTr.appendChild(createId); //idをtrの子要素として追加
    createTr.appendChild(createComment); //commentをtrの子要素として追加
    createTr.appendChild(status_td); //status_tdをtrの子要素として追加
    status_td.append(statusbutton(todo));
    status_td.append(removebutton());
    addvalue.appendChild(createTr);
    text.value = '';
  });
};

function createTodo() {
  const taskid = todos.length;
  const comment = text.value;
  const status = '作業中';
  const todo = {
    taskid,
    comment,
    status,
  };
  return todo;
}

addbtn.addEventListener('click', () => {
  const todo = createTodo();
  todos.push(todo);
  filterradio();
});

const statusbutton = (todo) => {
  const createstatusBtn = document.createElement('button');
  createstatusBtn.textContent = todo.status;
  createstatusBtn.addEventListener('click', () => {
    if (todo.status == '作業中') {
      todo.status = '完了';
    } else if(todo.status = '完了') {
      todo.status = '作業中';
    }
    filterradio();
  });
  return createstatusBtn;
};

const removebutton = (index) => {
  const todo = createTodo();
  const createremoveBtn = document.createElement('button');
  createremoveBtn.textContent = '削除';
  createremoveBtn.addEventListener('click', () => {
    todos.splice(index, 1);
    filterradio();
    todos.reduce((Idnum, todo) => (todo.taskid = Idnum + 1), -1);
    filterradio();
    console.log(todos)
  });
  return createremoveBtn;
};

function filterradio() {
  const todo = createTodo();
  const radioall = document.getElementById('radioall');
  const radiodoing = document.getElementById('radiodoing');
  const radiodone = document.getElementById('radiodone');

  if (radioall.checked) {
    todos.slice();
    return displayTodos(todos);
  } else if (radiodoing.checked) {
    const filterdoing = todos.filter((todo) => {
      return todo.status === '作業中';
    });
    return displayTodos(filterdoing);
  } else if (radiodone.checked) {
    const filterdone = todos.filter((todo) => {
      return todo.status === '完了';
    });
    return displayTodos(filterdone);
  }
}
