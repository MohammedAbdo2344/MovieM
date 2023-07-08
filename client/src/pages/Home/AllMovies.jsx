import React from 'react';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query, where } from "firebase/firestore";
import Almatared from '../../img/Movies/Almatared.jpg';
import Loading from '../../Components/Loading';
import './AllMovies.css';
import { useState } from 'react';
const AllMovies = () => {
    const [initialData, setInitialData] = useState(query(collection(db, "Movies"), orderBy("Movie_Name", "asc")))
    const [Movies, loading, error] = useCollection(initialData);
    const [fullOpecity, isFullOpecity] = useState(false);
    if (error) {
        return <h1>Error : <span>{error.message}</span></h1>
    }
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            {/* Filter Data */}
            <section className='FilteredData'>
                <button style={{ opacity: fullOpecity ? "0.3" : "1" }}
                    onClick={() => {
                        isFullOpecity(true);
                        setInitialData(query(collection(db, "Movies"), orderBy("Movie_Name", "desc")))
                    }} className='btnFilter'>Newest First</button>
                <button style={{ opacity: fullOpecity ? "1" : "0.3" }}
                onClick={() => {
                    isFullOpecity(false)
                    setInitialData(query(collection(db, "Movies"), orderBy("Movie_Name", "asc")))
                }} className='btnFilter' >Oldest First</button>
                <select onChange={(eo) => {
                    if(eo.target.value=="asc"){
                        setInitialData(query(collection(db, "Movies"), where("Movie_Rating", "=","7.5")));
                    }else if(eo.target.value=="desc"){
                        setInitialData(query(collection(db, "Movies"), orderBy("Movie_Rating", "desc")));
                    }
                    }} className='options' >
                        <option>Filter</option>
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                </select>
            </section>
            {/* All Movies */}
            <section>
                <div className='Movies'>
                    {Movies.docs.length > 0 ? Movies.docs.map((item) => {
                        return (
                            <Link to={{
                                pathname: `/edit_Movie/${item.data().Movie_Name}`,
                            }}>
                                <div className='Movie'>

                                    {/* Img of Movie */}
                                    <img src={Almatared} alt='movie_Image' />
                                    {/* Title  */}
                                    <h2>{item.data().Movie_Name}</h2>
                                    {/* Rating  */}
                                    <p>Rating: <span>{item.data().Movie_Rating}</span></p>
                                    {/* Category  */}
                                    <p>Category: <span>{item.data().Movie_Catogery}</span></p>
                                </div>
                            </Link>
                        );
                    }) : <div>No Data Avaliable</div>}
                </div>

            </section>
        </div>
    );
}

export default AllMovies;