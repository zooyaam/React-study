import React from "react";
import { createRoot } from "react-dom/client";

// React.Component Type 1 :: class syntax
class App {
  constructor() {}

  render() {}
}

// React.Component Type 2 :: function syntax
function createApp() {
  return (
    <div id="app" lang="en">
      <h1>React Application</h1>
    </div>
  );
}

const domElement = document.getElementById("root");

if (domElement) {
  const reactDomRoot = createRoot(domElement);
  reactDomRoot.render();
}
