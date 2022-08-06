import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppMarketing from "./components/AppMarketing.js";
import Header from "./components/Header.js";
import {StylesProvider, createGenerateClassName} from '@material-ui/styles';

const generateClassName = createGenerateClassName({
  productionPrefix:'co'
})

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
      <div>
        <Header />
        <AppMarketing />
      </div>
    </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
