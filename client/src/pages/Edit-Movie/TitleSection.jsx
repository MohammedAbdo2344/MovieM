import React, { useRef } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { db } from '../../firebase/config';
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import Loading from '../../Components/Loading';

const TitleSection = ({ id, titleInput }) => {
    const inputElement = useRef(null);

    const [Movies, loading, error] = useDocument(doc(db, "Movies", id));
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <h1>Error : <span>{error.message}</span></h1>
    }
    if (Movies) {
        const MovieName = Movies.data().Movie_Name;
        return (
            <div>
                <h1>
                    <input
                        type='Text'
                        className='title'
                        placeholder='Title Of Movie'
                        value={MovieName}
                        onChange={async (eo) => {
                            titleInput(eo);
                        }}
                        ref={inputElement}
                    /><i onClick={() => {
                        inputElement.current.focus()
                    }}><EditIcon className='edit-icon' /></i>
                </h1>
            </div>
        );
    }
}

export default TitleSection;