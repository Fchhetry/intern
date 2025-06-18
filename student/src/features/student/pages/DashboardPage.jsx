import React, { useState } from 'react';
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Menu,
  MenuItem
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Outlet, useNavigate } from 'react-router-dom';
import PrivateLayout from '../../../layouts/PrivateLayout';

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
      <PrivateLayout onMenuClick={toggleDrawer('left', true)} />

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

