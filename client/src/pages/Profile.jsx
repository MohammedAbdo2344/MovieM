import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteUser, signOut } from "firebase/auth";
const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Header />
            {user &&
                <main className='profile'>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <p>Creation : <Moment fromNow date={user.metadata.creationTime}></Moment></p>
                    <button className='btn btn-danger' onClick={() => {
                        // Delete Account
                        deleteUser(user).then(() => {
                            // User deleted.
                            console.log('User deleted.')
                            // Sign Out
                            signOut(auth).then(() => {
                                // Sign-out successful.
                                console.log("Sign-out successful")

                            }).catch((error) => {
                                // An error happened.
                                console.log(error)
                            });
                        }).catch((error) => {
                            // An error ocurred
                            // ...
                        });
                    }}>Delete Account</button>
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
