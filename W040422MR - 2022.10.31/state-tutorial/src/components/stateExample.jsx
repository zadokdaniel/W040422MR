import { useState } from "react";

const StateExample = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("daniel");
  const [now, setNow] = useState(new Date());

  console.log("render");

  const changeCounterTo5 = () => setCounter(5);
  const changeNameToShalom = () => setName("shalom");
  const changeNowToTomorrow = () =>
    setNow(new Date(new Date().setDate(new Date().getDate() + 1)));

  return (
    <div>
      <button onClick={changeCounterTo5}>change counter to 5</button>
      <button onClick={changeNameToShalom}>change name to shalom</button>
      <button onClick={changeNowToTomorrow}>change now to tomorrow</button>
      <ul>
        <li>counter: {counter}</li>
        <li>name: {name}</li>
        <li>now: {now.toLocaleString()}</li>
      </ul>
    </div>
  );
};

export default StateExample;
