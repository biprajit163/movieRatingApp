import React, { useState, useEffect } from 'react';
import { DataContext } from '../DataContext.jsx'; 
import { Link } from 'react-router-dom';

import Movie from './Movie.js';
import MovieInfo from './MovieInfo.js';

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
            movies.map(movie => {
                return (
                    <DataContext.Provider value={{ movie }} key={ movie.episode_id }>
                        <Link 
                            to={`/movie-info/${movie.title}`}  
                            style={{
                                textDecoration: 'none', 
                                color: 'black' 
                            }}
                        >
                            <Movie />
                        </Link>
                    </DataContext.Provider>
                );
            })
        }
      </div>
    );
}

export default Home;