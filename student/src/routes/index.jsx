import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentList from "../features/viewModules/StudentList";
import CreateEditStudent from "../features/viewModules/CreateEditStudentFormView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StudentList />} />
      <Route path="/create" element={<CreateEditStudent />} />
      <Route path="/edit/:id" element={<CreateEditStudent />} />
    </Routes>
  );
}
 