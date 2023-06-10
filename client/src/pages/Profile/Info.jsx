import React from 'react';
import { auth } from '../../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import Moment from 'react-moment';
import Loading from '../../Components/Loading';


const Info = () => {
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
        <div className='info'>
            {/* main-info */}
            <div className='main-info'>
                <p>{user.displayName}</p>
            </div>
            {/* Full info */}
            <div className='full-info'>
                {/* Row */}
                <div className='detail-info'>
                    <p>Full Name : </p>
                    <p> {user.displayName}</p>
                </div>
                <hr />
                <div className='detail-info'>
                    <p>Email :</p>
                    <p>{user.email}</p>
                </div>
                <hr />
                <div className='detail-info'>
                    <p>Creation : </p>
                    <p><Moment fromNow date={user.metadata.creationTime}></Moment></p>
                </div>
                <hr />
                <div className='detail-info'>
                    <p>Last Login :</p>
                    <p><Moment fromNow date={user.metadata.lastSignInTime}></Moment></p>
                </div>
            </div>
        </div>
    );
}

export default Info;
