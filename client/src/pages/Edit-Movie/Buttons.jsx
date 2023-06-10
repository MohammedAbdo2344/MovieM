import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useNavigate } from "react-router-dom";
import Model from '../Model/Model';

const Buttons = ({ id, documentDelete }) => {
    const [Movies, loading, error] = useCollection(collection(db, "Movies"));
    const navigate = useNavigate();
    const [showModel, setShowModel] = useState(false);
    const deleteMovie = () => {
        setShowModel(true);
    }
    const closeModel = () => {
        setShowModel(false);
    }
    console.log(id);
    return (
        <div className='buttons flex'>
            {
                showModel &&
                <Model closeModel={closeModel}>
                    <p>Are You Sure?</p>

                    <div >
                        <button onClick={async (eo) => {
                            eo.preventDefault();
                            documentDelete(eo);
                            navigate("/");
                        }} className='btn btn-primary'>Yes</button>
                        <button onClick={() => {
                            setShowModel(false);
                        }} className='btn btn-danger'>No</button>
                    </div>
                </Model>
            }
            <button onClick={async (eo) => {

            }} className='btn btn-primary'>
                Add More <AddIcon className='add-icon' />
            </button>
            <button onClick={async (eo) => {
                eo.preventDefault();
                // documentDelete(eo);
                // navigate("/");
                deleteMovie();

            }} className='btn btn-danger'>
                Delete Movie <DeleteIcon />
            </button>
        </div>
    );
}

export default Buttons;

