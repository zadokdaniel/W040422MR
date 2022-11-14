import { useEffect } from "react";
import { useState } from "react";

let intervalId = null;

const ChildLifeCycle = ({ counterFromParent }) => {
  const [counter, setCounter] = useState(0);
  const [counterBy10, setCounterBy10] = useState(0);
  const [counterBy100, setCounterBy100] = useState(0);

  const handleAdd = () => setCounter((counter) => counter + 1);
  const handleAddBy10 = () => setCounterBy10((counterBy10) => counterBy10 + 10);
  const handleAddBy100 = () =>
    setCounterBy100((counterBy100) => counterBy100 + 100);

  // with every render
  useEffect(() => {
    console.log("Component Did Update (CDU)");

    return () => {
      console.log("CDU clean up");
    };
  });

  useEffect(() => {
    console.log("Component Did Mount (CDM)");

    return () => {
      console.log("Component Will Unmount (CWU) - CDM clean up");
    };
  }, []);

  useEffect(() => {
    console.log("counterBy10 Updated");

    return () => {
      console.log("counterBy10 clean up...");
    };
  }, [counterBy10, counterFromParent]);

  //   useEffect(() => {
  //     console.log("interval use effect");
  //     intervalId = setInterval(() => {
  //       handleAddBy10();
  //       console.log("interval ran...");
  //     }, 2000);

  //     return () => {
  //       console.log("interval clean up");
  //       clearInterval(intervalId);
  //     };
  //   }, []);

  console.log("render");

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "80%",
        marginInline: "auto",
        marginBlockStart: 20,
      }}
    >
      <h1>LifeCycle - CHILD</h1>
      <button onClick={handleAdd}>{counter}</button>
      <button onClick={handleAddBy10}>{counterBy10}</button>
      <button onClick={handleAddBy100}>{counterBy100}</button>
    </div>
  );
};

export default ChildLifeCycle;
