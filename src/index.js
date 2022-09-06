import React from "react";
import { FirebaseContext } from "./context/firebase";
import { firebase } from "./context/firebase.prod";
import { render } from "react-dom";
import App from "./App";
render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
