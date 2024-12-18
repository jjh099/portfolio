import React from "react";

function MainAbout() {
  const info = {
    title: "기본정보",
    items: [
      { name: "이름", content: "조재희" },
      { name: "생년월일", content: "1999.10.01" },
      { name: "주소", content: "인천 부평구" },
      { name: "이메일", content: "wogml220723@naver.com" },
    ],
  };

  const education = {
    title: "학력",
    items: [
      {
        name: "세명컴퓨터고등학교<br/>스마트디바이스과",
        content: "2015.03 ~ 2018.02",
      },
    ],
  };

  const training = {
    title: "교육연수",
    items: [
      {
        name: "코드랩아카데미<br/>클라우드 활용 020 스마트 플랫폼 웹&앱 개발",
        content: "2024.02 ~ 2024.08",
      },
    ],
  };

  const license = {
    title: "자격증",
    items: [
      { name: "2017.06", content: "전자기기 기능사" },
      { name: "2015.06", content: "인터넷 정보관리사 2급" },
      { name: "2011.12", content: "GTQ 2급" },
      { name: "2011.12", content: "ICDL" },
      { name: "2011.10", content: "ITQ (한글, 파워포인트, 인터넷)" },
    ],
  };

  return <div></div>;
}

export default MainAbout;
