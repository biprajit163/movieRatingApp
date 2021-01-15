import React, { useState, useEffect } from 'react';

function MovieInfo({ match }) {

    const [movie, setMovie] = useState({})
    
    useEffect(() => {

        const movieUrl = `http://swapi.dev/api/films/?search=${match.params.title}`
        
        fetch(movieUrl)
        .then(res => res.json())
        .then(res => {
            setMovie(res.results[0])
        })

    }, []);

    useEffect(() => { console.log(movie)}, [movie]);


    return (
        <div>
            <h3>{movie.title}</h3>
            <p>Episode Number: {movie.episode_id}</p>
            <p>Description: {movie.opening_crawl}</p>
        </div>
    );
}

export default MovieInfo;