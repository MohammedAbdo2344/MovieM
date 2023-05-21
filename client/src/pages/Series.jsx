import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";

const Series = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    // const [user, loading, error] = useAuthState(auth);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!user) {
    //         navigate("/");
    //     }
    // }, [user]);
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
                        Series Page
                    </main>
                    <Footer />
                </div>
            );
        }
    }
    
}

export default Series;
