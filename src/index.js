import React from "react";
import "./assets/css/index.css";
// index.css에 포함된 모든 스타일을 적용
import "./assets/css/tStyle.scss";

import ReactDOM from "react-dom/client";
// ReactDOM(React를 웹 페이지에 렌더링하는데 필요한거) 불러옴

import App from "./App";
// App.js 불러옴

import { BrowserRouter } from "react-router-dom";
// BorwserRouter(클라이언트 측 라우팅 해주는거) 불러옴

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* Router를 적용하여 클라이언트 측 라우팅을 가능하게 함 */}

    <App />
    {/* App.js 렌더링 */}
  </BrowserRouter>
);
