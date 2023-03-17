import React from "react";

const movieQuote = require("popular-movie-quotes");

// let QuoteContainer = document.getElementsByClassName("quoteContainer")
let randomQuote = movieQuote.getRandomQuote();

console.log(randomQuote); // returns a random quote
console.log(movieQuote.getAll()); //returns an object with all available quotes.

function MovieQuote(){
    return(
        <div>
            <h4>Infinite Movie Wisdom:</h4>
            <p className="quoteContainer">{randomQuote} </p>
            <h5>Made with Love by: Ana, Shaiza, Rebecca and Matthew ❤️</h5>
            
        </div>
    )
}

export default MovieQuote;