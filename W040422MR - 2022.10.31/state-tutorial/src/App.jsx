import logo from "./logo.svg";
import "./App.css";
import StateExample from "./components/stateExample";
import InputExample from "./components/inputExample";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <StateExample />

      <InputExample />
      <br />
      <br />
      <br />
      <br />
      <Counter
        min={0}
        max={20}
        boundaries={[
          { from: 0, to: 5, color: "green" },
          { from: 10, to: 15, color: "red" },
        ]}
      />
    </div>
  );
}

export default App;
