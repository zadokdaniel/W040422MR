import logo from "./logo.svg";
import "./App.css";

function PersonalInformation() {
  const width = 150;

  return (
    <div className="personal-profile">
      <img
        src="https://cdn.pixabay.com/photo/2022/10/16/13/53/early-morning-7525151_960_720.jpg"
        alt=""
        width={width}
      />
      <h1>Daniel Zadok</h1>
      <p>age: 28</p>
      <p>za@gmail.com</p>
    </div>
  );
}

function App() {
  const num1 = 5,
    num2 = 10;

  const personalInformation = {
    name: "Daniel Zadok",
    age: 28,
    email: "z@gmail.com",
  };

  return (
    <div className="App" style={{ backgroundColor: "lightcoral", height: 328 }}>
      <PersonalInformation />
      <PersonalInformation />
      <PersonalInformation />
      {/* <PersonalInformation></PersonalInformation> */}

      <div className="personal-profile">
        <img
          src="https://cdn.pixabay.com/photo/2022/10/16/13/53/early-morning-7525151_960_720.jpg"
          alt=""
          width={20 + 50}
        />
        <h1>{personalInformation.name}</h1>
        <p>age: {personalInformation.age}</p>
        <p>{personalInformation.email}</p>
      </div>

      <h1>hello to my first app</h1>
      <p>hello</p>
      <p>1 + 1 = {1 + 1}</p>
      <p>
        {num1} + {num2} = {num1 + num2}
      </p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>
      </ul>
    </div>
  );
}

export default App;
