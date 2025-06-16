import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box
} from '@mui/material';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import MenuItem from '@mui/material/MenuItem';
// import { useDispatch, useSelector } from 'react-redux';
 import { useNavigate, useParams } from 'react-router-dom';
// import { addStudent, updateStudent } from '../../store/StudentSlice';

// id is component that comes form URL parameters via React Router's useParams()
// export default function CreateEditStudent() {
//   const { id } = useParams(); // if id exists, it's edit mode 
//   const dispatch = useDispatch(); // redux actions
   const navigate = useNavigate(); // redirect to another route

//   const isEditMode = Boolean(id); // if true student is retrieved from redux using id
//   const existingStudent = useSelector(state =>
//     state.students.list.find(s => s.id === Number(id))
//   );

//   const [form, setForm] = useState({
//     fname: '', // First name input
//     lname: '', // Last name input
//     email: '',
//     gender: '',
//     phone: '',
//   });

//   useEffect(() => {
//     // component load bhayeasi existing form lai prefill garxa
//     if (isEditMode && existingStudent) {
//      setForm({
//   fname: existingStudent.fname || '',
//   lname: existingStudent.lname || '',
//   email: existingStudent.email || '',
//   gender: existingStudent.gender || '',
//   phone: existingStudent.phone || '',
// });
//     }
//   }, [isEditMode, existingStudent]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value }); // handler for all fields using name
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevents reload
//     const { fname, lname, email, gender, phone } = form;

//     if (!fname || !lname || !email || !gender || !phone) {
//       alert('Please fill all fields'); // fill all fields
//       return;
//     }

//     const student = {
//       id: isEditMode ? Number(id) : Date.now(),
//       fname,
//       lname,
//       email,
//       gender,
//       phone,
//     };

//     if (isEditMode) {
//       dispatch(updateStudent({ ...student, id: Number(id) })); // for editing
//     } else {
//       dispatch(addStudent({ ...student, id: Date.now() })); // new entries
//     }

//     navigate('/'); // redirect to student list
//   };

//   // If editing and student is not found
//   if (isEditMode && !existingStudent) {
//     return (
//       <Container sx={{ mt: 4 }}>
//         <Typography variant="h6" color="error" align="center">
//           Student not found.
//         </Typography>
//         <Button variant="contained" onClick={() => navigate('/')}>
//           Back to List
//         </Button>
//       </Container>
//     );
//   }
export default function StudentForm({ form, handleChange, handleSubmit, isEditMode }) {
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
              validators={['required', 'isEmail']}
              errorMessages={['Email is required', 'Email is not valid']}
            />
            <TextValidator
              select
              fullWidth
              size="small"
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['Gender is required']}
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
              onChange={handleChange}
              validators={['required', 'matchRegexp:^\\d{10}$']}
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