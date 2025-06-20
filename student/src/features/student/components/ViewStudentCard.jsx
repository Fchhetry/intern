import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ViewStudentCard({ student }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
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
      <Box mt={1}>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Box>
    </Card>
  );
}
