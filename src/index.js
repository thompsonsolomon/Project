import React from "react";
import { render } from "react-dom";
import App from "./App";
render(
  <>
    {/* <FirebaseContext.Provider value={{ firebase }}> */}

      <App />
    {/* </FirebaseContext.Provider> */}
  </>,
  document.getElementById("root")
);
