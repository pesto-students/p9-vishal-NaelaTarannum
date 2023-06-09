import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Search from '@mui/icons-material/Search';
import './Home.css';




const Home = () => {
    const [urls, setUrls] = useState([]);
    const [value, setValue] = useState('');

    function isValidUrl(urlString) {
        try {
            return Boolean(new URL(urlString));
        }
        catch (e) {
            return false;
        }
    }
    function createListItems() {
        return urls.map((url) => {
            return (
                <ListItem>
                    <ListItemText
                        primary={url}
                    />
                </ListItem>
            );

        })
    }

    async function generateShortUrl() {
        if (isValidUrl(value)) {
            const url = `https://api.shrtco.de/v2/shorten?url=${value}`;
            const data = await fetch(url, { method: "POST" })
            const links = await data.json()
            const { full_short_link } = links.result;
            const newUrlList = [...urls];
            newUrlList.push(full_short_link);
            setUrls(newUrlList);
        } else {
            window.alert("Please enter a valid Url")
        }
        setValue("")

    }

    return (
        <div style={{
            paddingTop: '200px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center'
        }}>
            <Card sx={{ minWidth: 275, width: '50%' }}><CardContent>
                <Stack spacing={2} direction="row">
                    <InputBase
                        onChange={(e) => { setValue(e.target.value) }}
                        sx={{ ml: 1, flex: 1 }}
                        value={value}
                        placeholder="Enter a Valid URL"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={generateShortUrl}>
                        <Search />
                    </IconButton>
                </Stack>
                <br />
                <List sx={{ width: '100%' }}>
                    {createListItems()}
                </List>
            </CardContent>
            </Card>

        </div >
    )
}

export default Home;