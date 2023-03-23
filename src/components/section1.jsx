import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

// import { SearchBar } from './SearchBar';

function MoviesToWatch({characters,setCharacters}) {
const [movieList, setMovieList]=useState(characters.sections[0].movies)
useEffect(()=>{setMovieList(characters.sections[0].movies)},[characters.sections[0].movies])

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                            Movies to Watch
                            <p id='apiMovie'></p>
                        </Typography>


                    <Box sx={{ bgcolor: '#cfe8fc', color: '#020230', height: '90vh', width: '40vh' }} >
                        <h3> Movies to Watch </h3>
                        <Droppable droppableId={characters.sections[0].id}>
                            {(provided) => {
                                console.log(provided);
                            return <ul {...provided.droppableProps} ref={provided.innerRef}>

                                    { console.log(movieList)}

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

                        <p id='apiMovie'></p>

                    </Box>
                </CardContent>
            </Card>  
        </React.Fragment>

        </div>
    )
}

export default MoviesToWatch;