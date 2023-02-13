import React from "react";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import "./Counter.css";

// import User from './User';
// import Test from "./Test";
// import { useState } from "react";
function App() {
  // const [toggle, setToggle] = useState(false);
  return (
    <div className="main">
      <Header />
      <Counter />
    </div>
    // <div className="main">
    //   <button
    //     onClick={() => {
    //       setToggle(!toggle);
    //     }}
    //   >
    //     Toggle
    //   </button>
    //   {toggle && <Test />}
    // </div>
  );
}

export default App;
