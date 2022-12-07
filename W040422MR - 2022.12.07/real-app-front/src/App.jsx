import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import SignOut from "./components/signout";
import MyCards from "./components/myCards";
import SignUpBiz from "./components/signupBiz";
import ProtectedRoute from "./components/common/protectedRoute";
import CreateCard from "./components/createCard";
import DeleteCard from "./components/deleteCard";
import EditCard from "./components/editCard";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer />

      <header>
        <Navbar />
      </header>

      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="/my-cards/edit/:id"
            element={
              <ProtectedRoute onlyBiz>
                <EditCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-cards/delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <DeleteCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-card"
            element={
              <ProtectedRoute onlyBiz>
                <CreateCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          />
          <Route path="sign-up-biz" element={<SignUpBiz />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-out" element={<SignOut />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
