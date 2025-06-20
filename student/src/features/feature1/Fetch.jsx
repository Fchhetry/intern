// import React, { useEffect, useState } from "react";
// import { Typography, CircularProgress, Container } from "@mui/material";

// export default function Fetch() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Example API: You can replace this with your own API
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((json) => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <CircularProgress sx={{ m: 4 }} />;

//   return (
//     <Container>
//       <Typography variant="h5" sx={{ mb: 2 }}>
//         Fetched Data:
//       </Typography>
//       {data?.map((user) => (
//         <Typography key={user.id}>
//           {user.name} — {user.email}
//         </Typography>
//       ))}
//     </Container>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  Typography,
  CircularProgress,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Fetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress sx={{ m: 4 }} />;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Fetched Data:
      </Typography>

      <Paper elevation={3} sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <List>
          {data?.map((user) => (
            <ListItem key={user.id} divider>
              <ListItemText
                primary={user.name}
                secondary={user.email}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
