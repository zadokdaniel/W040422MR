import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const add = () => setCounter((counter) => counter + 1);
  //   const add = () => setCounter((oldCounter) => oldCounter + 1);

  return (
    <div>
      <button onClick={add}>+</button>
      <span className="ms-2">{counter}</span>
    </div>
  );
};

export default Counter;
