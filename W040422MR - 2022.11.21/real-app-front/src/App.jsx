import "./App.css";
<<<<<<< HEAD

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import SignUp from "./components/signup";

import { Route, Routes } from "react-router-dom";
=======
import Footer from "./components/footer";
>>>>>>> master

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
<<<<<<< HEAD
      <header>
        <Navbar />
      </header>

      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </main>
=======
      <header>HEADER</header>

      <main className="flex-fill container">MAIN</main>
>>>>>>> master

      <Footer />
    </div>
  );
}

export default App;
