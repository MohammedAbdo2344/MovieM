import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


const Movies = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log("Before useEffect"+ user)
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!user) {
    //         navigate('/')
    //         console.log("after useEffect"+ user)
    //     }
    // }, [user, navigate]);
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
    if (!user) {
        return (
            navigate('/')
        )
    }
    if (user) {
        if (!user.emailVerified) {
            return (
                navigate('/')
            );
        } else {
            return (
                <div>
                    <Header />
                    <main>
                        Movies Page
                    </main>
                    <Footer />
                </div>
            );
        }
    }
    
}

export default Movies;
