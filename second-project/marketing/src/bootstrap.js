import React from "react";
import ReactDom from "react-dom/client";

// Mount function to start up the app
const mount = (el) => {
  const root = ReactDom.createRoot(el);
  root.render(<h1>Hi there!</h1>);
};

// if we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_marketing-dev-root");

  if (el) mount(el);
}

// We are rnning through container
// and we should export the mount function
export { mount };
