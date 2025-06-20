import React from "react";
import {
  Typography,
  Grid,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Pagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StudentCard from "../components/StudentCard";
import { useStudentListHooks } from "../../../hooks/hook1";

export default function StudentListPage() {
  const {
    paginatedList,
    displayList,
    anchorEl,
    open,
    accountAnchorEl,
    accountMenuOpen,
    selectedStudentId,
    handleMenuOpen,
    handleMenuClose,
    handleAccountMenuClose,
    handleDeleteStudent,
    handleAdd,
    handleEdit,
    page, 
    totalPages,
    handlePageChange,
  } = useStudentListHooks();

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          color: "#1976d2",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          fontWeight: "bold",
        }}
      >
        Student List
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <button
          onClick={handleAdd}
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

      <Grid container spacing={4} alignItems="stretch" justifyContent="center">

         {paginatedList.length > 0 ? (
          paginatedList.map((student) => ( 
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <StudentCard
                student={student}
                onAvatarClick={(e) => {
                  handleAccountMenuClose(); // reset previous
                  setTimeout(() => handleMenuOpen(e, student.id), 0);
                }}
                accountAnchorEl={accountAnchorEl}
                accountMenuOpen={accountMenuOpen && selectedStudentId === student.id}
                onAccountMenuClose={handleAccountMenuClose}
                selectedStudentId={selectedStudentId}
                onMoreMenuClick={(e) => handleMenuOpen(e, student.id)}
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

      {totalPages > 1 && (
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{ sx: { maxHeight: 200, width: "200px" } }}
      >
        <MenuItem onClick={handleEdit}>
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

