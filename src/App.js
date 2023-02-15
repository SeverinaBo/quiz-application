import React from "react";

import SignIn from "./SignInAndSignUpMui/SignIn";
import SignUp from "./SignInAndSignUpMui/SignUp";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {


  return (
      <>
        <Router>
        <Switch>
          <Route exact path = "/"><SignIn/></Route>
          <Route path = "./SignInAndSignUpMui/SignUp"><SignUp/></Route>
        </Switch>
      </Router>

        </>
  )

}

export default App;
