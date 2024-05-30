import { Outlet, Link } from "react-router-dom";
import{useState} from "react";
import "../styles/nav.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }
  return (
    <div id = "content">
      <nav id = "main-nav">
        <div id = "toggle" onClick = {toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="nav-items" className={menuOpen ? "" : "hide-small"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/HOF">Hall of Fame</Link>
          </li>
          <li>
            <Link to="/vote">Vote</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
