import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Paper
} from "@mui/material";
import { useLogin } from "../../../hooks/hook1";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { loginData, errors, handleChange, handleLogin } = useLogin();
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            label="Email"
            name="email"
            fullWidth
            required
            value={loginData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            required
            value={loginData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button type="submit" variant="contained" fullWidth size="large">
            Login
          </Button>
          <Typography variant="body2" align="center">
            Don't have an account?{" "}
            <Link
              onClick={() => navigate("/signup")}
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
 
