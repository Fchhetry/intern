import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Outlet, useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();

  const [drawerState, setDrawerState] = useState({ left: false });
  const [featuresAnchorEl, setFeaturesAnchorEl] = useState(null);
  const isFeaturesMenuOpen = Boolean(featuresAnchorEl);

  const featuresOptions = [
    { label: 'Fetch', path: '/fetch' },
    { label: 'Axios', path: '/axios' },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const handleFeaturesClick = (event) => setFeaturesAnchorEl(event.currentTarget);
  const handleFeaturesClose = () => setFeaturesAnchorEl(null);

  const drawerList = () => (
    <Box sx={{ width: 250, backgroundColor: "#e3f2fd" }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary="Home" />
          </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary="Student List" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleFeaturesClick}>
            <ListItemText primary="Features" />
            <ArrowDropDownIcon />
          </ListItemButton>
        </ListItem>
      </List>

      <Menu anchorEl={featuresAnchorEl} open={isFeaturesMenuOpen} onClose={handleFeaturesClose}>
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
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4, backgroundColor: "rgb(221, 226, 232)" }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1976d2',
          px: 2,
          py: 2,
          mb: 4,
        }}
      >
        <Button
          onClick={toggleDrawer('left', true)}
          startIcon={<MenuIcon />}
          sx={{ color: '#ffffff' }}
        >
          Menu
        </Button>
        <Typography
          variant="h4"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#ffffff',
            fontWeight: 'bold',
          }}
        >
          Dashboard
        </Typography>
      </Box>

      <SwipeableDrawer
        anchor="left"
        open={drawerState.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {drawerList()}
      </SwipeableDrawer>

      {/* This renders the current route inside the Dashboard */}
      <Outlet />
    </Container>
  );
}

