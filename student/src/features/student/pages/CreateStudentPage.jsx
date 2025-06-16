import React, { useState } from 'react';
import StudentForm from '../../viewModules/CreateEditStudentFormView';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../../store/studentSlice';

export default function CreateStudentPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    gender: '',
    phone: '',
  });

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
      id: Date.now(),
      fname,
      lname,
      email,
      gender,
      phone,
    };

    dispatch(addStudent(student));
    navigate('/');
  };

  return (
    <StudentForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isEditMode={false}
    />
  );
}
