import { useState } from "react";

const Counter = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  start = 0,
  step = 1,
  boundaries = [],
}) => {
  const [counter, setCounter] = useState(start);

  const boundary = boundaries.find(
    ({ from, to }) => from <= counter && to >= counter
  );
  const color = boundary ? boundary.color : "";

  const isNotAtMax = counter + step <= max;
  const isNotAtMin = counter - step >= min;

  const add = () => {
    if (isNotAtMax) {
      setCounter((counter) => counter + step);
    }
  };
  const sub = () => {
    if (isNotAtMin) {
      setCounter((counter) => counter - step);
    }
  };

  return (
    <div className="counter">
      <button disabled={!isNotAtMin} onClick={sub} className="btn btn-danger">
        -
      </button>
      <span style={{ color: color }} className="mx-2">
        {counter}
      </span>
      <button disabled={!isNotAtMax} onClick={add} className="btn btn-success">
        +
      </button>
    </div>
  );
};

export default Counter;
