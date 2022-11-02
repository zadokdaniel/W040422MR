import "./App.css";
import ArrayRendering from "./components/arrayRendering";
import ConditionalRendering from "./components/conditionalRendering";
import FragmentTutorial from "./components/fragmentTutorial";

function App() {
  return (
    <div className="App">
      <ul>
        <FragmentTutorial />
        <FragmentTutorial />
        <FragmentTutorial />
        <FragmentTutorial />
      </ul>

      <ConditionalRendering />

      <br />
      <br />

      <ArrayRendering />
    </div>
  );
}

export default App;
