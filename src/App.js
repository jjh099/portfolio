import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectMHNPage from "./pages/ProjectMHNPage";
import ProjectDDIJPage from "./pages/ProjectDDIJPage";
import ProjectPFPage from "./pages/ProjectPFPage";
import ProjectCPPage from "./pages/ProjectCPPage";
import ComponentPage from "./pages/ComponentPage";
import GNB from "./components/GNB";

// 컴포넌트는 첫글자, 단어마다, 약어 대문자 사용

function App() {
  // useLocation = 현재 path 정보를 가져옴
  const location = useLocation();

  // gnb를 제외할 path 목록
  // location.pathname이 목록에 포함되어 있으면 gnb를 렌더링하지 않음
  const gnbx = ["/component"];

  return (
    <>
      {/* location.pathname = 현재 페이지 경로 확인
      gnbx.includes(location.pathname) = 이 조건으로 gnb를 특정 path에서 제외 */}
      {!gnbx.includes(location.pathname) && <GNB />}

      <Routes>
        {/* path는 소문자를 기본으로 사용
            path="about"
            단어 구분할 떄는 하이픈 사용
            path="about-us"
            중첩된 경로는 슬래시 사용
            path="about/us" */}
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skill" element={<SkillPage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="project/mhn" element={<ProjectMHNPage />} />
        <Route path="project/ddij" element={<ProjectDDIJPage />} />
        <Route path="project/pf" element={<ProjectPFPage />} />
        <Route path="project/cp" element={<ProjectCPPage />} />
        <Route path="component" element={<ComponentPage />} />
      </Routes>
    </>
  );
}

export default App;
