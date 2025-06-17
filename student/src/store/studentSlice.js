import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, fname: 'Jon', lname:'Snow', email: 'jon@example.com', gender: 'Male', phone: '1234567890' , bio: 'Hi, I am a Student'},
    { id: 2, fname: 'Hridaya',lname: 'Sharma', email: 'hridaya@example.com', gender: 'Male', phone: '984989396' , bio: 'Hi, I am a Student' },
    { id: 3, fname: 'Jacob', lname: 'Smith', email: 'jacob@example.com', gender: 'Male', phone: '9876543210' , bio: 'Hi, I am a Student' },
    { id: 4, fname: 'Aarav', lname: 'Sharma', email: 'aarav@example.com', gender: 'Male', phone: '9123456780' , bio: 'Hi, I am a Student' },
    { id: 5, fname: 'Amahle', lname: 'Ndlovu', email: 'amahle@example.com', gender: 'Female', phone: '9823456781' , bio: 'Hi, I am a Student'},
    { id: 6, fname: 'Sita', lname: 'Rana', email: 'sita@example.com', gender: 'Female', phone: '9841234567' , bio: 'Hi, I am a Student'},
    { id: 7, fname: 'Kabir', lname: 'Mehta', email: 'kabir@example.com', gender: 'Male', phone: '9898765432' , bio: 'Hi, I am a Student' },
    { id: 8, fname: 'Kwame', lname:'Mensah', email: 'kwame@example.com', gender: 'Male', phone: '9812345678' , bio: 'Hi, I am a Student' },
    { id: 9, fname: 'Laxmi', lname: 'Gurung', email: 'laxmi@example.com', gender: 'Female', phone: '9801122334' , bio: 'Hi, I am a Student' },
    { id: 10, fname: 'Charlie', lname: 'Jackson', email: 'charlie@example.com', gender: 'Male', phone: '5551234567' , bio: 'Hi, I am a Student' },
    { id: 11, fname: 'Thabo', lname: 'Mokoena', email: 'thabo@example.com', gender: 'Male', phone: '9876543210' , bio: 'Hi, I am a Student' },
    { id: 12, fname: 'Priya', lname: 'Verma', email: 'priya@example.com', gender: 'Female', phone: '9911223344' , bio: 'Hi, I am a Student' },
    { id: 13, fname: 'Anish', lname: 'Tamang', email: 'anish@example.com', gender: 'Male', phone: '9845098765' , bio: 'Hi, I am a Student' },
    { id: 14, fname: 'Zanele', lname: 'Dlamini', email: 'zanele@example.com', gender: 'Female', phone: '9723456789' , bio: 'Hi, I am a Student' },
    { id: 15, fname: 'Diana', lname: 'Marie', email: 'diana@example.com', gender: 'Female', phone: '2223334444' , bio: 'Hi, I am a Student' },
  ]
};

const studentSlice = createSlice({
  name: 'students',
  initialState, 
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    },
    updateStudent: (state, action) => {
    const index = state.list.findIndex(s => s.id === action.payload.id);
    if (index !== -1) {
      state.list[index] = action.payload;
    }
  },
  deleteStudent: (state, action) => {
    state.list = state.list.filter(student => student.id !== action.payload);
  },
}
});


export const { addStudent ,updateStudent, deleteStudent} = studentSlice.actions;
export default studentSlice.reducer;