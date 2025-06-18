import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Typography,
   List, 
   ListItem, 
   ListItemText, 
   Container } from '@mui/material';

export default function Axios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Axios Error:', error));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Axios Data</Typography>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
