import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  MenuItem,
} from "@mui/material";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";

export default function CreateEditStudentFormView({
  onSubmit,
  isEditMode,
  student,
}) {
  //create a state variable  named form that holds the values of all your form fields
  //setForm function will use to update any value inside this object
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    phone: "",
    bio: "",
  });
const genderOptions = ["Male", "Female", "Other"];
  useEffect(() => {
    //runs either isEditMode or student changes
    //edit mode ma data available huncha meaning prefilled huncha
    //|| '' ensures that if a field is missing in stuednt, it defaults to an empty string instead of undefined
    if (isEditMode && student) {
      setForm({
        fname: student.fname || "",
        lname: student.lname || "",
        email: student.email || "",
        gender: student.gender || "",
        phone: student.phone || "",
        bio: student.bio || "",
      });
    }
  }, [isEditMode, student]);

  const handleChange = (e) => {
    //e.target.name is the name of the fiels being changed and .value ma new value entered huncha
    //a new form object is created by copying the old one and updating just one field.

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //stops page from reloading on form submit
    const studentData = {
      id: isEditMode ? student.id : Date.now(),
      ...form,
    };
    onSubmit(studentData);
  };

  return (
    <Container sx={{ mt: 4, width: "50%", mx: "auto" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#ffffff",
          backgroundColor: "#1976d2",
          padding: 1,
          marginBottom: 3,
        }}
      >
        {isEditMode ? "Edit Student" : "Create Student"}
      </Typography>

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
                {genderOptions.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {gender}
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
                <Button
                  variant="outlined"
                  onClick={() => window.history.back()}
                >
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
