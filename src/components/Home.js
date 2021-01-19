import React, { useState, useEffect } from 'react';
import { DataContext } from '../DataContext.jsx'; 
import { Link } from 'react-router-dom';

import Movie from './Movie.js';
import Rating from './rating-components/Rating.js';
import { posters } from '../poster_images.jsx';


function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const moviesURL = `https://swapi.dev/api/films`;

        fetch(moviesURL)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results);
        })
        .catch(err => console.log(`Something went wrong ${err}`));


    }, []);

    return (
      <div className="Home">
        {
            movies.map((movie, i) => {
                return (
                    <div className="movie-containter" key={ movie.episode_id }>
                        <DataContext.Provider value={{ movie }}>
                            <Link 
                                to={`/movie-info/${movie.title}`}  
                                style={{
                                    textDecoration: 'none', 
                                    color: 'black' 
                                }}
                            >
                                <Movie poster={`${posters[i]}`}/>
                            </Link>
                        </DataContext.Provider>
                        <Rating/>
                    </div>
                );
            })
        }
      </div>
    );
}

export default Home;