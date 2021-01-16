
import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home.js'
import MovieInfo from './components/MovieInfo.js';

function App() {
  return (
    <div className="App">
      <h1 style={{ 
        backgroundColor: 'black',
        padding: '4rem 0'
      }}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: 'rgb(129, 177, 33)',
          fontSize: '3rem'
        }}>Rate Starwars Movies</Link>
      </h1>

      <Route path="/" exact component={Home}/>
      <Route exact path="/movie-info/:title" render={(routerProps) => (
        <MovieInfo match={routerProps.match}/>
      )}/>
    </div>
  );
}

export default App;
