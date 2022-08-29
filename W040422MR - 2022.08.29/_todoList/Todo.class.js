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

  constructor() {
    this.load();
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
    localStorage.setItem("currentId", this.currentId);
  }

  load() {
    if (localStorage.getItem("todos")) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
      this.currentId = Number(localStorage.getItem("currentId"));
    }
  }

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

    this.save();

    return todo;
  }

  getTodos(/* this */) {
    return this.todos;
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

    // remove from array
    const index = this.todos.indexOf(todo);
    const removedElements = this.todos.splice(index, 1);

    this.save();

    // return the removed item
    return removedElements[0]; // take the first one because with remove I am sure I am only removing one item.
  }

  changeDone(/* this */ id, isDone = null) {
    // find the todo using getTodo
    const todo = this.getTodo(id);

    // if isDone parameter is boolean, set the item's isDone to what given
    // else change to the opposite of what it is
    todo.isDone = typeof isDone === "boolean" ? isDone : !todo.isDone;

    this.save();

    // return todo
    return todo;
  }
}
