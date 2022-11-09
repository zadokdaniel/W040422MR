import TodoItem from "./todoItem";

const TodoList = ({ todos, onIsCompleteChange, onDelete }) => {
  const total = todos.length;
  const isDone = todos.filter((todo) => todo.isComplete).length;

  return (
    <div>
      <div>
        {isDone} / {total}
      </div>

      <ul className="list-group">
        {todos
          .sort((a) => (a.isComplete ? 1 : -1))
          .map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              onIsCompleteChange={() => onIsCompleteChange(todo.id)}
              onDelete={() => onDelete(todo.id)}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
