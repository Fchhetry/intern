import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../store/studentSlice";

export default function PrivateLayout({ onMenuClick }) {
  const dispatch = useDispatch();
  const currentQuery = useSelector((state) => state.students.searchQuery);
  const [searchText, setSearchText] = useState(currentQuery);

  useEffect(() => {
    setSearchText(currentQuery);
  }, [currentQuery]);

  const handleSearch = () => {
    dispatch(setSearchQuery(searchText));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2", mb: 4 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
        >
          Student Management System
        </Typography>

        <Box
          sx={{
            position: "relative",
            borderRadius: 1,
            backgroundColor: alpha("#ffffff", 0.15),
            "&:hover": { backgroundColor: alpha("#ffffff", 0.25) },
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 1,
            }}
            onClick={handleSearch}
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
