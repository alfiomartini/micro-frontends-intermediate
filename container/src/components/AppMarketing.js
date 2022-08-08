import React, { useRef, useEffect } from "react";
import { mount as mountMarkettingApp } from "marketing/MarketingApp";

// this is the App from marketing/src, which is a constant in the mount function
export default () => {
  const marketingRef = useRef(null);
  const onNavigate = () => {
    console.log("The container noticed navigation in Marketing");
  };

  // only once
  useEffect(() => {
    // render the marketing app as defined in marketing/src/bootstrap.js
    mountMarkettingApp(marketingRef.current);
  }, []);
  return <div ref={marketingRef}></div>;
};
