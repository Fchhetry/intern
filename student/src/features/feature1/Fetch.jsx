import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ScrollablePaper = styled(Paper)(({ theme }) => ({
  maxHeight: 400,
  overflow: 'auto',
  position: 'relative',
}));

export default function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <ScrollablePaper>
      <List
        subheader={
          <ListSubheader
            component="div"
            sx={{
              position: 'sticky',
              top: 0,
              backgroundColor: (theme) => theme.palette.background.paper,
              zIndex: 1,
            }}
          >
            Posts
          </ListSubheader>
        }
      >
        {data.map((item) => (
          <ListItem key={item.id} divider>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </ScrollablePaper>
  );
}
