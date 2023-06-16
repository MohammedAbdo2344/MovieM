import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Almatared from '../img/Movies/Almatared.jpg';
import Loading from '../Components/Loading';
import FilteredData from './Home/FilteredData';



const Movies = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log("Before useEffect" + user)
    const navigate = useNavigate();
   
    if (loading) {
        return (
            <Loading />
        )
    }
    if (error) {
        return <h1>Error : <span>{error.message}</span></h1>
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
                    <main>
                        <div>

                            {/* Options {Filtered Data} */}
                            <FilteredData/>
                            {/* Show all Movies */}
                            <section>
                                <div className='Movies flex'>
                                    <div className='Movie'>
                                        <Link to={"/edit_Movie"}>
                                            {/* Img of Movie */}
                                            <img src={Almatared} alt='' />
                                            {/* Title  */}
                                            <h2>Almatared</h2>
                                            {/* Rating  */}
                                            <p>Rating: <span>8.7</span></p>
                                            {/* Category  */}
                                            <p>Category: <span>Comedy</span></p>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            {/* Add new Movie BTN */}
                            <section className='MovieBTN'>
                                <button className='btn btn-danger'>Add Movie</button>
                            </section>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
    }

}

export default Movies;
