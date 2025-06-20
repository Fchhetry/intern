import React from "react";
import {
  Card,
  CardContent,
  Box,
  Button,
  MenuItem,
} from "@mui/material";
import { ValidatorForm, TextValidator, SelectValidator } from "react-material-ui-form-validator";

export default function CreateEditStudentCard({ form, genderOptions, handleChange, handleSubmit, isEditMode }) {
  return (
    <Card>
      <CardContent>
        <ValidatorForm onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
  );
}
