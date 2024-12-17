import React from "react";
import { Link } from "react-router-dom";

function GNB(props) {
  return (
    <div className="w-full bg-black flex px-[260px] py-6 justify-between">
      {/* 로고 */}
      <h1 className="logo text-white">
        <Link to="/">JH PORTFOLIO</Link>
      </h1>

      {/* 메뉴 */}
      <nav>
        <ul className="menu text-white flex gap-20">
          <li>
            <Link to="about">ABOUT</Link>
          </li>
          <li>
            <Link to="skill">SKILL</Link>
          </li>
          <li>
            <Link to="project">PROJECT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default GNB;
