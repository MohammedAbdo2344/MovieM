import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { auth } from '../../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import './editMovie.css';
import TitleSection from './TitleSection';
import { useParams } from 'react-router-dom';
import SubMovie from './Sub-Movie';
import Buttons from './Buttons';
import { doc, updateDoc, deleteField, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase/config';


const EditMovie = ({ MovieInfo }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState("");
    const addMovie = () => {
        setShowForm("show-add-movie");
    }
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
            <div>
                <Header />
                <main className='flex'>
                    <div>
                        <svg height="108px" width="108px" viewBox="0 0 128 128" class="loader">
                            <defs>
                                <clipPath id="loader-eyes">
                                    <circle transform="rotate(-40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye1"></circle>
                                    <circle transform="rotate(40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye2"></circle>
                                </clipPath>
                                <linearGradient y2="1" x2="0" y1="0" x1="0" id="loader-grad">
                                    <stop stop-color="#000" offset="0%"></stop>
                                    <stop stop-color="#fff" offset="100%"></stop>
                                </linearGradient>
                                <mask id="loader-mask">
                                    <rect fill="url(#loader-grad)" height="128" width="128" y="0" x="0"></rect>
                                </mask>
                            </defs>
                            <g stroke-dasharray="175.93 351.86" stroke-width="12" stroke-linecap="round">
                                <g>
                                    <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(193,90%,50%)"></rect>
                                    <g stroke="hsl(193,90%,50%)" fill="none">
                                        <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
                                        <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
                                    </g>
                                </g>
                                <g mask="url(#loader-mask)">
                                    <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(223,90%,50%)"></rect>
                                    <g stroke="hsl(223,90%,50%)" fill="none">
                                        <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
                                        <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </main>
                <Footer />
            </div>
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
                        <Buttons id={id} documentDelete={documentDelete}/>
                    </main>
                    <Footer />
                </div>
            );
        }
    }
}

export default EditMovie;
