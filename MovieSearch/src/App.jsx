import { useState } from 'react'

import './App.css'
import { SearchBar } from './components/SearchBar';

function App() {

  // const fetchData= (value) => {
  //   fetch("https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=b5609ae1")
  // }

  return <div className="App">Movie List<div className="search-bar-container">
    <SearchBar />
    <div>SearchResults</div>
    
    </div></div>;
  
}

export default App
