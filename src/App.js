import React, { state, useState, setState, newState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import CurrentlyWatching from './components/section2';
import FinishedWatching from './components/section3';
import MoviesToWatch from './components/section1';
import MovieQuote from './components/MovieQuote';
import Jumbotron from './components/jumbotron'

import { DragDropContext } from '@hello-pangea/dnd';

function App() {
  //section 1, need 2 more
  const [characters, setCharacters] = useState(
    {
      sections: [
        {
          id: '0', movies: []
        }, {
          id: '1',
          movies: []
        }, {
          id: '2',
          movies: []
        },
      ]
    });

  // const [characters2, setCharacters2] = useState([]);

  // const [characters3, setCharacters3] = useState([]);


  function handleOnDragEnd(result) {

    const { source, destination } = result;

    //dropped outside the list

    if (!destination) {
      return;
    }

    //To make draggable and droppable into other containers
    const sInd = source.droppableId;
    console.log(sInd);
    const dInd = destination.droppableId;
    console.log(dInd);
    const newCharacters = { ...characters }



    if (sInd === dInd) {
      const sectionId = characters.sections.findIndex(section => section.id === sInd);
      console.log(sectionId);
      const movieItems = reorder(sectionId, source.index, destination.index);
      newCharacters.sections[sectionId].movies = movieItems;
      setCharacters(newCharacters);

    } else {
      const sourceSectionId = characters.sections.findIndex(section => section.id === sInd);
      const destSectionId = characters.sections.findIndex(section => section.id === dInd);
      const result = move(sourceSectionId, destSectionId, source, destination);
      const newCharacters = { ...characters };
      newCharacters.sections[sourceSectionId].movies = result.source;
      newCharacters.sections[destSectionId].movies = result.dest;


      setCharacters(newCharacters);
    }
  }

  // reorder the drag and drop
  const reorder = (listId, startIndex, endIndex) => {
    const result = [...characters.sections[listId].movies];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  //moves item from list to another

  const move = (sourceX, destination, droppableSource, droppableDestination) => {
    const sourceClone = [...characters.sections[sourceX].movies];
    const destClone = [...characters.sections[destination].movies];
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {
      source: sourceClone,
      dest: destClone
    };


    return result;

  };


  return (

    <div className="App">

<div className='title'>

        <h1 className='title'>MovieMarathoner</h1>

      </div>
      <div className="Jumbotron">

        <Jumbotron />

      </div>

      

      <div className="search-bar-container">

        <SearchBar characters={characters} setCharacters={setCharacters} />
      
      </div>

      <div className="sectiondivs">
        
        <DragDropContext onDragEnd={handleOnDragEnd}>

          <MoviesToWatch characters={characters} setCharacters={setCharacters} />
          <CurrentlyWatching characters={characters} setCharacters={setCharacters} />
          <FinishedWatching characters={characters} setCharacters={setCharacters} />

        </DragDropContext>

      </div>

      <footer className='App-footer'>

        <MovieQuote />

      </footer>

    </div>
  )

}

export default App;

document.body.style = 'background: black;';