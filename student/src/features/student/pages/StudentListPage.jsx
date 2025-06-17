import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Menu,
  MenuItem,
  ListItemIcon
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteStudent } from '../../../store/StudentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function StudentList() {
  const students = useSelector((state) => state.students.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [drawerState, setDrawerState] = useState({ left: false });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const open = Boolean(anchorEl);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const accountMenuOpen = Boolean(accountAnchorEl);

  const handleAccountMenuOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
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
  const confirm = window.confirm("Are you sure you want to delete this student?");
  if (confirm) {
    dispatch(deleteStudent(id));
  }
  handleMenuClose();
};

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      {/* Drawer */}
      <Box sx={{ mb: 2 }}>
        <Button onClick={toggleDrawer('left', true)} startIcon={<MenuIcon />}>
          Menu
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={drawerState.left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#ffffff',
          backgroundColor: '#1976d2',
          padding: 1,
          marginBottom: 3,
        }}
      >
        Student List
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/create')}
        >
          Add Student
        </Button>
      </Box>

      <Grid container spacing={3}>
        {students.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card sx={{ 
              height: '100%',
              cursor: 'pointer',
              transition: '0.3s',
              backgroundColor: '#f5f5f5', // default card color
              '&:hover': {
                backgroundColor: '#e3f2fd', // light blue on hover
                boxShadow: 6,
              },
            }}
            > 
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {/* Left: Avatar with Account Menu */}
                  <Box>
                    <Tooltip title="Additional Info">
                      <IconButton
                        onClick={(e) => {
                          setAccountAnchorEl(e.currentTarget);
                          setSelectedStudentId(student.id);
                        }}
                        size="small"
                      >
                        <Avatar sx={{ width: 40, height: 40 }}>
                          {student.fname ? student.fname.charAt(0).toUpperCase() : 'U'}
                        </Avatar>
                      </IconButton>
                    </Tooltip>

                    {/* Account Menu */}
                    <Menu
                      anchorEl={accountAnchorEl}
                      id={`account-menu-${student.id}`}
                      open={accountMenuOpen && selectedStudentId === student.id}
                      onClose={handleAccountMenuClose}
                      onClick={handleAccountMenuClose}
                      PaperProps={{
                        elevation: 3,
                        sx: {
                          overflow: 'visible',
                          mt: 1.5,
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 20,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    >
                    <MenuItem sx={{ pointerEvents: 'none' }}>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                        <strong>Gender:</strong> {student.gender}
                      </Typography>
                    </MenuItem>
                    <MenuItem sx={{ pointerEvents: 'none' }}>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                        <strong>Phone:</strong> {student.phone}
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>

                  {/* Right: More Menu (Edit/Delete) */}
                  <IconButton
                    aria-label="more actions"
                    onClick={(e) => handleMenuOpen(e, student.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Box>

                {/* Student Info */}
                <Typography variant="h8" gutterBottom sx={{ mt: 1 }}>
                  {student.fname && student.lname
                    ? `${student.fname} ${student.lname}`
                    : student.name || 'Unnamed'}
                </Typography>
                <Typography variant="body2">
                  <strong>Email:</strong> {student.email}
                </Typography>
                <Divider />
                <Typography variant="body2">
                  <strong>Bio:</strong> {student.bio}
                </Typography>
                <Typography>

                </Typography>
              </CardContent>                          
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Menu for edit and delete */}
     
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            maxHeight: 200,
            width: '200px',
          },
        }}
      >
        <MenuItem
          onClick={() => {
            navigate(`/edit/${selectedStudentId}`);
            handleMenuClose();
          }}
          sx={{ gap: 1, px: 2, py: 1 }}
        >
          <ListItemIcon sx={{ minWidth: 'unset', mr: 1 }}>
            <EditIcon fontSize="small" sx={{ color: '#1976d2', p: 0.5 }} />
          </ListItemIcon>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>Edit</Typography>
        </MenuItem>

        <MenuItem
          onClick={() => handleDeleteStudent(selectedStudentId)}
          sx={{ gap: 1, px: 2, py: 1 }}
        >
          <ListItemIcon sx={{ minWidth: 'unset', mr: 1 }}>
          <DeleteIcon fontSize="small" sx={{ color: '#d32f2f', p: 0.5 }} />
          </ListItemIcon>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>Delete</Typography>
        </MenuItem>
      </Menu>
    </Container>
  );
}


