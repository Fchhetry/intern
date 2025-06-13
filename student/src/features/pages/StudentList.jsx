import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function StudentList() {
  const students = useSelector((state) => state.students.list);
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#ffffff',
          backgroundColor: '#1976d2',
          padding: 1,
          margin: 0,
          marginBottom: 3,
        }}
      >
        Student List
      </Typography>

      <Card>
        <CardContent>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/create')}
            sx={{ marginBottom: 2,  justifyContent: 'flex-end', display: 'flex'  }}
          >
            Add Student
          </Button>

          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Gender</strong></TableCell>
                  <TableCell><strong>Phone</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{`${student.fname} ${student.lname}`}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.gender}</TableCell>
                    <TableCell>{student.phone}</TableCell>
                    <TableCell>
                      <IconButton
                        color="secondary"
                        aria-label="edit student"
                        onClick={() => navigate(`/edit/${student.id}`)}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
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
