import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar navbar-dark bg-dark text-light" style={{height:"50px"}}>
      <span className="d-block m-auto"><Link to="/" className="link">STUDENT MANAGER</Link></span>
    </div>
  );
}

export default Header;
