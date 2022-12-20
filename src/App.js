import "./components/styles/style.css";
import Main from "./pages/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Signin from "./pages/Sign_In";
import Browse from "./pages/Browse";
import * as ROUTES from "./constants/routes";
import Signup from "./containers/Signup";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import UseAuthListener from "./helpers/UseAuthListener";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

export default function App() {
  const { user } = UseAuthListener();
  const [Preloader, setPreloader] = useState(true);

  setTimeout(() => {
    setPreloader(false);
  }, 4000);

  console.log("this is the user " , user);

  
  return (
    <div>
      {Preloader && (
        <div class="spin">
          {
            user.photoURL ? 
            <img src={"./users/" + user.photoURL} alt="" /> :
            <img src={"./users/2.png"} alt="" /> 
          }
        </div>
      )}

      {/* <h1>hello from test</h1> */}
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
          >
            <Signin />
          </IsUserRedirect>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <Signup />
          </IsUserRedirect>

          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
          >
            <Main />
          </IsUserRedirect>
        </Switch>
      </Router>
    </div>
  );
}
