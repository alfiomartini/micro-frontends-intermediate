import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "marketing/MarketingApp";
import AppMarketing from "./components/AppMarketing.js";
import Header from "./components/Header.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <AppMarketing />
      </div>
    </BrowserRouter>
  );
}

export default App;
