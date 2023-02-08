import React,{ useState } from "react";



const LogIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //so that the page wouldn't reload and we wouldn't lose information
        console.log(email);
    }
            return(
                <div className="main-form-container">
                    <h2>Log In</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

                        <label htmlFor="passoword">Passoword</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="passoword" placeholder="*********" id="passoword" name="passoword"/>

                        <button type="submit">Log In</button>
                    </form>
                    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
                </div>
            )
        }

export default LogIn