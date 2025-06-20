// LoginPage.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box, TextField } from "@mui/material";

export default function LoginPage() {
  const navigate = useNavigate();

  // If already logged in, redirect to dashboard
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = () => {
    // In real case, add validation here
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <Box sx={{ width: 300, mx: "auto", mt: 10 }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
}
