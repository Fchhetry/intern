// import React from "react";
// import {
//   Typography,
//   CircularProgress,
//   Container,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   Divider,
// } from "@mui/material";
// import { useQuery } from "@tanstack/react-query";

// // Fetch Functions 
// const fetchUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (!res.ok) throw new Error("Failed to fetch users");
//   return res.json();
// };

// const fetchPosts = async () => {  //Fetch data from JSONPlaceholder
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) throw new Error("Failed to fetch posts");
//   return res.json();
// };

// // React Component 
// export default function Fetch() {
//   // Users Query with polling, caching, focus refetching
//   const {
//     data: users,
//     isLoading: loadingUsers,
//     isError: errorUsers,
//     error: userError,
//     dataUpdatedAt: usersUpdatedAt,
//   } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
//     suspense: true,
//     refetchInterval: 10000, // Poll every 10s
//     refetchOnWindowFocus: true, // Refetch on tab focus
//     staleTime: 30000,
//     cacheTime: 300000,
//   });

//   //Posts Query running in parallel
//   const {
//     data: posts,
//     isLoading: loadingPosts,
//     isError: errorPosts,
//     error: postError,
//     dataUpdatedAt: postsUpdatedAt,
//   } = useQuery({
//     queryKey: ["posts"],
//     queryFn: fetchPosts,
//     refetchOnWindowFocus: true,//window refetching
//     suspense: true,
//     staleTime: 60000, //autocaching
//     cacheTime: 300000,//autocaching
//   });

//   // Handle loading and error states
//   if (loadingUsers || loadingPosts) return <CircularProgress sx={{ m: 4 }} />;
//   if (errorUsers || errorPosts)
//     return (
//       <Typography color="error" sx={{ mt: 2 }}>
//         Error: {userError?.message || postError?.message}
//       </Typography>
//     );

//   return (
//     <Container sx={{ mt: 4 }}>
//       {/* USERS SECTION */}
//       <Typography variant="h5" sx={{ mb: 2 }}>
//       Auto-Refetching Users (every 10s)
//       </Typography>
//       <Paper elevation={3} sx={{ maxWidth: 600, mx: "auto", p: 2, mb: 4 }}>
//         <List>
//           {users?.map((user) => (
//             <ListItem key={user.id} divider>
//               <ListItemText primary={user.name} secondary={user.email} />
//             </ListItem>
//           ))}
//         </List>
//         <Box sx={{ mt: 1 }}>
//           <Typography variant="body2" color="text.secondary">
//             Last updated: {new Date(usersUpdatedAt).toLocaleTimeString()}
//           </Typography>
//         </Box>
//       </Paper>

//       <Divider />

//       {/* POSTS SECTION */}
//       <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
//         Posts Fetched in Parallel
//       </Typography>
//       <Paper elevation={3} sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
//         <List>
//           {posts?.slice(0, 5).map((post) => (
//             <ListItem key={post.id} divider>
//               <ListItemText primary={post.title} secondary={post.body} />
//             </ListItem>
//           ))}
//         </List>
//         <Box sx={{ mt: 1 }}>
//           <Typography variant="body2" color="text.secondary">
//             Last updated: {new Date(postsUpdatedAt).toLocaleTimeString()}
//           </Typography>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

//using suspense

import React, { Suspense } from "react";
import {
  Typography,
  CircularProgress,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

// Fetch functions
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

// Users list component
function Users() {
  const { data: users, dataUpdatedAt } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    suspense: true,
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    staleTime: 30000,
    cacheTime: 300000,
  });

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: "auto", p: 2, mb: 4 }}>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} divider>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
        </Typography>
      </Box>
    </Paper>
  );
}

// Posts list component
function Posts() {
  const { data: posts, dataUpdatedAt } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    suspense: true,
    refetchOnWindowFocus: true,
    staleTime: 60000,
    cacheTime: 300000,
  });

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
      <List>
        {posts.slice(0, 5).map((post) => (
          <ListItem key={post.id} divider>
            <ListItemText primary={post.title} secondary={post.body} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
        </Typography>
      </Box>
    </Paper>
  );
}

// Parent component using Suspense
export default function Fetch() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Auto-Refetching Users (every 10s)
      </Typography>
      <Suspense fallback={<CircularProgress sx={{ m: 4 }} />}>
        <Users />
      </Suspense>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" sx={{ mb: 2 }}>
        Posts Fetched in Parallel
      </Typography>
      <Suspense fallback={<CircularProgress sx={{ m: 4 }} />}>
        <Posts />
      </Suspense>
    </Container>
  );
}
