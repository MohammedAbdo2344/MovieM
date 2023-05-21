import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from 'react-router-dom';

const Home = () => {
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
            <div>
                <Header />
                <main>
                    <p className='pls'>Please <Link to="/login">Login</Link> to continue ...❤️</p>
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
            );
        } else {
            return (
                <div className='Home'>
                    <Header />
                    {user &&
                        <main>
                            Home Page
                        </main>
                    }
                    <Footer />
                </div>
            );
        }
    }

}

export default Home;