import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from 'react-router-dom';
import Almatared from '../img/Movies/Almatared.jpg';
import Shalaby from '../img/Movies/shalaby.jpg';
import BankElHaz from '../img/Movies/bankEl.jpg';
import { Button } from '@mui/material';

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return (
            <div>
                <Header />
                <main className='flex'>
                    <div>
                        <svg height="108px" width="108px" viewBox="0 0 128 128" class="loader">
                            <defs>
                                <clipPath id="loader-eyes">
                                    <circle transform="rotate(-40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye1"></circle>
                                    <circle transform="rotate(40,64,64) translate(0,-56)" r="8" cy="64" cx="64" class="loader__eye2"></circle>
                                </clipPath>
                                <linearGradient y2="1" x2="0" y1="0" x1="0" id="loader-grad">
                                    <stop stop-color="#000" offset="0%"></stop>
                                    <stop stop-color="#fff" offset="100%"></stop>
                                </linearGradient>
                                <mask id="loader-mask">
                                    <rect fill="url(#loader-grad)" height="128" width="128" y="0" x="0"></rect>
                                </mask>
                            </defs>
                            <g stroke-dasharray="175.93 351.86" stroke-width="12" stroke-linecap="round">
                                <g>
                                    <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(193,90%,50%)"></rect>
                                    <g stroke="hsl(193,90%,50%)" fill="none">
                                        <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
                                        <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
                                    </g>
                                </g>
                                <g mask="url(#loader-mask)">
                                    <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(223,90%,50%)"></rect>
                                    <g stroke="hsl(223,90%,50%)" fill="none">
                                        <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" class="loader__mouth1"></circle>
                                        <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" class="loader__mouth2"></circle>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </main>
                <Footer />
            </div>
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
                            <div className='HomeSlider flex'>
                                <h1>Home Slider</h1>
                            </div>
                            <div>
                                {/* Options {Filtered Data} */}
                                <section className='FilteredData'>
                                    <button className='btnFilter'>Newest First</button>
                                    <button className='btnFilter' >Oldest First</button>
                                    <select className='options' >
                                        <option>All Categories</option>
                                        <option>Category 1</option>
                                        <option>Category 2</option>
                                    </select>
                                </section>
                                {/* Show all Movies */}
                                <section>
                                    <div className='Movies flex'>
                                        <div className='Movie'>
                                            {/* Img of Movie */}
                                            <img src={Almatared} />
                                            {/* Title  */}
                                            <h2>Almatared</h2>
                                            {/* Rating  */}
                                            <p>Rating: <span>8.7</span></p>
                                            {/* Category  */}
                                            <p>Category: <span>Comedy</span></p>
                                        </div>
                                        <div className='Movie'>
                                            {/* Img of Movie */}
                                            <img src={Shalaby} />
                                            {/* Title  */}
                                            <h2>Shalaby</h2>
                                            {/* Rating  */}
                                            <p>Rating: <span>8.7</span></p>
                                            {/* Category  */}
                                            <p>Category: <span>Comedy</span></p>
                                        </div>
                                        <div className='Movie'>
                                            {/* Img of Movie */}
                                            <img src={BankElHaz} />
                                            {/* Title  */}
                                            <h2>Bank El Haz</h2>
                                            {/* Rating  */}
                                            <p>Rating: <span>8.7</span></p>
                                            {/* Category  */}
                                            <p>Category: <span>Comedy</span></p>
                                        </div>
                                    </div>
                                </section>
                                {/* Add new Movie BTN */}
                                <section className='MovieBTN'>
                                    <button className='btn btn-danger'>Add Movie</button>
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