
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import './Home.css';

const Contact = () => {
    return (
        <div style={{
            paddingTop: '200px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center'
        }}>
            <Card sx={{ minWidth: 275 }}><CardContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            label="Size"
                            id="outlined-size-small"
                            defaultValue="Small"
                            size="small"
                        />
                        <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
                    </div>
                    <div>
                        <TextField
                            label="Size"
                            id="filled-size-small"
                            defaultValue="Small"
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            label="Size"
                            id="filled-size-normal"
                            defaultValue="Normal"
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Size"
                            id="standard-size-small"
                            defaultValue="Small"
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            label="Size"
                            id="standard-size-normal"
                            defaultValue="Normal"
                            variant="standard"
                        />
                    </div>
                </Box>

            </CardContent>
            </Card >
        </div>
    )
}

export default Contact