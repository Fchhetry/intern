import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, fname: 'Jon', lname:'Snow', email: 'jon@example.com', gender: 'Male', phone: '1234567890' , bio: ' I am a dedicated physician specializing in internal medicine, known for his compassionate care and commitment to patient wellness.'},
    { id: 2, fname: 'Hridaya',lname: 'Sharma', email: 'hridaya@example.com', gender: 'Male', phone: '984989396' , bio: ' I am a skilled software engineer passionate about building scalable tech solutions and advancing innovation in AI.' },
    { id: 3, fname: 'Jacob', lname: 'Smith', email: 'jacob@example.com', gender: 'Male', phone: '9876543210' , bio: ' I am a versatile actor celebrated for his powerful performances in both film and theater across a variety of genres.' },
    { id: 4, fname: 'Aarav', lname: 'Sharma', email: 'aarav@example.com', gender: 'Male', phone: '9123456780' , bio: 'A lifestyle vlogger who shares engaging travel, food, and daily life content with a growing global audience.' },
    { id: 5, fname: 'Amahle', lname: 'Ndlovu', email: 'amahle@example.com', gender: 'Female', phone: '9823456781' , bio: 'Passionate about global development, policy, and equity.I am involved in student government and Model UN activities.One day, I hope to influence education policy on a national level.'},
    { id: 6, fname: 'Sita', lname: 'Rana', email: 'sita@example.com', gender: 'Female', phone: '9841234567' , bio: 'An investigative journalist focused on uncovering truth and reporting stories that matter with clarity and impact.'},
    { id: 7, fname: 'Kabir', lname: 'Mehta', email: 'kabir@example.com', gender: 'Male', phone: '9898765432' , bio: 'Art is how I express emotion, identity, and culture.I work with mixed media, including digital illustration and watercolor.My dream is to open an art therapy studio for young people someday.' },
    { id: 8, fname: 'Kwame', lname:'Mensah', email: 'kwame@example.com', gender: 'Male', phone: '9812345678' , bio: 'Teaching is my passion, and I believe learning never ends.I aim to create classrooms that inspire creativity and critical thinking.Right now, I am developing interactive lessons for rural schools as part of my project.' },
    { id: 9, fname: 'Laxmi', lname: 'Gurung', email: 'laxmi@example.com', gender: 'Female', phone: '9801122334' , bio: 'Nature inspires me, and protecting it drives my academic choices.I am focused on climate change policy and renewable energy solutions.I also lead a student environmental club and organize campus clean-up events.' },
    { id: 10, fname: 'Charlie', lname: 'Jackson', email: 'charlie@example.com', gender: 'Male', phone: '5551234567' , bio: 'I am a future doctor passionate about healthcare access and community service.Studying anatomy and pathology fascinates me every day.Volunteering in health camps has deepened my resolve to serve underprivileged areas.' },
    { id: 11, fname: 'Thabo', lname: 'Mokoena', email: 'thabo@example.com', gender: 'Male', phone: '9876543210' , bio: 'I love designing solutions for real-world problems using mechanical concepts.Currently exploring renewable energy systems and sustainable design.CAD modeling, 3D printing, and robotics are my favorite parts of the field.' },
    { id: 12, fname: 'Priya', lname: 'Verma', email: 'priya@example.com', gender: 'Female', phone: '9911223344' , bio: 'Books have been my escape and inspiration since childhood.I am pursuing English Literature and working on a collection of short stories.I also run a book blog and moderate a local poetry club.' },
    { id: 13, fname: 'Anish', lname: 'Tamang', email: 'anish@example.com', gender: 'Male', phone: '9845098765' , bio: 'Fascinated by the human mind and behavioral science.I aspire to work in counseling and help people through mental health advocacy.In my free time, I volunteer at wellness workshops and read case studies.' },
    { id: 14, fname: 'Zanele', lname: 'Dlamini', email: 'zanele@example.com', gender: 'Female', phone: '9723456789' , bio: 'Focused on entrepreneurship, marketing, and financial strategies.I am driven by the idea of building businesses that make a real difference.Outside class, I enjoy networking events and pitching ideas in competitions.' },
    { id: 15, fname: 'Diana', lname: 'Marie', email: 'diana@example.com', gender: 'Female', phone: '2223334444' , bio: 'I am a tech enthusiast passionate about building intelligent systems and web applications.I love exploring AI, open-source projects, and learning new frameworks.Currently working on a smart attendance system for my university.' },
  ],
  searchQuery: '', 
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
  setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
}
});


export const { addStudent ,updateStudent, deleteStudent, setSearchQuery} = studentSlice.actions;
export default studentSlice.reducer;