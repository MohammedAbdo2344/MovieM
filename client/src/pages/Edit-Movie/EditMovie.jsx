import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { auth } from '../../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import TitleSection from './TitleSection';
import { useParams } from 'react-router-dom';
import SubMovie from './Sub-Movie';
import Buttons from './Buttons';
import { doc, updateDoc, deleteField, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import Loading from '../../Components/Loading';
import './editMovie.css';


const EditMovie = ({ MovieInfo }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const titleInput = async (eo) => {
        await updateDoc(doc(db, "Movies", id), {
            Movie_Name: eo.target.value,
        });
    }
    const ratingDelete = async (eo) => {
        await updateDoc(doc(db, "Movies", id), {
            Movie_Rating: deleteField()
        });
    }
    const CategeryDelete = async (eo) => {
        await updateDoc(doc(db, "Movies", id), {
            Movie_Catogery: deleteField()
        });
    }
    const documentDelete = async (eo) => {

        await deleteDoc(doc(db, "Movies", id));
    }
    let { id } = useParams();
    if (loading) {
        return (
            <Loading />
        )
    }
    if (error) {
        <h1>Error:<span>{error.message}</span></h1>
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
                    <main className='edit-movie'>
                        {/*Title  */}
                        <TitleSection id={id} titleInput={titleInput} />
                        {/* Sub-Movie */}
                        <SubMovie id={id} CategeryDelete={CategeryDelete} ratingDelete={ratingDelete} />
                        {/* Add & Delete BTN */}
                        <Buttons id={id} documentDelete={documentDelete} />
                    </main>
                    <Footer />
                </div>
            );
        }
    }
}

export default EditMovie;
