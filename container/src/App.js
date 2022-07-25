import React from "react";
import { mount } from "marketing/MarketingApp";
import AppMarketing from "./components/AppMarketing.js";

console.log("mount function", mount);

function App() {
  return (
    <div>
      <h1>Container App</h1>
      <hr />
      <AppMarketing />
    </div>
  );
}

export default App;
