import { useState, useEffect } from "react";
import "./App.css";
import CountriesApp from "./components/countriesApp";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const response = await fetch(url);
      if (response.ok) {
        setData(await response.json());
      } else {
        setError(response.status);
      }

      setIsLoading(false);
    };

    getData();

    return () => {
      setData(null);
      setIsLoading(false);
      setError("");
    };
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

function App() {
  const [counter, setCounter] = useState(5);

  const fromUseFetch = useFetch(
    `https://jsonplaceholder.typicode.com/users/${counter}`
  );

  const addCounter = () => setCounter((counter) => counter + 1);

  return (
    <div className="App">
      <button onClick={addCounter}>next</button>
      <pre>{JSON.stringify(fromUseFetch, null, 2)}</pre>
      <CountriesApp />
    </div>
  );
}

export default App;
