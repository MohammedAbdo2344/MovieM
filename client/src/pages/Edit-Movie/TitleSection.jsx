import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
const TitleSection = ({ id }) => {
    const [Movies, loading, error] = useDocument(doc(db, "Movies", id));
    // const MovieName = Movies.data().Movie_Name;

    console.log(id);
    return (
        <div>
            <h1>
                <input type='Text' className='title' placeholder='Title Of Movie'   /><EditIcon className='edit-icon' />
            </h1>
        </div>
    );
}

export default TitleSection;