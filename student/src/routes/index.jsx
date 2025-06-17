import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentListPage from "../features/student/pages/StudentListPage";
import CreateStudentPage from "../features/student/pages/CreateStudentPage";
import EditStudentPage from "../features/student/pages/EditStudentPage";
import Fetch from '../features/feature1/Fetch';
import Axios from '../features/feature1/Axios';
import ViewStudentFormPage from "../features/student/viewModules/ViewStudentFormPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StudentListPage />} />
      <Route path="/create" element={<CreateStudentPage />} />
      <Route path="/edit/:id" element={<EditStudentPage />} />
      <Route path="/view/:id" element={<ViewStudentFormPage />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/axios" element={<Axios />} />
    </Routes>
  );
}
