import React, { useState } from "react";

import { useEffect } from "react";
import "../Counter.css";

function Counter() {
  useEffect(() => {
    window.alert("I'm Clicked");
  });

  const [currentState, updateState] = useState(0);

  const handleClick = () => {
    updateState(currentState + 1);
  };
  return (
    <div className="counter_parent">
      <div className="main-div">
        {/* <h3>{}</h3> */}
        <button onClick={handleClick}>{currentState}</button>
      </div>
    </div>
  );
}

export default Counter;
