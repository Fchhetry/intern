import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

export default function StudentList() {
  const students = useSelector((state) => state.students.list);

  return (
    
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student List
      </Typography>
      <Grid container spacing={2}>
        {students.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{student.name}</Typography>
                <Typography color="text.secondary">Age: {student.age}</Typography>
                <Typography color="text.secondary">Grade: {student.grade}</Typography>
              </CardContent>
             </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
   
  );
}
