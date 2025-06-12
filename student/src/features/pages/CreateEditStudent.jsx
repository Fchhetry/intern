import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  Box
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addStudent, updateStudent } from '../../store/StudentSlice';

export default function CreateEditStudent() {
  const { id } = useParams(); // if id exists, it's edit mode
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);
  const existingStudent = useSelector(state =>
    state.students.list.find(s => s.id === Number(id))
  );

  const [form, setForm] = useState({
    name: '',
    email: '',
    gender: '',
    phone: '',
  });

  useEffect(() => {
    if (isEditMode && existingStudent) {
      setForm({
        name: existingStudent.name,
        email: existingStudent.email,
        gender: existingStudent.gender,
        phone: existingStudent.phone,
      });
    }
  }, [isEditMode, existingStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.gender || !form.phone) {
      alert('Please fill all fields');
      return;
    }

    if (isEditMode) {
      dispatch(updateStudent({ ...form, id: Number(id) }));
    } else {
      dispatch(addStudent({ ...form, id: Date.now() }));
    }

    navigate('/');
  };

  // If editing and student is not found
  if (isEditMode && !existingStudent) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" color="error" align="center">
          Student not found.
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Back to List
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, width: '50%', mx: 'auto' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#ffffff',
          backgroundColor: '#1976d2',
          padding: 1,
          marginBottom: 3,
        }}
      >
        {isEditMode ? 'Edit Student' : 'Create Student'}
      </Typography>

      <Card>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              size="small"
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              size="small"
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              size="small"
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              size="small"
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button type="submit" variant="contained">
                {isEditMode ? 'Update' : 'Submit'}
              </Button>
              <Button variant="outlined" onClick={() => navigate('/')}>
                Cancel
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
