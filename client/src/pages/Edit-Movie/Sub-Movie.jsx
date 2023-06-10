import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from '../../firebase/config';
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import Moment from 'react-moment';

const SubMovie = ({ id, ratingDelete, CategeryDelete }) => {
    const [Movies, loading, error] = useDocument(doc(db, "Movies", id));
    if (error) {
        return <h1>Error : <span>{error.message}</span></h1>
    }
    if (Movies) {
        const MovieRating = Movies.data().Movie_Rating;
        const MovieCatogery = Movies.data().Movie_Catogery;
        const Moviedate = Movies.data().Movie_Id;
        return (
            <div className='sub-movie'>
                <div className='created-complete'>
                    <p>Upload at : <span><Moment fromNow date={Moviedate} /></span></p>
                    <div>
                        <input id='checkbox' type='checkbox' />
                        <label htmlFor='checkbox' className='complete'>Completed</label>
                    </div>
                </div>
                <ul>
                    <li className='card-info'><p>Rating: {MovieRating}</p>
                        <i onClick={
                            async (eo) => {
                                ratingDelete(eo)
                            }}
                            class="fa-solid fa-trash DeleteIcon">

                        </i>
                    </li>
                    <li className='card-info'><p>Category: {MovieCatogery}</p>
                        <i onClick={
                            async (eo) => {
                                CategeryDelete(eo)
                            }}
                            class="fa-solid fa-trash DeleteIcon">

                        </i>
                    </li>
                </ul>
            </div>
        );
    }
}
export default SubMovie;

