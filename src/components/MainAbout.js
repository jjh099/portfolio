import React from "react";

function MainAbout(props) {
  return (
    <div className="flex flex-col items-center px-[260px]">
      <h1 className="h1 text-white mb-[120px]">ABOUT</h1>
      {/* 기본정보 s */}
      <div className="w-full h-80 flex justify-between items-center px-20 mb-[60px] bg-gray-12 border-line rounded-xl">
        <h2 className="sbt4 text-white">기본정보</h2>
        <ul className="w-[302px] flex flex-col gap-7 body1">
          <li className="flex justify-between">
            <span className="text-gray-5">이름</span>
            <span className="text-gray-3">조재희</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-5">생년월일</span>
            <span className="text-gray-3">1999.10.01</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-5">주소</span>
            <span className="text-gray-3">인천 부평구</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-5">이메일</span>
            <span className="text-gray-3">wogml220723@naver.com</span>
          </li>
        </ul>
      </div>
      {/* 기본정보 e */}

      {/* 학력 s */}
      <div className="w-full h-80 flex justify-between items-center px-20 mb-[60px] bg-gray-12 border-line rounded-xl">
        <h2 className="sbt4 text-white">학력</h2>
        <ul className="flex flex-col gap-16 text-center">
          <li className="body1 text-gray-3">
            세명컴퓨터고등학교
            <br />
            스마트디바이스과
          </li>
          <li className="body1 text-gray-5">2015.03 ~ 2018.02</li>
        </ul>
      </div>
      {/* 학력 e */}

      {/* 교육연수 s */}
      <div className="w-full h-80 flex justify-between items-center px-20 mb-[60px] bg-gray-12 border-line rounded-xl">
        <h2 className="sbt4 text-white">교육연수</h2>
        <ul className="flex flex-col gap-16 text-center">
          <li className="body1 text-gray-3">
            코드랩아카데미
            <br />
            클라우드 활용 O2O 스마트 플랫폼
          </li>
          <li className="body1 text-gray-5">2024.02 ~ 2024.02</li>
        </ul>
      </div>
      {/* 교육연수 e */}

      {/* 자격증 s */}
      <div className="w-full h-80 flex justify-between items-center px-20 mb-[60px] bg-gray-12 border-line rounded-xl">
        <h2 className="sbt4 text-white">자격증</h2>
        <ul className="w-[302px] flex flex-col gap-7 body1">
          <li className="flex justify-between">
            <span className="text-gray-5">2017.06</span>
            <span className="text-gray-3">전자기기 기능사</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-5">2015.06</span>
            <span className="text-gray-3">인터넷 정보관리사 2급</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-5">2011.12</span>
            <span className="text-gray-3">GTQ 2급</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-5">2011.12</span>
            <span className="text-gray-3">ICDL</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-5">2011.10</span>
            <span className="text-gray-3">ITQ(한글,파워포인트,인터넷)</span>
          </li>
        </ul>
      </div>
      {/* 자격증 e */}
    </div>
  );
}

export default MainAbout;
