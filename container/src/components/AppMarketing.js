import React, { useRef, useEffect } from "react";
import { mount as mountMarkettingApp } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

// this is the App from marketing/src, which is a constant in the mount function
export default () => {
  const marketingRef = useRef(null);
  // copy of browser history
  const browserHistory = useHistory();

  // location.pathname arg comes from 'history' object and it is passed on by
  // the listen function in the memory history from Router
  const onNavigate = ({ pathname: nextPathname }) => {
    browserHistory.push(nextPathname);
  };

  // only once
  useEffect(() => {
    // render the marketing app as defined in marketing/src/bootstrap.js
    mountMarkettingApp(marketingRef.current, { onNavigate });
  }, []);
  return <div ref={marketingRef}></div>;
};
