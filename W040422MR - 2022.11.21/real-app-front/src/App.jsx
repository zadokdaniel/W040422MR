import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill container">MAIN</main>

      <Footer />
    </div>
  );
}

export default App;
