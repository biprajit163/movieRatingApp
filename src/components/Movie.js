import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../DataContext.jsx';


function Movie() {

    const {movie} = useContext(DataContext);

    return (
        <div className="Movie">
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
            <p>Release Date: {movie.release_date}</p>
        </div>
    );
}

export default Movie;