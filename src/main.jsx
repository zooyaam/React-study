import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.class";

const domElement = document.getElementById("root");

if (domElement) {
  const reactDomRoot = createRoot(domElement);
  // 컴포넌트(component, class) = 생성 => 인스턴스(instance, element, object)
  // 클래스 구문
  // const app = new App().render(); // app ????
  const app = React.createElement(App /* 컴포넌트 타입 */);
  // 함수 구문
  // const app = createApp();
  reactDomRoot.render(app);
}
