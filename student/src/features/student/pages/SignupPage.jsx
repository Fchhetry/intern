import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSignup} noValidate>
          <Stack spacing={2}>
            <TextField label="Full Name" name="name" fullWidth required />
            <TextField label="Email" name="email" fullWidth required />
            <TextField label="Password" name="password" type="password" fullWidth required />
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
            <Button
              onClick={() => navigate("/login")}
              variant="text"
              sx={{ textTransform: "none" }}
            >
              Already have an account? Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
