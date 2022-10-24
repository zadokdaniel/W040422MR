let todo = [];
let currentId = 1;

export function add(title, isComplete = false) {
  todo.push({
    id: currentId++,
    title,
    isComplete,
    createdAt: new Date(),
  });
}

export function clearAll() {
  todo = [];
}


export function getAll() {
  return todo;
}
