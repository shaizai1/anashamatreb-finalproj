import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Droppable, Draggable } from '@hello-pangea/dnd';


function CurrentlyWatching({characters,setCharacters}) {
    console.log(characters)
    const [movieList, setMovieList]=useState(characters.sections[1].movies)
    useEffect(()=>{setMovieList(characters.sections[1].movies)},[characters.sections[1].movies])

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box sx={{ bgcolor: '#cfe8fc', color: '#020230', height: '90vh', width: '40vh' }} >
                        <h3>Currently Watching</h3>
                      
                        <Droppable droppableId= {characters.sections[1].id}>
                            {(provided) => {
                               return <ul {...provided.droppableProps} ref={provided.innerRef}>

                                    {movieList.map(({poster, title, year, id}, index) => {
                                        return (
        
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided)=>{
                                               return <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                        <div>
                                                            <p>
                                                                 {title}
                                                            </p>
                                                            <img src={poster}></img>

                                                        </div>
                                                </li>
                                            }}

                                
                                        </Draggable>
                                        )
        
                                    })}
                                </ul>
                            }}

                        </Droppable>
                    </Box>
                </Container>
            </React.Fragment>

        </div>
    )
}
export default CurrentlyWatching;