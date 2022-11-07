import { useState } from "react";

const CounterForm = ({ onSubmit }) => {
  const [{ min, max, step, start }, setInputs] = useState({
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
    step: 1,
    start: 0,
  });

  const inputChanged = ({ target: { type, name, value } }) => {
    // const type = e.target.type;
    // const name = e.target.name;
    // const value = e.target.value;

    setInputs((inputs) => {
      return { ...inputs, [name]: type === "number" ? Number(value) : value };

      // let copy = { ...inputs };
      // copy[name] = type === "number" ? Number(value) : value;
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <div className="form-floating mb-3">
            <input
              onChange={inputChanged}
              name="min"
              type="number"
              className="form-control"
              value={min}
            />
            <label htmlFor="floatingInput">Min</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={inputChanged}
              name="max"
              type="number"
              className="form-control"
              value={max}
            />
            <label htmlFor="floatingInput">Max</label>
          </div>
        </div>
        <div className="col-6">
          <div className="form-floating mb-3">
            <input
              onChange={inputChanged}
              name="start"
              type="number"
              className="form-control"
              value={start}
            />
            <label htmlFor="floatingInput">Start</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={inputChanged}
              name="step"
              type="number"
              className="form-control"
              value={step}
            />
            <label htmlFor="floatingInput">Step</label>
          </div>
        </div>
      </div>

      <div className="d-grid gap-2 d-md-block">
        <button
          onClick={() => onSubmit({ start, step, min, max })}
          className="btn btn-primary btn-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CounterForm;
