import { useState } from "react";

const InputExample = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <button onClick={() => setInput("")}>reset</button>

      <input
        type="text"
        onInput={(e) => setInput(e.target.value)}
        value={input}
      />

      <h2>{Number(input) + 55}</h2>
    </div>
  );
};

export default InputExample;
