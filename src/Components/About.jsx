import React from 'react'
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <><div>This Is About Page</div>
    <button onClick={handleClick}>go to home</button></>
  )
}

export default About