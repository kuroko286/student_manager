import React from "react";
import Button from "../components/Button";

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <h2 className="home-title">Ứng dụng quản lý sinh viên trực tuyến Moom eLMS</h2>
        <p className="home-desc">
          Moom eLMS là phần mềm elearning được phát triển với công ty Moom
          Software được ứng dụng phổ biến trong quy trình quản lý học viên, giáo
          viên, khoá học, tài liệu giảng dạy, quản lý đào tạo, tài chính, đào
          tạo trực tuyến… ở các cơ sở giáo dục hiện nay. Hiện có hơn 50 trung
          tâm đang sử dụng và hơn 100 cá nhân đang sử dụng để dạy học trực
          tuyến, phát triển khoá học….
        </p>
        <Button linkTo="/students" label={"Danh sách sinh viên"}></Button>
        <Button linkTo="/courses" label={"Danh sách khóa học"}></Button>
      </div>
      <div className="home-right">
        <img className="home-img" alt="studying" src="../5836.png"></img>
      </div>
    </div>
  );
}

export default Home;
