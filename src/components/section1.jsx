import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

// import { SearchBar } from './SearchBar';

function MoviesToWatch() {
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

                    </CardContent>
                </Card>
            </React.Fragment>

        </div>
    )
}

export default MoviesToWatch;