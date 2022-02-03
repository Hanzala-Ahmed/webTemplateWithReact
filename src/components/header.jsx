import react from "react";
import reactDom from "react-dom";
import logo from "../Images/logo.png"
import "./header.css";

function Header() {
  return (
  <section className="header">
      <div className="logo">
          <img src={logo} alt="" />
      </div>
      <div className="navLinks">
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
          </ul>
      </div>
  </section>
  );
}

export default Header;
