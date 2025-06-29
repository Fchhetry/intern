import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

import StudentListPage from "../features/student/pages/StudentListPage";
import CreateStudentPage from "../features/student/pages/CreateStudentPage";
import EditStudentPage from "../features/student/pages/EditStudentPage";
import ViewStudentFormPage from "../features/student/viewModules/ViewStudentFormPage";
import Fetch from "../features/feature1/Fetch";
import Axios from "../features/feature1/Axios";
import DashboardPage from "../features/student/pages/DashboardPage";
import SignupPage from "../features/student/pages/SignupPage";
import LoginPage from "../features/student/pages/LoginPage";

// Reusable Protected Route wrapper
function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route
            index
            element={
              <Typography variant="h4" sx={{ p: 2 }}>
                Welcome to your Dashboard!
              </Typography>
            }
          />
          <Route path="studentlist" element={<StudentListPage />} />
          <Route path="create" element={<CreateStudentPage />} />
          <Route path="edit/:id" element={<EditStudentPage />} />
          <Route path="view/:id" element={<ViewStudentFormPage />} />
          <Route path="fetch" element={<Fetch />} />
          <Route path="axios" element={<Axios />} />
        </Route>
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
