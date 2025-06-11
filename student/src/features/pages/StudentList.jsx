import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container
} from '@mui/material';
import { useSelector } from 'react-redux';

export default function StudentList() {
  const students = useSelector((state) => state.students.list);

  return (
    <Card>
      <Container sx={{ marginTop: 4, marginBottom: 4, backgroundColor: '#ececf0' }}>
        <Typography 
          variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#ffffff', backgroundColor: '#1976d2', padding: 2,margin: 0, marginBottom: 3}}>
          Student List
        </Typography>
        
        <Grid container spacing={2}>
          {students.map((student) => (
            <Grid item xs={4} key={student.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6"sx={{ textAlign: 'center', color: 'primary.main'}}>
                    {student.name}</Typography>
                  <Typography color="text.secondary">Email: {student.email} </Typography>
                  <Typography color="text.secondary">Gender: {student.gender}</Typography>
                  <Typography color="text.secondary">Phone: {student.phone}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Card>
  );
}