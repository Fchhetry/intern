import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentListPage from "../features/student/pages/StudentListPage";
import CreateStudentPage from "../features/student/pages/CreateStudentPage";
import EditStudentPage from "../features/student/pages/EditStudentPage";
import ViewStudentFormPage from "../features/student/viewModules/ViewStudentFormPage";
import Fetch from "../features/feature1/Fetch";
import Axios from "../features/feature1/Axios";
import DashboardPage from "../features/student/pages/DashboardPage";

export default function AppRoutes() {
  return (
    <Routes>
     <Route path="/" element={<DashboardPage />}>
      <Route index element={<StudentListPage />} />  
      <Route path="create" element={<CreateStudentPage />} />
      <Route path="edit/:id" element={<EditStudentPage />} />
      <Route path="view/:id" element={<ViewStudentFormPage />} />
      <Route path="fetch" element={<Fetch />} />
      <Route path="axios" element={<Axios />} />
    </Route>
    </Routes>
  );
}
