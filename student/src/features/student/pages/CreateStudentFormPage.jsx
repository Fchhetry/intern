import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateEditStudent from '../student/CreateEditStudent';
import { addStudent } from '../../../store/StudentSlice';

export default function CreateStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (student) => {
  
    dispatch(addStudent(student));
    navigate('/'); 
  };

  return <CreateEditStudent onSubmit={handleSubmit} />;
}