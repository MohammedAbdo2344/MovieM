import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { auth } from '../../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from 'react-router-dom';
import Model from '../Model/Model';
import AllMovies from './AllMovies';
import Loading from '../../Components/Loading';
import AddMovieModel from '../Model/AddMovieModel';
import FilteredData from './FilteredData';


const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    const [showModel, setShowModel] = useState(false);
    const addMovie = () => {
        setShowModel(true);
    }
    const closeModel = () => {
        setShowModel(false);
    }
    if (error) {
        return <h1>Error : <span>{error.message}</span></h1>
    }
    if (loading) {
        return (
            <Loading />
        )
    }
    if (!user) {
        return (
            <div>
                <Header />
                <main>
                    <p className='pls'>Please <Link to="/login">Login</Link> to continue ...❤️</p>
                </main>
                <Footer />
            </div>
        )
    }
    if (user) {
        if (!user.emailVerified) {
            return (
                <div>
                    <Header />
                    <main className='flex'>
                        <p>We send you an email to verify your account</p>
                        <button className='btn btn-danger'>Send Again</button>
                    </main>
                    <Footer />
                </div>
            );
        } else {
            return (
                <div className='Home'>
                    <Header />
                    {user &&
                        <main>
                            {showModel &&
                                <Model closeModel={closeModel}>
                                    <AddMovieModel />
                                </Model>
                            }
                            <div className='HomeSlider flex'>
                                <h1>Home Slider</h1>
                            </div>
                            <div>
                                {/* Options {Filtered Data} */}
                                {/* <FilteredData /> */}
                                {/* Show all Movies */}
                                <AllMovies />
                                {/* Add new Movie BTN */}
                                <section className='MovieBTN'>
                                    <button onClick={() => {
                                        addMovie();
                                    }} className='btn btn-primary'>Add Movie</button>
                                </section>
                            </div>
                        </main>
                    }
                    <Footer />
                </div>
            );
        }
    }

}

export default Home;