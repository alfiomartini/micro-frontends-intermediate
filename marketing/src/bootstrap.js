import React from "react";
import ReactDOM from "react-dom";

// Mount function to start the App
function mount(el) {
  ReactDOM.render(<h1>React in Marketing</h1>, el);
}

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container and we should export 'Mount'

export { mount };
