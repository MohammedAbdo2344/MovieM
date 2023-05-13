import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";


const Movies = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user]);
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

export default Movies;
