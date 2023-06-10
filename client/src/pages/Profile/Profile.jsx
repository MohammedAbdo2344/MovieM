import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { auth } from '../../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from 'react-router-dom';
import './profile.css';
import ProfileHeader from './Profile_header';
import Info from './Info';
import DeleteAccount from './DeleteAccount';
import Loading from '../../Components/Loading';
const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    if (error) {
        return <h1>Error : <span>{error.message}</span></h1>
    }
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <Header />
            {user &&
                <main className='profile'>
                    {/* Header */}
                    <ProfileHeader />
                    {/* Info */}
                    <Info />
                    {/* Delete Btn */}
                    <DeleteAccount />
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

export default Profile;
