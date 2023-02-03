import react from "react";
import "../styles/header.css";
import { Link, BrowserRouter as Router} from "react-router-dom";

function Header(props) {
  return (
    <div className="header max-width-1">
      <div className="logo">
        <a href="#">Bharat</a>
      </div>
      <ul className="head-campo">
      <Link className="link" to="/about">/about</Link>
      <Link className="link" to="/contact">/contact</Link>
      <Link className="link" to="/projects">/projects</Link>
      <Link className="link" to="/other">/other</Link>
      </ul>
    </div>
  );
}

export default Header;
