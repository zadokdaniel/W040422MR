import { useState } from "react";

const TodoForm = ({ onSubmit = () => {} }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setError("");
    setInput(e.target.value);
  };
  const handleInputReset = () => setInput("");
  const handleSubmit = () => {
    if (input.length < 2) {
      setError("Enter at least two characters");
      return;
    }

    onSubmit(input);
    handleInputReset();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="todo-form">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">I need to:</span>
        </div>
        <input
          onChange={handleInputChange}
          value={input}
          onKeyDown={handleKeyPress}
          type="text"
          className="form-control"
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Add
        </button>
      </div>
      {error ? <div className="text-danger">{error}</div> : null}
    </div>
  );
};

export default TodoForm;
