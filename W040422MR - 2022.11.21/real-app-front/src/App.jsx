import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill container">
        {/* <Home /> */}
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
