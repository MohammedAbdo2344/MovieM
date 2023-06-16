import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const AddMovieModel = () => {
    const [movieName, setMovieName] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const [movieCatogery, setMovieCatogery] = useState("");
    const movieID = new Date().getTime();
    return (
        <div>
            <form>
                <div className='inputs-model'>
                    <input
                        name='Movie Name'
                        type='Text'
                        placeholder='Movie Name'
                        onChange={(eo) => {
                            setMovieName(eo.target.value);
                        }}
                    />
                    <input
                        name='Movie Rating'
                        type='Text'
                        placeholder='Movie Rating'
                        onChange={(eo) => {
                            setMovieRating(eo.target.value);
                        }}
                    />
                    <input
                        name='Movie Catogery'
                        type='Text'
                        placeholder='Movie Catogery'
                        onChange={(eo) => {
                            setMovieCatogery(eo.target.value);
                        }}
                    />
                </div>
                <div className='buttons-model'>
                    <button onClick={
                        async (eo) => {
                            eo.preventDefault();
                            await setDoc(doc(db, "Movies", `${movieName}`), {
                                Movie_ID: `${movieID}`,
                                Movie_Name: `${movieName}`,
                                Movie_Rating: `${movieRating}`,
                                Movie_Catogery: `${movieCatogery}`
                            });
                        }
                    } className='btn btn-primary' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddMovieModel;
