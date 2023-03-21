import React from 'react';
import "./SearchBar.css";
import { useState } from "react";
// import { display } from '@mui/system';


let history = JSON.parse(localStorage.getItem("history")) || [];

export const SearchBar = () => {
    const [input, setInput] = useState([]);


    //create a state no empty string

    const fetchData = (value) => {

        //Store movie data from fetch and send to an element
        //How do I get what is rendered in console log to now render on the page?


        //-- Fetch Request Section --> Just added useEffect here:

        //data in the drop down will only need the set part. add it to movie to watch.
        //state at app.js and pass down to section 1 will need both set state and set value.



            fetch(`https://www.omdbapi.com/?t=${value}&y=&plot=short&apikey=b5609ae1`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.Poster, data.Title, data.Year)
                const newMovie = {
                    poster: data.Poster,
                    title: data.Title,
                    year: data.Year
                }
                history.push(newMovie);
                localStorage.setItem("history", JSON.stringify(history))

                function displayMovie(data) {
                    const movie = newMovie;
                    const movieDiv = document.getElementById("apiMovie"); 
                    // movie name
                    const movieName = document.createElement("h4");
                    movieName.innerHTML = movie.title;
                    movieDiv.appendChild(movieName);
                    // movie image
                    const movieImg = document.createElement("img");
                    movieImg.src = movie.poster;
                    movieDiv.appendChild(movieImg);
                    // movie year
                    const movieYear = document.createElement("h5")
                    movieYear.innerHTML = movie.year;
                    movieDiv.appendChild(movieYear)
                    
                }
                displayMovie(data)
                
            });

            
            
        //-- Fetch Request Section -->
            
    }

    const handleChange = (value) => {
        setInput(value)

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        fetchData(input)

    }



    return <div className="input-wrapper">
        <form onSubmit={handleSubmit}>

            <input
                placeholder="Type to search..."

                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </form>
    </div>;

};
export default SearchBar;
