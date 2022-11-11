import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about glass">
      <h2>Bài tập lớn môn Cơ sở dữ liệu</h2>
      <p>Mã môn học: INT2211_24 -- Nhóm 1</p>

      <h5>Thành viên</h5>
      <ul>
        <li>Lê Văn Quốc - 21020385</li>
        <li>Cao Tiến Thắng - 21020403</li>
        <li></li>
      </ul>
      <h5>Contact us</h5>
      <ul className="about-list">
        <li className="about-item">
          <a
            href="https://www.facebook.com/profile.php?id=100011641213288"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-facebook  icon"></i>
          </a>
        </li>
        <li className="about-item">
          <a
            href="https://www.instagram.com/a1__kuroko/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-instagram icon"></i>
          </a>
        </li>
        <li className="about-item">
          <a
            href="https://github.com/kuroko286"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github icon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
