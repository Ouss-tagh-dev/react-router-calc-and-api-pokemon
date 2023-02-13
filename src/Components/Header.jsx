import React from "react";
import "../Counter.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="main-header">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/counter"}>Counter</Link>
        </li>
        <li>
          <Link to={"/calc"}>Calculator</Link>
        </li>
        <li>
          <Link to={"/pokemon"}>Pokemon</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
