import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

// this is the App from marketing/src, which is a constant in the mount function
export default () => {
  const marketingRef = useRef(null);

  // only once
  useEffect(() => {
    // render the marketing app as defined in marketing/src/bootstrap.js
    mount(marketingRef.current);
  }, []);
  return <div ref={marketingRef}></div>;
};
