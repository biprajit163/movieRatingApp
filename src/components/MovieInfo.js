
import React, { useState, useEffect } from 'react';


import CommentList from './CommentList.js';


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
        <div className="MovieInfo">
            <h3>{movie.title}</h3>
            <p>Episode Number: {movie.episode_id}</p>
            <p style={{
                width: '50%',
                margin: '10px auto'
            }}>Description: {movie.opening_crawl}</p>

            <div className="movie-features-container">
                <div className="character">
                    <h4>{character.name}</h4>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Skin Color: {character.skin_color}</p>
                    <p>Eye Color: {character.eye_color}</p>
                    <p>Birth Year: {character.birth_year}</p>
                </div>

                <div className="planet">
                    <h4>{planet.name}</h4>
                    <p>Rotation Period: {planet.rotation_period} hrs</p>
                    <p>Orbital Period: {planet.orbital_period} days</p>
                    <p>Planet Diameter: {planet.diameter}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Gravity: {planet.gravity}</p>
                    <p>Planet Terrain: {planet.terrain}</p>
                    <p>Population: {planet.population}</p>
                </div>

                <div className="starship">
                    <h4>{starship.name}</h4>

                    <div className="starship-card">
                        <div className="starship-info">
                            <p>Model: {starship.model}</p>
                            <p>manufacturer: {starship.manufacturer}</p>
                            <p>Cost: {starship.cost_in_credits} credits</p>
                            <p>Starship Class: {starship.starship_class}</p>
                        </div>

                        <div className="starship-details">
                            <p>Starship Details:</p>
                            <p>Length: {starship.length}</p>
                            <p>Max Atmosphere Speed: {starship.max_atmosphere_speed}</p>
                            <p>Crew: {starship.crew}</p>
                            <p>Passenger capacity: {starship.passengers}</p>
                            <p>Cargo Capacity: {starship.cargo_capacity}</p>
                            <p>Hyperdrive Rating: {starship.hyperdrive_rating} unit</p>
                        </div>
                    </div>
                </div>
            </div>

            <CommentList/>
        </div>
    );
}

export default MovieInfo;