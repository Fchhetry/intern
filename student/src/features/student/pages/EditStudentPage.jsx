import React, { useState, useEffect } from 'react';
import StudentForm from '../../viewModules/CreateEditStudentFormView';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateStudent } from '../../store/StudentSlice';
import { Container, Typography, Button } from '@mui/material';

export default function EditStudentPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (existingStudent) {
      setForm({
        fname: existingStudent.fname,
        lname: existingStudent.lname,
        email: existingStudent.email,
        gender: existingStudent.gender,
        phone: existingStudent.phone,
      });
    }
  }, [existingStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      id: Number(id),
      ...form,
    };
    dispatch(updateStudent(student));
    navigate('/');
  };

  if (!existingStudent) {
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
    <StudentForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isEditMode={true}
    />
  );
}
