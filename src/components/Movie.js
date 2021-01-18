import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../DataContext.jsx';


function Movie() {

    const {movie} = useContext(DataContext);

    return (
        <div className="Movie">
            <h2>{movie.title}</h2>
            <div className="movie-description">
                <p><span>Director:</span> {movie.director}</p>
                <p><span>Producer:</span> {movie.producer}</p>
                <p><span>Release Date:</span> {movie.release_date}</p>
            </div>
        </div>
    );
}

export default Movie;