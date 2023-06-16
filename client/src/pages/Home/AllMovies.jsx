import React from 'react';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import Almatared from '../../img/Movies/Almatared.jpg';
import Loading from '../../Components/Loading';
import './AllMovies.css';
const AllMovies = () => {
    const [Movies, loading, error] = useCollection(collection(db, "Movies"));
    if (error) {
        return <h1>Error : <span>{error.message}</span></h1>
    }
    if (loading) {
        return (
            <Loading/>
        )
    }
    return (
        <section>
            <div className='Movies'>
                {Movies.docs.map((item) => {
                    return (
                        <div className='Movie'>
                            <Link to={{
                                pathname: `/edit_Movie/${item.data().Movie_Name}`,
                            }}>
                                {/* Img of Movie */}
                                <img src={Almatared} alt='movie_Image'/>
                                {/* Title  */}
                                <h2>{item.data().Movie_Name}</h2>
                                {/* Rating  */}
                                <p>Rating: <span>{item.data().Movie_Rating}</span></p>
                                {/* Category  */}
                                <p>Category: <span>{item.data().Movie_Catogery}</span></p>
                            </Link>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}

export default AllMovies;