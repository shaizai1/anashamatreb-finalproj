import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function FinishedWatching () {
    return(
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '90vh', width: '40vh' }} >
                    <h3> Finished Watching </h3>
                    <p>Movie 1</p>
                    <p>Movie 2</p>
                    <p>Movie 3</p>
                </Box>
        </Container>
    </React.Fragment>
            
        </div>
    )
}

export default FinishedWatching;
