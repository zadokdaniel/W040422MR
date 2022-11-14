import { useState } from "react";
import ChildLifeCycle from "./childLifeCycle";

const ParentLifeCycle = () => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleAdd = () => setCounter((counter) => counter + 1);
  const toggleIsVisible = () => setIsVisible((isVisible) => !isVisible);

  return (
    <div style={{ backgroundColor: "lightcoral" }}>
      <h1>LifeCycle - PARENT</h1>
      <button onClick={handleAdd}>{counter}</button>
      <button onClick={toggleIsVisible}>{isVisible ? "hide" : "show"}</button>

      {isVisible ? <ChildLifeCycle counterFromParent={counter} /> : null}
      {/* {isVisible ? <ChildLifeCycle /> : null}
      {isVisible ? <ChildLifeCycle /> : null} */}
    </div>
  );
};

export default ParentLifeCycle;
