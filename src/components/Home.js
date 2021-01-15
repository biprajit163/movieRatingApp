import React, { useState, useEffect } from 'react';
import { DataContext } from '../DataContext.jsx'; 

import Movie from './Movie.js';

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
                        <Movie />
                    </DataContext.Provider>
                );
            })
        }
      </div>
    );
}

export default Home;