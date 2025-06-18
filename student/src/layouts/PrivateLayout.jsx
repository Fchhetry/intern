import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function PrivateLayout({ onMenuClick }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2", mb: 4 }}>
      <Toolbar>
        {/* Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
        >
          Student Management System
        </Typography>

        {/* Search */}
        <Box
          sx={{
            position: "relative",
            borderRadius: 1,
            backgroundColor: alpha("#ffffff", 0.15),
            "&:hover": {
              backgroundColor: alpha("#ffffff", 0.25),
            },
            marginLeft: 0,
            width: "100%",
            maxWidth: 300,
          }}
        >
          <Box
            sx={{
              padding: "0px 10px",
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              color: "inherit",
              paddingLeft: 4,
              width: "100%",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
