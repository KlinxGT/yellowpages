import { Outlet, Link } from "react-router-dom";
import{useState} from "react";
import "../styles/nav.css";
import "../styles/index.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <nav id = "nav-bar">
        <div id = "logo">
          <img id = "logopic" src = {require("../images/logo.png")} alt = "logo"/>
        </div>
        <div id = "hamburger" onClick = {toggleMenu}>
          <div className = "bar"></div>
          <div className = "bar"></div>
          <div className = "bar"></div>
        </div>
        <ul id="nav-items" className={menuOpen ? "" : "hide-small"}>
          <li className = "nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className = "nav-item">
            <Link to="/HOF">Hall of Fame</Link>
          </li>
          <li className = "nav-item">
            <Link to="/vote">Vote</Link>
          </li>
          <li className = "nav-item">
            <Link to="/post">Post</Link>
          </li>
          <li className = "nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
