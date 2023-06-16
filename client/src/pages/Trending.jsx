import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from '../Components/Loading';

const Trending = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
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
                    <div className='Contant flex'>
                        <h1>Trending Contant</h1>
                    </div>
                    <Footer />
                </div>
            );
        }
    }

}

export default Trending;
