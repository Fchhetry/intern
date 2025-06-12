import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, name: 'Jon Snow', email: 'jon@example.com', gender: 'Male', phone: '1234567890' },
    { id: 2, name: 'Hridaya Sharma', email: 'hridaya@example.com', gender: 'Male', phone: '984989396' },
    { id: 3, name: 'Jacob Smith', email: 'jacob@example.com', gender: 'Male', phone: '9876543210' },
    { id: 4, name: 'Aarav Sharma', email: 'aarav@example.com', gender: 'Male', phone: '9123456780' },
    { id: 5, name: 'Amahle Ndlovu', email: 'amahle@example.com', gender: 'Female', phone: '9823456781' },
    { id: 6, name: 'Sita Rana', email: 'sita@example.com', gender: 'Female', phone: '9841234567' },
    { id: 7, name: 'Kabir Mehta', email: 'kabir@example.com', gender: 'Male', phone: '9898765432' },
    { id: 8, name: 'Kwame Mensah', email: 'kwame@example.com', gender: 'Male', phone: '9812345678' },
    { id: 9, name: 'Laxmi Gurung', email: 'laxmi@example.com', gender: 'Female', phone: '9801122334' },
    { id: 10, name: 'Charlie Jackson', email: 'charlie@example.com', gender: 'Male', phone: '5551234567' },
    { id: 11, name: 'Thabo Mokoena', email: 'thabo@example.com', gender: 'Male', phone: '9876543210' },
    { id: 12, name: 'Priya Verma', email: 'priya@example.com', gender: 'Female', phone: '9911223344' },
    { id: 13, name: 'Anish Tamang', email: 'anish@example.com', gender: 'Male', phone: '9845098765' },
    { id: 14, name: 'Zanele Dlamini', email: 'zanele@example.com', gender: 'Female', phone: '9723456789' },
    { id: 15, name: 'Diana Marie', email: 'diana@example.com', gender: 'Female', phone: '2223334444' },
  ]
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
 
});

export default studentSlice.reducer;