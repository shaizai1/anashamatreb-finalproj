import React from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import CurrentlyWatching from './components/section2';
import FinishedWatching from './components/section3';
import MoviesToWatch from './components/section1';
import MovieQuote from './components/MovieQuote';

function App() {

 // const fetchData= (value) => {
    //   fetch("https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=b5609ae1")
    // }
    
  return (
    <div className="App">

      <header className="App-header"> </header>
        <div className="App">Movie List </div> <div className="search-bar-container">
        <SearchBar /> </div>
        <div>SearchResults</div>
          <MoviesToWatch />
        <CurrentlyWatching />
      <FinishedWatching />
      
        
      <footer className='App-footer'>
        <MovieQuote />
      </footer>
    </div>
  );
}

export default App;
