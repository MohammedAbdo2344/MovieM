import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from '../../firebase/config';
const Buttons = ({ id }) => {
    const [Movies, loading, error] = useCollection(collection(db, "Movies"));

    console.log(id);
    return (
        <div className='buttons flex'>
            <button className='btn btn-primary'>
                Add More <AddIcon className='add-icon' />
            </button>
            <button className='btn btn-danger'>
                Delete Movie <DeleteIcon />
            </button>
        </div>
    );
}

export default Buttons;
