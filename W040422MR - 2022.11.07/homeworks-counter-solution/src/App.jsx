import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import CounterForm from "./components/counterForm";
import CounterList from "./components/counterLIst";

// const boundaries = [
//   { from: Number.MIN_SAFE_INTEGER, to: -1000, color: "red" },
//   { from: -200, to: 0, color: "lightcoral" },
//   { from: 0, to: 10, color: "yellow" },
//   { from: 10, to: 20, color: "orange" },
//   { from: 20, to: Number.MAX_SAFE_INTEGER, color: "green" },
// ];

function App() {
  const [counters, setCounters] = useState([]);

  return (
    <div className="App">
      <CounterForm
        onSubmit={(counter) =>
          setCounters((counters) => [...counters, counter])
        }
      />
      <br />
      <CounterList counters={counters} />
    </div>
  );
}

export default App;
