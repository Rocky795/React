import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Humberger from "./Humberger_navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}

        <Humberger />
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
