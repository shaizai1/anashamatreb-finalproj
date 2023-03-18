import React from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import CurrentlyWatching from './components/section2';
import FinishedWatching from './components/section3';
import MoviesToWatch from './components/section1';


function App() {

  // const fetchData= (value) => {
  //   fetch("https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=b5609ae1")
  // }

  return (
    
    <div className="App">
      <div className="search-bar-container">
        <h1>Movie Watch List</h1>
        <SearchBar />
        <div>SearchResults</div>
      </div>

    <div className="sectiondivs">
      <MoviesToWatch />
      <CurrentlyWatching />
      <FinishedWatching />
      </div>

    </div >
  
  );
}

export default App;
