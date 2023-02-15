import React, {useState} from "react";
import LogIn from "./RegistrationAndLogin/LogIn";
import Register from "./RegistrationAndLogin/Register";

import AppStyle from "./style/AppStyle.css";
import SignIn from "./SignInAndSignUpMui/SignIn";


function App() {
  /*  const [currentForm,setCurrentForm] = useState('login');

    const toggleForm = (formName) =>{
        setCurrentForm(formName);
    }*/

  return (
      <SignIn />)
/*        <div className="App">
            {
                currentForm === "login" ? <LogIn  onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} /> //if condition is true it will return first statement if it is false it will return second
            }
        </div>
  );*/
}

export default App;
