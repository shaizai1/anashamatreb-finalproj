import React, { useState } from 'react'
import "./SearchBar.css";

export const SearchBar = () => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        // fetch("https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=b5609ae1")
        
        
        fetch(`https://www.omdbapi.com/?t=${value}&y=&plot=short&apikey=b5609ae1`)
        .then(resp =>resp.json())
        .then(data =>console.log(data));
        
    }

    // fetch ("http://www.omdbapi.com/?apikey=b5609ae1")

// need a results filter
// const results = json.filter((data) => {
//     return ()
//         value data
//     console.log(results);
// }
    // )

//.then notation here:
//     .then(response => response.json())
//     .then(json => {

//         console.log(json)
//     });
//   }

  const handleChange = (value) => {
    setInput(value)
    
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        fetchData(input)
        
        }

    return <div className="input-wrapper">
        <form onSubmit ={handleSubmit}>
        
        <input
            placeholder="Type to search..."
            
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            />
            </form>
    </div>;

}