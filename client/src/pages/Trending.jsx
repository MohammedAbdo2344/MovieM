import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Trending = () => {
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
                        Trending Page
                    </main>
                    <Footer />
                </div>
            );
        }
    }
    
}

export default Trending;
