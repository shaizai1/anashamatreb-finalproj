import React from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import CurrentlyWatching from './components/section2';
import FinishedWatching from './components/section3';
import MoviesToWatch from './components/section1';
import MovieQuote from './components/MovieQuote';
import Jumbotron from './components/jumbotron'


function App() {

  // const fetchData= (value) => {
  //   fetch("https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=b5609ae1")
  // }

  return (
    
    <div className="App">
<div className="search-bar-container">
      
      <SearchBar />
      </div>

<div className="Jumbotron">

        <Jumbotron />
        
        </div>

        <div className='title'>
        <h1 className='title'>Movie Watch List</h1>
        </div>
      
      

    <div className="sectiondivs">
      <MoviesToWatch />
      <CurrentlyWatching />
      <FinishedWatching />
      </div>
      
      <footer className='App-footer'>
        <MovieQuote />
      </footer>
    </div>

  );
}

export default App;
