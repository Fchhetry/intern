import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { deleteStudent } from "../../../store/StudentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StudentCard from "../components/StudentCard";

export default function StudentListPage() {
  const students = useSelector((state) => state.students.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [drawerState, setDrawerState] = useState({ left: false });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const open = Boolean(anchorEl);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const accountMenuOpen = Boolean(accountAnchorEl);
  const [featuresAnchorEl, setFeaturesAnchorEl] = useState(null);
  const isFeaturesMenuOpen = Boolean(featuresAnchorEl);

  const featuresOptions = [
    { label: "Fetch", path: "/fetch" },
    { label: "Axios", path: "/axios" },
  ];

  const handleAccountMenuClose = () => setAccountAnchorEl(null);
  const handleFeaturesClick = (event) =>
    setFeaturesAnchorEl(event.currentTarget);
  const handleFeaturesClose = () => setFeaturesAnchorEl(null);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event?.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const handleMenuOpen = (event, studentId) => {
    setAnchorEl(event.currentTarget);
    setSelectedStudentId(studentId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedStudentId(null);
  };

  const handleDeleteStudent = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirm) dispatch(deleteStudent(id));
    handleMenuClose();
  };

  const drawerList = () => (
    <Box sx={{ width: 250, backgroundColor: "#e3f2fd" }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleFeaturesClick}>
            <ListItemText primary="Features" />
            <ArrowDropDownIcon />
          </ListItemButton>
        </ListItem>
      </List>
      <Menu
        anchorEl={featuresAnchorEl}
        open={isFeaturesMenuOpen}
        onClose={handleFeaturesClose}
      >
        {featuresOptions.map((option) => (
          <MenuItem
            key={option.path}
            onClick={() => {
              navigate(option.path);
              handleFeaturesClose();
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

  return (
    <Container
      maxWidth="xl"
      sx={{ mt: 4, mb: 4, backgroundColor: "rgb(221, 226, 232)" }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1976d2",
          px: 2,
          py: 2,
          mb: 4,
        }}
      >
        <Button
          onClick={toggleDrawer("left", true)}
          startIcon={<MenuIcon />}
          sx={{ color: "#ffffff" }}
        >
          Menu
        </Button>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          Student List
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/create")}
          sx={{
            backgroundColor: "#ffffff",
            color: "#1976d2",
            fontWeight: "bold",
          }}
        >
          Add Student
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={drawerState.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {drawerList()}
        </SwipeableDrawer>
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
          accountMenuOpen={accountMenuOpen && selectedStudentId === student.id}
          onAccountMenuClose={handleAccountMenuClose}
          selectedStudentId={selectedStudentId}
          onMoreMenuClick={handleMenuOpen}
          sx={{ height: '100%' }} 
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
        PaperProps={{
          sx: { maxHeight: 200, width: "200px" },
        }}
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
    </Container>
  );
}
