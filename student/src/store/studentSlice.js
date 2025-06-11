import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, name: 'Alice Johnson', age: 20, grade: 'A' },
    { id: 2, name: 'Bob Smith', age: 22, grade: 'B' },
    { id: 3, name: 'Charlie Brown', age: 21, grade: 'A+' },
  ],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
});

export default studentSlice.reducer;
