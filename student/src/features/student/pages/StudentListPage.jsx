import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteStudent from "./DeleteStudentFormPage";

export default function StudentListPage() {
  const students = useSelector((state) => state.students.list);
  const navigate = useNavigate();

  console.log(students);

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#ffffff",
          backgroundColor: "#1976d2",
          padding: 1,
          margin: 0,
          marginBottom: 3,
        }}
      >
        Student List
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/create")}
          sx={{ marginBottom: 2, justifyContent: "flex-end", display: "flex" }}
        >
          Add Student
        </Button>
      </Box>
      <Grid container spacing={3}>
        {students.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {student.fname && student.lname
                    ? `${student.fname} ${student.lname}`
                    : student.name || "Unnamed"}
                </Typography>
                <Typography variant="body2">
                  <strong>Email:</strong> {student.email}
                </Typography>
                <Typography variant="body2">
                  <strong>Gender:</strong> {student.gender}
                </Typography>
                <Typography variant="body2">
                  <strong>Phone:</strong> {student.phone}
                </Typography>

                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                >
                  <IconButton
                    color="secondary"
                    aria-label="edit student"
                    onClick={() => navigate(`/edit/${student.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <DeleteStudent id={student.id} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
