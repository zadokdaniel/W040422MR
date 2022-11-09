import { useState } from "react";
import TodoForm from "./todoForm";
import { v4 as uuid } from "uuid";
import TodoList from "./todoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleTodoSubmit = (title) => {
    setTodos((todos) => [
      ...todos,
      { id: uuid(), title, isComplete: false, createdAt: new Date() },
    ]);
  };

  const handleIsCompleteChange = (id, isComplete) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete:
              typeof isComplete === "boolean" ? isComplete : !todo.isComplete,
          };
        }

        return todo;
      })
    );
  };

  const clearAllDone = () => {
    setTodos((todos) => todos.filter((todo) => !todo.isComplete));
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo container mt-3">
      <button onClick={clearAllDone}>delete done</button>

      <TodoForm onSubmit={handleTodoSubmit} />
      <TodoList
        todos={todos}
        onIsCompleteChange={handleIsCompleteChange}
        onDelete={removeTodo}
      />
    </div>
  );
};

export default Todo;
