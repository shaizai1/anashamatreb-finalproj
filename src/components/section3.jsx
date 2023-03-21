import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function FinishedWatching() {
    return (
        <div>
            <React.Fragment>
                <CssBaseline />

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                            Finished Watching
                        </Typography>
                        <p>Movie 1</p>
                        <p>Movie 2</p>
                        <p>Movie 3</p>
                    </CardContent>
                </Card>
            </React.Fragment>

        </div>
    )
}

export default FinishedWatching;


