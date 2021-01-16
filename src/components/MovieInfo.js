import React, { useState, useEffect } from 'react';

function MovieInfo({ match }) {

    const [movie, setMovie] = useState({})

    const [movieFeatures, setMovieFeatures] = useState({
        charactersArr: [],
        planetsArr: [],
        starshipsArr: []
    });

    const [character, setCharacter] = useState({});
    const [planet, setPlanet] = useState({});
    const [starship, setStarship] = useState({});
    
    useEffect(() => {
        const movieUrl = `http://swapi.dev/api/films/?search=${match.params.title}`
        
        fetch(movieUrl)
        .then(res => res.json())
        .then(res => {
            setMovie(res.results[0])
            setMovieFeatures({
                charactersArr: res.results[0].characters,
                planetsArr: res.results[0].planets,
                starshipsArr: res.results[0].starships
            })
        })
        .catch(err => console.log(err));

    }, []);

    useEffect(() => {
        let randCharacterIndex = Math.floor(Math.random() * movieFeatures.charactersArr.length);
        let randPlanetIndex = Math.floor(Math.random() * movieFeatures.planetsArr.length);
        let randStarshipIndex = Math.floor(Math.random() * movieFeatures.starshipsArr.length);
        
        let characterUrl = movieFeatures.charactersArr[randCharacterIndex];
        let planetUrl = movieFeatures.planetsArr[randPlanetIndex];
        let starshipUrl = movieFeatures.starshipsArr[randStarshipIndex];

        fetchFeature(characterUrl, setCharacter);
        fetchFeature(planetUrl, setPlanet);
        fetchFeature(starshipUrl, setStarship);

    }, [movieFeatures]);

    function fetchFeature(url, setState) {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setState(res);
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h3>{movie.title}</h3>
            <p>Episode Number: {movie.episode_id}</p>
            <p>Description: {movie.opening_crawl}</p>
        </div>
    );
}

export default MovieInfo;