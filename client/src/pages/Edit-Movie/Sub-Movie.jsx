import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
const SubMovie = ({ id }) => {
    const [Movies, loading, error] = useDocument(doc(db, "Movies", id));
    // const MovieRating = Movies.data().Movie_Rating;
    // // if(this.item === undefined) {
    // //     return
    // // }
    // console.log(MovieRating);
    return (
        <div className='sub-movie'>
            <div className='created-complete'>
                <p>Upload at :</p>
                <div>
                    <input id='checkbox' type='checkbox' />
                    <label htmlFor='checkbox' className='complete'>Completed</label>
                </div>
            </div>
            <ul>
                <li className='card-info'><p></p><DeleteIcon className='DeleteIcon' /></li>

            </ul>
        </div>
    );
}


export default SubMovie;
