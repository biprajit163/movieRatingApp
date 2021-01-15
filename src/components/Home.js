import React, { useState, useEffect } from 'react';
import { DataContext } from '../DataContext.jsx'; 
import { Route } from 'react-router-dom';

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
          <Route path={`/movie-info/${movies[0].episode_id}`} component={<MovieInfo/>}/>

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