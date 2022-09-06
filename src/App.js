import "./components/styles/style.css";
import Main from "./pages/Main";
import { BrowserRouter as Router} from "react-router-dom";
import Signin from "./pages/Sign_In";
import Browse from "./pages/Browse";
import * as ROUTES from "./constants/routes";
import Signup from "./containers/Signup";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import UseAuthListener from "./helpers/UseAuthListener";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  const { user } = UseAuthListener();
  console.log(user);
  return (
    <div>
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
          <ProtectedRoute user={user } path={ROUTES.BROWSE}>
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
