import React, { useState } from 'react'
import "./SearchBar.css";

export const SearchBar = () => {
    const [input, setInput] = useState("");


    return <div className="input-wrapper">

        <input
            placeholder="Type to search..."

            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
    </div>;

}