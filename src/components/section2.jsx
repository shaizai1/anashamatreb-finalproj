import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



function CurrentlyWatching() {
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '90vh', width: '40vh' }} >
                    <h3>Currently Watching</h3>
                    </Box>
                </Container>
            </React.Fragment>
            
        </div>
    )
}
export default CurrentlyWatching;