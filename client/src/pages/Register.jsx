import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";



const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [hasError, sethasError] = useState(false);
    const [loginError, setError] = useState("");
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (
            <div>
                <Header />
                <main>
                    <h1>Loading...</h1>
                </main>
                <Footer />
            </div>
        )
    }
    if (user) {
        if (!user.emailVerified) {
            return (
                <div>
                    <Header />
                    <main>
                        <p>We send you an email to verify your account</p>
                        <button className='btn btn-danger'>Send Again</button>
                    </main>
                    <Footer />
                </div>
            )
        }
    }

    if (!user) {
        return (
            <div>
                <Header />
                <div class="login-box">
                    <p>Register</p>
                    <form>
                        <div class="user-box">
                            <input required name="email" type="text" placeholder='Username' onChange={(eo) => { setUsername(eo.target.value) }} />
                        </div>
                        <div class="user-box">
                            <input required name="email" type="email" placeholder='Email' onChange={(eo) => { setemail(eo.target.value) }} />
                            {/* <label>Email</label> */}
                        </div>
                        <div class="user-box">
                            <input required name="password" type="password" placeholder='Password' onChange={(eo) => { setpassword(eo.target.value) }} />
                            {/* <label>Password</label> */}
                        </div>
                        <div class="user-box">
                            {hasError && <p>{loginError}</p>}
                        </div>
                        <button onClick={(eo) => {
                            eo.preventDefault();
                            createUserWithEmailAndPassword(auth, email, password)
                                .then((userCredential) => {
                                    // Signed in 
                                    const user = userCredential.user;
                                    // update Data
                                    updateProfile(auth.currentUser, {
                                        displayName: username
                                    }).then(() => {
                                        // Send E-mail verification!
                                        sendEmailVerification(auth.currentUser)
                                            .then(() => {
                                                // Email verification sent!
                                                // ...
                                                if (user.emailVerified) {
                                                    navigate('/')
                                                } else {
                                                    setError('Please verify your email');
                                                }

                                            });
                                    }).catch((error) => {
                                        // Error
                                    });
                                })
                                .catch((error) => {
                                    const errorCode = error.code;
                                    // ..

                                    sethasError(true);
                                    switch (errorCode) {
                                        case "auth/weak-password":
                                            setError("Weak password");
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
                            Register
                        </button>
                    </form>
                    <p>Already have an account ? <Link to="/login" class="a2">Login</Link></p>
                </div>
                <Footer />
            </div>
        );
    } else {
        navigate("/")
    }

}

export default Register;
