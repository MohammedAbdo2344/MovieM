import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";
import Loading from '../Components/Loading';

const Login = () => {
    const [user, loading] = useAuthState(auth);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const [hasError, sethasError] = useState(false);
    const navigate = useNavigate();
    if (loading) {
        return (
            <Loading />
        )
    }
    if (error) {
        return <h1>Error : <span>{error.message}</span></h1>
    }
    if (!user) {
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
                            {hasError && <p>{error}</p>}
                        </div>
                        <button onClick={(eo) => {
                            eo.preventDefault();
                            signInWithEmailAndPassword(auth, email, password)
                                .then((userCredential) => {
                                    // Signed in 
                                    const user = userCredential.user;
                                    // go to Home Page
                                    if (user.emailVerified === "true") {
                                        navigate("/");
                                    } else {
                                        setError("Please Verify Your Email");
                                    }

                                })
                                .catch((error) => {
                                    const errorCode = error.code;
                                    sethasError(true);
                                    switch (errorCode) {
                                        case "auth/user-not-found":
                                            setError("User not found");
                                            break;
                                        case "auth/wrong-password":
                                            setError("Wrong password");
                                            break;
                                        case "auth/invalid-email":
                                            setError("Invalid email");
                                            break;
                                        case "auth/too-many-requests":
                                            setError("Too many requests, please try again later");
                                            break;
                                        default:
                                            setError("Something went wrong");
                                            break;
                                    }
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
    } else {
        navigate("/");
    }
}
export default Login;