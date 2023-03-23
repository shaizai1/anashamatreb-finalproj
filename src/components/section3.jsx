import React, { useEffect, useState } from 'react';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function FinishedWatching({ characters, setCharacters }) {
    const [movieList, setMovieList] = useState(characters.sections[2].movies)
    useEffect(()=>{setMovieList(characters.sections[2].movies)},[characters.sections[2].movies])

function FinishedWatching() {

    return (
        <div>
            <React.Fragment>
                <CssBaseline />

                <Container fixed>
                    <Box sx={{ bgcolor: '#cfe8fc', color: '#020230', height: '90vh', width: '40vh' }} >
                        <h3> Finished Watching </h3>

                        <Droppable droppableId={characters.sections[2].id}>
                            {(provided) => {
                                return <ul {...provided.droppableProps} ref={provided.innerRef}>

                                    {movieList.map(({ poster, title, year, id }, index) => {
                                        return (

                                            <Draggable key={id} draggableId={id} index={index}>
                                                {(provided) => {
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

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                            Finished Watching
                        </Typography>
                    </CardContent>
                </Card>

            </React.Fragment>

        </div>
    )
}

export default FinishedWatching;


