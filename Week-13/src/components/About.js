
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import './Home.css';

const About = () => {
    return (
        <div style={{
            paddingTop: '200px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center'
        }}>
            <Card sx={{ minWidth: 275, width: '50%' }}><CardContent>
                <Stack spacing={2} direction="row">

                    Shortly to shorted urls
                </Stack>
                <br />

            </CardContent>
            </Card >
        </div>
    )
}

export default About