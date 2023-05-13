import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [user, loading] = useAuthState(auth);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [hasError, sethasError] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div class="login-box">
                <p>Login</p>
                <form>
                    <div class="user-box">
                        <input required="" name="" type="email" placeholder='Email' onChange={(eo) => { setemail(eo.target.value) }} />
                        {/* <label>Email</label> */}
                    </div>
                    <div class="user-box">
                        <input required="" name="" type="password" placeholder='Password' onChange={(eo) => { setpassword(eo.target.value) }} />
                        {/* <label>Password</label> */}
                    </div>
                    <div class="user-box">
                        {hasError && <p>E-mail or Password not Valid </p>}
                    </div>
                    <button onClick={(eo) => {
                        eo.preventDefault();
                        signInWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                // go to Home Page
                                navigate("/");

                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                sethasError(true);
                                // setError(errorMessage);
                            });
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </button>
                </form>
                <p>Don't have an account? <Link to="/register" class="a2">Register</Link></p>
            </div>
            <Footer />
        </div>
    );
}

export default Login;