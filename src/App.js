
import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home.js'
import MovieInfo from './components/MovieInfo.js';
import CommentHistory from './components/history/CommentHistory.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <Link 
            to="/" 
            style={{
              textDecoration: 'none',
              color: 'rgb(129, 177, 33)',
              fontSize: '3rem'
            }}
          >Rate Starwars Movies</Link>
        </h1>
        <Link 
          to="/history/CommentHistory"
          style={{
            textDecoration: 'none',
            color: '#2befed',
            fontSize: '1rem'
          }}
        >Comment History</Link>
      </header>
      <main>
        <Route path="/" exact component={Home}/>
        <Route exact path="/movie-info/:title" render={(routerProps) => (
          <MovieInfo match={routerProps.match}/>
        )}/>
        <Route exact path="/history/CommentHistory" component={CommentHistory}/>
      </main>
    </div>
  );
}

export default App;
