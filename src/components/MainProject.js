import React from "react";
import { Link } from "react-router-dom";

function MainProject(props) {
  return (
    <div className="flex flex-col items-center px-[260px] mb-[200px]">
      <h1 className="h1 text-cwhite mb-[120px]">PROJECT</h1>
      <div className="flex flex-col gap-6 items-center">
        <p className="sbt6 text-gray-1">멍햄냥</p>
        <p className="body2 text-gray-1">
          <Link to="project/mhn">View All of Project</Link>
        </p>
      </div>
    </div>
  );
}

export default MainProject;
