import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  marginTop: theme.spacing(4),
}));

export default function Axios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Axios Error:', error));
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
            Axios Data
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
