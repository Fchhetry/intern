import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateEditStudent from '../student/CreateEditStudent';
import { updateStudent } from '../../../store/StudentSlice';

export default function EditStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (student) => {
    dispatch(updateStudent(student));
    navigate('/');
  };

  return <CreateEditStudent onSubmit={handleSubmit} />;
}