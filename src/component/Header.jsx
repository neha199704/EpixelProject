import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <header className="header">
        {/* <div className="logo">Logo</div> */}
        <img src={logo} alt="logo" />
        <nav>
          <ul className="navLinks">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="loginBtn">Login</button>
          <button className="registerBtn">Register</button>
        </div>
      </header>

      <section className="main">
        <h1 className="mainHeading">
          The largest community of photo enthusiasts
        </h1>
        <button className="joinBtn">Join Today</button>
      </section>
    </div>
  );
};

export default Header;
