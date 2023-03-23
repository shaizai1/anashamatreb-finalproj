import React from 'react';
import "./SearchBar.css";
import { useState } from "react";




export const SearchBar = ({characters, setCharacters}) => {
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
                console.log(data)
            
                const id = data.imdbID.replace(/\D/g,'');
                console.log(data.imdbID)
                const newMovie = {
                    poster: data.Poster,
                    title: data.Title,
                    year: data.Year,
                    id: id
            

                }
                const newSection1 = {...characters};
                const oldMovies = characters.sections[0].movies
                newSection1.sections[0].movies = [newMovie, ...oldMovies]
                setCharacters(newSection1)
                
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
