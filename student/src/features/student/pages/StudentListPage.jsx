import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteStudent } from "../../../store/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StudentCard from "../components/StudentCard";

export default function StudentListPage() {
  const students = useSelector((state) => state.students.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const accountMenuOpen = Boolean(accountAnchorEl);

  const handleMenuOpen = (event, studentId) => {
    setAnchorEl(event.currentTarget);
    setSelectedStudentId(studentId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedStudentId(null);
  };

  const handleAccountMenuClose = () => {
    setAccountAnchorEl(null);
    setSelectedStudentId(null);
  };

  const handleDeleteStudent = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirm) {
      dispatch(deleteStudent(id));
    }
    handleMenuClose();
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <button
          onClick={() => navigate("/create")}
          style={{
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add Student
        </button>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        {students.length > 0 ? (
          students.map((student) => (
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <StudentCard
                student={student}
                onAvatarClick={(e, id) => {
                  setAccountAnchorEl(e.currentTarget);
                  setSelectedStudentId(id);
                }}
                accountAnchorEl={accountAnchorEl}
                accountMenuOpen={
                  accountMenuOpen && selectedStudentId === student.id
                }
                onAccountMenuClose={handleAccountMenuClose}
                selectedStudentId={selectedStudentId}
                onMoreMenuClick={handleMenuOpen}
                sx={{ height: "100%" }}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              No students available.
            </Typography>
          </Grid>
        )}
      </Grid>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{ sx: { maxHeight: 200, width: "200px" } }}
      >
        <MenuItem
          onClick={() => {
            navigate(`/edit/${selectedStudentId}`);
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <EditIcon fontSize="small" sx={{ color: "#1976d2" }} />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleDeleteStudent(selectedStudentId)}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" sx={{ color: "#d32f2f" }} />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
}
