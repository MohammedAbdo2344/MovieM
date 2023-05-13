import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div class="login-box">
                <p>Register</p>
                <form>
                    <div class="user-box">
                        <input required name="email" type="email" placeholder='Email' onChange={(eo) => { setemail(eo.target.value) }} />
                        {/* <label>Email</label> */}
                    </div>
                    <div class="user-box">
                        <input required name="password" type="password" placeholder='Password' onChange={(eo) => { setpassword(eo.target.value) }} />
                        {/* <label>Password</label> */}
                    </div>
                    <button onClick={(eo) => {
                        eo.preventDefault();
                        createUserWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                // go to Home Page
                                navigate('/')
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // ..
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
}

export default Register;
