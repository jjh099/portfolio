import React from "react";
import MainAbout from "../components/MainAbout";
import MainProject from "../components/MainProject";
import MainSkill from "../components/MainSkill";
import MainContact from "../components/MainContact";
import MainThank from "../components/MainThank";
import Footer from "../components/Footer";

function MainPage(props) {
  return (
    <>
      {/* main title s*/}
      <div className="w-full flex flex-col gap-[30px] py-48 mb-[200px]">
        <h1 className="main-title text-gray-1 text-center">
          WELCOME!
          <br />
          MY WEB DEVELOMPMENT PORTFOLIO
        </h1>
        <p className="h5 text-gray-5 text-center">
          웹 개발 여정을 담은 포트폴리오입니다
        </p>
      </div>
      {/* main title e*/}

      {/* about s*/}
      <MainAbout />
      {/* about e*/}

      {/* project s*/}
      <MainProject />
      {/* project e*/}

      {/* skill s */}
      <MainSkill />
      {/* skill e */}

      {/* contact s*/}
      <MainContact />
      {/* contact e*/}

      {/* thank s*/}
      <MainThank />
      {/* thank e*/}

      {/* footer s*/}
      <Footer />
      {/* footer e*/}
    </>
  );
}

export default MainPage;
