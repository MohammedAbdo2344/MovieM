import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from 'react-router-dom';

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div className='Home'>
            <Header />
            {user &&
                <main>
                    Home Page
                </main>
            }
            {!user &&
                <main>
                    <p className='pls'>Please <Link to="/login">Login</Link> to continue ...❤️</p>
                </main>
            }
            <Footer />
        </div>
    );
}

export default Home;