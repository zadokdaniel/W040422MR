import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Product from "./components/product";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <Profile
        name="Daniel"
        age={28}
        email="z@gamil.com"
        favoriteColor="cornflowerblue"
        profileImage="https://cdn.pixabay.com/photo/2016/08/15/14/31/ocher-rocks-1595563_960_720.jpg"
      />
      <Profile  />

      {/* 
      <Product
        name="Shampoo"
        category="Hair Product"
        price={55}
        imgUrl="https://cdn.pixabay.com/photo/2017/09/28/06/50/oil-discharge-2794477_960_720.jpg"
      />
      <Product />
      <Product />
      <Product />
      <Product /> */}
    </div>
  );
}

export default App;
