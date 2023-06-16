import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";
import Loading from '../Components/Loading';

const Series = () => {
    const [user, loading, error] = useAuthState(auth);
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
                        <div className='Contant flex'>
                            <h1>Series Contant</h1>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
    }

}

export default Series;
