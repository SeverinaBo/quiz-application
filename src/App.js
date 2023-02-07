import React, {useState} from "react";
import LogIn from "./RegistrationAndLogin/LogIn";
import Register from "./RegistrationAndLogin/Register";

function App() {
    const [currentForm,setCurrentForm] = useState('login');
  return (
        <div className="App">
            {
                currentForm === "login" ? <LogIn /> : <Register /> //if condition is true it will return first statement if it is false it will return second
            }
        </div>
  );
}

export default App;
