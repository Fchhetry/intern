import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  MenuItem,
} from "@mui/material";
import { ValidatorForm, TextValidator, SelectValidator } from "react-material-ui-form-validator";
import { useStudentForm } from "../../../hooks/hook1";

export default function CreateEditStudentFormView({ onSubmit, isEditMode, student }) {
  const { form, genderOptions, handleChange, handleSubmit } = useStudentForm({
    isEditMode,
    student,
    onSubmit,
  });

  return (
    <Container sx={{ mt: 4, width: "50%", mx: "auto" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", color: "#fff", backgroundColor: "#1976d2", padding: 1, mb: 3 }}
      >
        {isEditMode ? "Edit Student" : "Create Student"}
      </Typography>

      <Card>
        <CardContent>
          <ValidatorForm onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* First Name */}
              <TextValidator
                label="First Name"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["First name is required"]}
                fullWidth
                size="small"
              />

              {/* Last Name */}
              <TextValidator
                label="Last Name"
                name="lname"
                value={form.lname}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["Last name is required"]}
                fullWidth
                size="small"
              />

              {/* Email */}
              <TextValidator
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                validators={["required", "isEmail"]}
                errorMessages={["Email is required", "Email is not valid"]}
                fullWidth
                size="small"
              />

              {/* Gender */}
              <SelectValidator
                label="Gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["Gender is required"]}
                fullWidth
                size="small"
              >
                <MenuItem value="">Select Gender</MenuItem>
                {genderOptions.map((g) => (
                  <MenuItem key={g} value={g}>
                    {g}
                  </MenuItem>
                ))}
              </SelectValidator>

              {/* Phone */}
              <TextValidator
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                validators={["required", "matchRegexp:^\\d{10}$"]}
                errorMessages={["Phone is required", "Phone must be 10 digits"]}
                fullWidth
                size="small"
              />

              {/* Bio */}
              <TextValidator
                label="Bio"
                name="bio"
                value={form.bio}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["Bio is required"]}
                fullWidth
                size="small"
              />

              {/* Buttons */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button type="submit" variant="contained">
                  {isEditMode ? "Update" : "Submit"}
                </Button>
                <Button variant="outlined" onClick={() => window.history.back()}>
                  Cancel
                </Button>
              </Box>
            </Box>
          </ValidatorForm>
        </CardContent>
      </Card>
    </Container>
  );
}
