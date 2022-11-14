import { useState } from "react";
import User from "./user";

const UsersSelector = () => {
  const [input, setInput] = useState("1");

  return (
    <div>
      <input
        onInput={(e) => setInput(e.target.value)}
        value={input}
        type="number"
        min={1}
        max={10}
      />
      <User userId={Number(input)} />
    </div>
  );
};

export default UsersSelector;
