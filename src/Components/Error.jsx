import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      <p>This Is Error Page</p>
      <p>
        <Link to={"/"}>Go To Home Page</Link>
      </p>
    </div>
  );
}

export default Error;
