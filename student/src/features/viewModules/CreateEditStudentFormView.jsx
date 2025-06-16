import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addStudent, updateStudent } from '../../store/StudentSlice';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import MenuItem from '@mui/material/MenuItem';


export default function CreateEditStudent({ onSubmit }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);
  const existingStudent = useSelector(state =>
    state.students.list.find(s => s.id === Number(id))
  );

  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    gender: '',
    phone: '',
  });

  useEffect(() => {
    if (isEditMode && existingStudent) {
      setForm({
        fname: existingStudent.fname || '',
        lname: existingStudent.lname || '',
        email: existingStudent.email || '',
        gender: existingStudent.gender || '',
        phone: existingStudent.phone || '',
      });
    }
  }, [isEditMode, existingStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fname, lname, email, gender, phone } = form;

    if (!fname || !lname || !email || !gender || !phone) {
      alert('Please fill all fields');
      return;
    }

    const student = {
      id: isEditMode ? Number(id) : Date.now(),
      fname,
      lname,
      email,
      gender,
      phone,
    };

    if (onSubmit) {
      onSubmit(student, isEditMode);
    } else {
    
      if (isEditMode) {
        dispatch(updateStudent(student));
      } else {
        dispatch(addStudent(student));
      }
      navigate('/');
    }
  };

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
          <ValidatorForm onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

            <TextValidator
              fullWidth
              size="small"
              label="First Name"
              name="fname"
              value={form.fname}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['First name is required']}
            />
            <TextValidator
              fullWidth
              size="small"
              label="Last Name"
              name="lname"
              value={form.lname}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['Last name is required']}

            />
            <TextValidator
              fullWidth
              size="small"
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['Email is required']}
            />
            <TextValidator
              fullWidth
              size="small"
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              validators={['required', 'isEmail']}
              errorMessages={['Gender is required', 'Email is not valid']}
            >
              <MenuItem value="">Select Gender</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextValidator>
            
            <TextValidator
              fullWidth
              size="small"
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}validators={['required', 'matchRegexp:^\\d{10}$']}
              errorMessages={['Phone is required', 'Phone must be 10 digits']}
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
          </ValidatorForm>
        </CardContent>
      </Card>
    </Container>
  );
}