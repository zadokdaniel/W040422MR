const TodoItem = ({
  id,
  title,
  isComplete,
  createdAt,
  onIsCompleteChange,
  onDelete,
}) => {
  return (
    <li className="list-group-item">
      <input
        onChange={onIsCompleteChange}
        checked={isComplete}
        className="form-check-input me-1"
        type="checkbox"
      />
      <span className="mx-2 text-primary fw-bold">
        {createdAt.toLocaleTimeString()}
      </span>
      <span>{title}</span>
      <button onClick={onDelete}>remove</button>
    </li>
  );
};

export default TodoItem;
