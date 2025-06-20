import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import ViewStudentCard from '../components/ViewStudentCard';

export default function ViewStudentFormPage() {
  const { id } = useParams();
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
    <Container sx={{ mt: 4, width: '100%' }} maxWidth="sm">
      <ViewStudentCard student={student} />
    </Container>
  );
}
