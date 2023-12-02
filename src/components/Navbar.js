import React from "react";
import zooflix from "../images/zooflix.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black px-5 lg:px-20 py-4 lg:py-5 flex justify-between items-center border-b border-b-gray-900">
      {" "}
      <Link to='/'>
      <img
        src={zooflix}
        className="w-20 lg:w-40 h-auto"
        alt="Zooflix Logo"
      />
      </Link>
      <button className="bg-red-500 py-1 px-2  lg:py-2 lg:px-4 rounded text-xs lg:text-lg">SignUp/Login</button>{" "}
    </div>
  );
}

export default Navbar;
