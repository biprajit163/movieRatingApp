
import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home.js'
import MovieInfo from './components/MovieInfo.js';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1 style={{
          textDecoration: 'none'
        }}>Rate Starwars Movies</h1>
      </Link>

      <Route path="/" exact component={Home}/>
      <Route exact path="/movie-info/:episode_id" render={() => (
        <MovieInfo />
      )}/>
    </div>
  );
}

export default App;
