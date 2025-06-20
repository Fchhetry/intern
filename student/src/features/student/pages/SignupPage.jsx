import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  Link
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../../hooks/hook1";

export default function SignupPage() {
  const { signupData, errors, handleChange, handleSignup } = useSignup();
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Sign Up
        </Typography>
        <form onSubmit={handleSignup} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              required
              value={signupData.email}
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
              value={signupData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              fullWidth
              required
              value={signupData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <Button type="submit" variant="contained" size="large">
              Sign Up
            </Button>
            <Typography variant="body2" align="center">
              Already have an account?{" "}
              <Link
                onClick={() => navigate("/")}
                underline="hover"
                sx={{ cursor: "pointer" }}
              >
                Login
              </Link>
            </Typography>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
