import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles"
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

//  in production, classnames generated are prefixed with 'ma'. It is needed
// to avoid conflicts in production
// Defaults to 'jss'. The string used to prefix the class names in production.
// The container will still use the default 'jss', in case it is not used there also

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

function App() {
  return (
    <div>
      <StylesProvider  generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}

export default App;
