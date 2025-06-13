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

// id is component that comes form URL parameters via React Router's useParams()
export default function CreateEditStudent() {
  const { id } = useParams(); // if id exists, it's edit mode 
  const dispatch = useDispatch(); // redux actions
  const navigate = useNavigate(); // redirect to another route

  const isEditMode = Boolean(id); // if true student is retrieved from redux using id
  const existingStudent = useSelector(state =>
    state.students.list.find(s => s.id === Number(id))
  );

  const [form, setForm] = useState({
    fname: '', // First name input
    lname: '', // Last name input
    email: '',
    gender: '',
    phone: '',
  });

  useEffect(() => {
    // component load bhayeasi existing form lai prefill garxa
    if (isEditMode && existingStudent) {
      const [first = '', last = ''] = existingStudent.name.split(' '); // name split into fname, lname
      setForm({
        fname: first,
        lname: last,
        email: existingStudent.email,
        gender: existingStudent.gender,
        phone: existingStudent.phone,
      });
    }
  }, [isEditMode, existingStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // handler for all fields using name
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents reload
    const { fname, lname, email, gender, phone } = form;

    if (!fname || !lname || !email || !gender || !phone) {
      alert('Please fill all fields'); // fill all fields
      return;
    }

    const student = {
      name: `${fname} ${lname}`, // combine fname and lname into single name
      email,
      gender,
      phone,
    };

    if (isEditMode) {
      dispatch(updateStudent({ ...student, id: Number(id) })); // for editing
    } else {
      dispatch(addStudent({ ...student, id: Date.now() })); // new entries
    }

    navigate('/'); // redirect to student list
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
              label="First Name"
              name="fname"
              value={form.fname}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              size="small"
              label="Last Name"
              name="lname"
              value={form.lname}
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
