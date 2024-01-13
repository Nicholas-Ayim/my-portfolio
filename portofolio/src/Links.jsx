// Links.js
import { Link } from "react-router-dom";
import "./Links.css";
import { useContext } from "react";
import { DarkMode } from "./appContext";
import { FaMoon } from "react-icons/fa";

export default function Links() {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  function handleMode(e) {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={` header-container ${!darkMode} ? "links-container-darkMode" : "links-container-no-darkMode"`}
    >
      <Link to="/" className="no-decoration">
        Home
      </Link>
      <div className="right-links">
        <Link to="/about" className="no-decoration">
          About
        </Link>
        <Link to="/skills" className="no-decoration">
          Skills
        </Link>
        <Link to="/contact" className="no-decoration">
          Contact
        </Link>
        <button onClick={(e) => handleMode(e)} className="dark-mode">
          <FaMoon />
        </button>
      </div>
    </div>
  );
}
