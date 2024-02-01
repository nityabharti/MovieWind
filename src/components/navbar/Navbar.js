import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="main-header ">
      <div className="header-logo">
        <img
          height={30}
          width={30}
          src="https://cdn-icons-png.flaticon.com/128/777/777242.png"
          alt="logo"
        />
        <h1>MovieWind</h1>
      </div>
    </nav>
  );
};

export default Navbar;
