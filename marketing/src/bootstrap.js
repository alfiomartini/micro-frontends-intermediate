import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

// Mount function to start the App
function mount(el, { onChildNavigate }) {
  const history = createMemoryHistory();

  // whenever the url changes, call 'onChildNavigate'
  if (onChildNavigate) history.listen(onChildNavigate);

  ReactDOM.render(<App history={history} />, el);
}

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");
  if (devRoot) {
    mount(devRoot, {});
  }
}

// We are running through container and we should export 'Mount'

export { mount };
