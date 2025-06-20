import React from "react";
import { Container, Typography } from "@mui/material";
import { useStudentForm } from "../../../hooks/hook1";
import CreateEditStudentCard from "../components/CreateEditStudentCard";

export default function CreateEditStudentFormView({ onSubmit, isEditMode, student }) {
  const { form, genderOptions, handleChange, handleSubmit } = useStudentForm({
    isEditMode,
    student,
    onSubmit,
  });

  return (
    <Container sx={{ mt: 4, width: "50%", mx: "auto" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", color: "#fff", backgroundColor: "#1976d2", padding: 1, mb: 3 }}
      >
        {isEditMode ? "Edit Student" : "Create Student"}
      </Typography>

      <CreateEditStudentCard
        form={form}
        genderOptions={genderOptions}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEditMode={isEditMode}
      />
    </Container>
  );
}
