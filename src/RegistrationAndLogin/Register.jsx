import React,{ useState } from "react";



const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); //so that the page wouldn't reload and we wouldn't lose information
        console.log(email);
    }

    return(
        <div  className="main-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="your name" id="name"/>

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

                <label htmlFor="passoword">Passoword</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="passoword" placeholder="*********" id="passoword" name="passoword"/>

                <button type="submit">Log In</button>
            </form>
            <button className="link-btn"  onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register