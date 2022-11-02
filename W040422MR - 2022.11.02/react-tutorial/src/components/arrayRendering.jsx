import { useState, useSyncExternalStore } from "react";

const ArrayRendering = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "daniel",
      age: 28,
    },
    ,
    {
      id: 3,
      name: "haviva",
      age: 50,
    },
  ]);

  const remove = () => setUsers((users) => users.slice(0, -1));

  return (
    <div>
      {/* {[<div>test jsx inside an array</div>, <div>seems to work yay!!</div>]} */}

      <br />
      <button onClick={remove}>remove</button>
      {users.map(({ id, name, age }) => (
        <div key={id}>
          {name} ({age})
        </div>
      ))}
    </div>
  );
};

export default ArrayRendering;
