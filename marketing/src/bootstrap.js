import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Mount function to start the App
function mount(el, { onChildNavigate, defaultHistory }) {
  // creates an in-memory history object that does not interact with the browser URL
  const history = defaultHistory || createMemoryHistory();

  // whenever the url changes, call 'onChildNavigate'
  if (onChildNavigate) history.listen(onChildNavigate);

  ReactDOM.render(<App history={history} />, el);

  const onParentNavigate = ({ pathname: nextPathname }) => {
    const { pathname } = history.location;
    if (pathname !== nextPathname) {
      console.log(
        "onParentNavigate, pathname, nextPathname",
        pathname,
        nextPathname
      );
      history.push(nextPathname);
    }
  };

  return { onParentNavigate };
}

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container and we should export 'Mount'

export { mount };
