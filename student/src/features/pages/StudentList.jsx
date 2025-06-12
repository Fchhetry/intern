import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper
} from '@mui/material';
import { useSelector } from 'react-redux';

export default function StudentList() {
  const students = useSelector((state) => state.students.list);

  return (
    <Container sx={{ mt: 4, mb: 4}}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', color: '#ffffff',backgroundColor: '#1976d2', padding: 1,margin: 0,marginBottom: 3 }} >
        Student List
      </Typography>

      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Gender</strong></TableCell>
                  <TableCell><strong>Phone</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.gender}</TableCell>
                    <TableCell>{student.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
);
}