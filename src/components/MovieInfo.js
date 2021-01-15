import React, { useContext } from 'react';

function MovieInfo() {


    // const [randCharacter, setRandCharacter] = useState({});
    // const [randPlanet, setRandPlanet] = useState({});
    // const [randStarship, setRandStarship] = useState({});

    // useEffect(() => {
    //     let randCharNum = Math.floor(Math.random() * movie.characters.length);
    //     let randPlanetNum = Math.floor(Math.random() * movie.planets.length);
    //     let randStarshipNum = Math.floor(Math.random() * movie.starships.length);

    //     let characterUrl = movie.characters[randCharNum];
    //     fetch(characterUrl)
    //     .then(res => res.json())
    //     .then(res => setRandCharacter(res))
    //     .catch(console.error);
        

    //     let planetUrl = movie.planets[randPlanetNum];
    //     fetch(planetUrl)
    //     .then(res => res.json())
    //     .then(res => setRandPlanet(res))
    //     .catch(console.error);
        
        
    //     let starshipUrl = movie.starships[randStarshipNum];
    //     fetch(starshipUrl)
    //     .then(res => res.json())
    //     .then(res => setRandStarship(res))
    //     .catch(console.error);
    // }, []);

    return (
        <div>
            <h3>Movie Info goes here</h3>
        </div>
    );
}

export default MovieInfo;