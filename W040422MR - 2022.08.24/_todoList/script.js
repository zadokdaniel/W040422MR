class Todo {
  // PROPERTIES (this.*)
  currentId = 0;

  todos = [
    // {
    //   id: 1,
    //   text: "Buy Milk",
    //   isDone: false,
    //   createdAt: new Date(),
    // },
  ];

  // METHODs (Todo.prototype.*)
  add(/* this */ text) {
    if (typeof text !== "string" || text.length < 2) {
      throw new Error("Task must be at least two characters");
    }

    const todo = {
      id: this.currentId++,
      text,
      isDone: false,
      createdAt: new Date(),
    };

    this.todos.push(todo);
    return todo;
  }

  getTodo(/* this */ id) {
    // find the todo inside todos
    for (const todo of this.todos) {
      if (todo.id === id) {
        return todo;
      }
    }

    // if not found throw error
    throw new Error("id was not found");
  }

  remove(/* this */ id) {
    // find the todo using getTodo
    const todo = this.getTodo(id);

    debugger;
    // remove from array
    const index = this.todos.indexOf(todo);
    const removedElements = this.todos.splice(index, 1);

    // return the removed item
    return removedElements[0]; // take the first one because with remove I am sure I am only removing one item.
  }

  changeDone(/* this */ id, isDone = null) {
    // find the todo using getTodo
    const todo = this.getTodo(id);

    // if isDone parameter is boolean, set the item's isDone to what given
    // else change to the opposite of what it is
    todo.isDone = typeof isDone === "boolean" ? isDone : !todo.isDone;

    // return todo
    return todo;
  }
}

const todoManager = new Todo();

console.log(todoManager);
todoManager.add("hello");
todoManager.add("hello");
todoManager.add("hello");

todoManager.add("hello");
todoManager.add("aa");
todoManager.add("hello");

console.log(todoManager.todos);

console.log(todoManager.remove(1));
console.log(todoManager.todos);

console.log(todoManager.changeDone(2, true));
console.log(todoManager.todos);

todoManager.changeDone(3, false);
console.log(todoManager.todos);

todoManager.changeDone(3);
console.log(todoManager.todos);
