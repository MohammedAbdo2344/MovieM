import React, { useState } from 'react';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import Almatared from '../../img/Movies/Almatared.jpg';
import './AllMovies.css';
const AllMovies = () => {
    const [Movies, loading, error] = useCollection(collection(db, "Movies"));
    const [MovieInfo, setMovieInfo] = useState();
    if (loading) {
        return (
            <div>

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

            </div>
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
                                <img src={Almatared} />
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