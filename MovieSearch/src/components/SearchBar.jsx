import React, { useState } from 'react'
import "./SearchBar.css";

export const SearchBar = () => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
    
    fetch("https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=b5609ae1")
    .then(response => response.json())
    .then(json => {

        console.log(json)
    });
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
    }


    return <div className="input-wrapper">

        <input
            placeholder="Type to search..."

            value={input}
            onChange={(e) => handleChange(e.target.value)}
        />
    </div>;

}