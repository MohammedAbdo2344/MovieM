import React from 'react';
import { deleteUser, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import Loading from '../../Components/Loading';

const DeleteAccount = () => {
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
        <div className='delete-btn'>
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
        </div>
    );
}

export default DeleteAccount;
