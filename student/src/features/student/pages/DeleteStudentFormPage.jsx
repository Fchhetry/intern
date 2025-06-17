import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../../store/StudentSlice";

export default function DeleteStudent({ id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id));
    }
  };

  return (
    <IconButton
      color="error"
      aria-label="delete student"
      onClick={handleDelete}
    >
      <DeleteIcon />
    </IconButton>
  );
}
