import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Error from "./Components/Error";
import Counter from "./Components/Counter";
import Calculator from "./Calculator/Calculator";
import Pokemon from './Components/Pokemon';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
          </>
        }
      />

      <Route
        path="counter"
        element={
          <>
            <Header />
            <Counter />
          </>
        }
      />

      <Route
        path="/calc"
        element={
          <>
            <Header />
            <Calculator />
          </>
        }
      />

      <Route
        path="/pokemon"
        element={
          <>
            <Header />
            <Pokemon />
          </>
        }
      />

      <Route
        path="*"
        element={
          <>
            <Header />
            <Error />
          </>
        }
      />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
);
