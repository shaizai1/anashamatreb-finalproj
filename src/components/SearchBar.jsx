
import React, { useState, useEffect } from 'react'
import "./SearchBar.css";

let history = JSON.parse(localStorage.getItem("history")) || [];

export const SearchBar = () => {
    const [input, setInput] = useState([]);


    //create a state no empty string

    const fetchData = (value) => {

        //Store movie data from fetch and send to an element
        //How do I get what is rendered in console log to now render on the page?


        //-- Fetch Request Section --> Just added useEffect here:
       

        //data in the drop down will only need the setpart. add it to movie to watch.
        //state at app.js and pass down to section 1 will need both setstate and set value.



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

}
