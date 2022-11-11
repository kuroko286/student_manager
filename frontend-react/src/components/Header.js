import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header glass">
      <p>
        <Link to="/" className="header-title link">
          STUDENT MANAGER
        </Link>
      </p>
      <ul className="header-list">
        <li className="header-item"><Link to="/" className="link">Home</Link></li>
        <li className="header-item"><Link to="/students" className="link">Sinh viên</Link></li>
        <li className="header-item"><Link to="/courses" className="link">Khóa học</Link></li>
        <li className="header-item"><Link to="/about" className="link">About</Link></li>
      </ul>
    </div>
  );
}

export default Header;
