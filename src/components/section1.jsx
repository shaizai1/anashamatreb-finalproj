import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// import { SearchBar } from './SearchBar';





function MoviesToWatch(){
    return(
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>

                    <Box sx={{ bgcolor: '#cfe8fc', color: '#020230', height: '90vh', width: '40vh' }} >
                    <h3> Movies to Watch </h3>
                    
                    <p id='apiMovie'></p>
                    
                </Box>
        </Container>
    </React.Fragment>
            
        </div>
    )
}

export default MoviesToWatch;