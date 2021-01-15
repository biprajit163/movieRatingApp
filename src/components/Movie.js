import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../DataContext.jsx';
import { Link } from 'react-router-dom';


import MovieInfo from './MovieInfo.js';

function Movie() {

    const {movie} = useContext(DataContext);

    return (
        <div className="Movie">
            <h2>{movie.title}</h2>
        </div>
    );
}

export default Movie;