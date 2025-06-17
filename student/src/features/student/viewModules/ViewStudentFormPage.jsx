import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from '@mui/material';

export default function ViewStudentFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = useSelector((state) =>
    state.students.list.find((s) => s.id === parseInt(id))
  );

  if (!student) {
    return (
      <Container>
        <Typography variant="h5">Student not found</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Card sx={{ p: 3 ,backgroundColor: '#e3f2fd'  }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Name: {student.fname && student.lname
              ? `${student.fname} ${student.lname}`
              : student.name || 'Unnamed'}
          </Typography>
          <Typography>Email: {student.email}</Typography>
          <Typography>Phone: {student.phone}</Typography>
          <Typography>Gender: {student.gender}</Typography>
          <Typography>Bio: {student.bio}</Typography>
        </CardContent>
        <Box mt={2}>
          <Button variant="contained"  onClick={() => navigate(-1) }>
            Back
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
