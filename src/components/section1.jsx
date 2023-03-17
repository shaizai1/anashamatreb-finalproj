import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function MoviesToWatch(){
    return(
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box sx={{ bgcolor: '#cfe8fc', color: '#020230', height: '90vh', width: '40vh' }} >
                    <h3> Movies to Watch </h3>
                    <p>Movie 1</p>
                    <p>Movie 2</p>
                    <p>Movie 3</p>
                </Box>
        </Container>
    </React.Fragment>
            
        </div>
    )
}

export default MoviesToWatch;