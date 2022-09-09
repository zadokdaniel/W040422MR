const todoManager = new Todo();

const todoInput = document.getElementById(
  "todo-input"
) as HTMLInputElement | null;
const todoBtn = document.getElementById("todo-btn") as HTMLButtonElement | null;
const todoList = document.getElementById(
  "todo-list"
) as HTMLUListElement | null;
const todoStatus = document.getElementById(
  "todo-status"
) as HTMLDivElement | null;
const errorMessage = document.getElementById(
  "error-message"
) as HTMLDivElement | null;

renderList();
0
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", function (e) {
  const element = e.target as HTMLUListElement;
  const todoId = Number(
    (element.closest("li[data-todo-id]") as HTMLElement).dataset.todoId
  );
  const shouldRemove = element.classList.contains("bi-trash-fill");

  if (shouldRemove) {
    todoManager.remove(todoId);
  } else {
    todoManager.changeDone(todoId);
  }

  renderList();
});

function addTodo() {
  try {
    todoManager.add(/* todoManager */ todoInput.value);
    resetInput();
    clearErrorMessage();
    renderList();
  } catch (err) {
    setErrorMessage(err.message);
  }
}

function renderList() {
  const todos = todoManager.getTodos(/* todoManager */);

  refreshStatus();
  todoList.innerHTML = todos
    .sort((a) => (a.isDone ? 1 : -1))
    .map(
      (todo) => `
        <li data-todo-id="${todo.id}" class="list-group-item cursor-pointer">
            <i class="bi bi-trash-fill text-danger"></i>
            <span class="ms-2 ${
              todo.isDone ? "text-muted text-decoration-line-through" : ""
            }">
            ${todo.text}
            </span>
        </li>
      `
    )
    .join("");
}

function resetInput() {
  todoInput.value = "";
}

function setErrorMessage(error: string) {
  errorMessage.innerHTML = `<span>${error}</span>`;
}
function clearErrorMessage() {
  errorMessage.innerHTML = "";
}

function refreshStatus() {
  // const amountDone = todoManager.getTodos().reduce((completedTodos, todo) => {
  //   console.log(completedTodos, todo);
  //   return todo.isDone ? completedTodos + 1 : completedTodos;
  // }, 0);

  const amountDone = todoManager
    .getTodos()
    .filter((todo) => todo.isDone).length;

  todoStatus.innerHTML = `${amountDone}/${todoManager.getTodos().length}`;
}

// // 1. this will be undefined/ window as of the add event listener getting the function value as some other variable (pramater) which means that it will be running without the "." before it and the add function's "this" will be lost
// // 2. we lack control of what is passed to the function add so we cannot pass what is the text of the new todo
// todoBtn.addEventListener("click", todoManager.add);

// function addEventListener(eventName, functionToRun) {
//   functionToRun(/* undefine/window */ new Event());
// }
