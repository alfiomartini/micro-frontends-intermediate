import React, { useRef, useEffect } from "react";
import { mount as mountMarkettingApp } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

// this is the AppMarketing component
export const AppMarketing = () => {
  const marketingRef = useRef(null);
  // copy of browser history
  const browserHistory = useHistory();

  // location.pathname arg comes from 'history' object and it is passed on by
  // the listen function in the memory history from Router
  const onChildNavigate = ({ pathname: nextPathname }) => {
    const { pathname } = browserHistory.location;
    if (pathname !== nextPathname) {
      console.log(
        "onChildNavigate, pathname, nextPathname",
        pathname,
        nextPathname
      );
      browserHistory.push(nextPathname);
    }
  };

  // only once
  useEffect(() => {
    // render the marketing app as defined in marketing/src/bootstrap.js
    const { onParentNavigate } = mountMarkettingApp(marketingRef.current, {
      onChildNavigate,
    });
    browserHistory.listen(onParentNavigate);
  }, []);

  return <div ref={marketingRef}></div>;
};
