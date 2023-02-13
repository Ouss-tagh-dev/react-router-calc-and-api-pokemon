import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/about");
  return (
    <>
      <div>This is Home Page</div>
      <button onClick={handleClick}>go to about</button>
    </>
  );
}

export default Home;
