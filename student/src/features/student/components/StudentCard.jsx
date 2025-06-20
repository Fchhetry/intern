import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon, 
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

export default function StudentCard({
  student,
  onAvatarClick,
  accountAnchorEl,
  accountMenuOpen,
  onAccountMenuClose,
  selectedStudentId,
  onMoreMenuClick,
  menuItems,
  ...props
}) {
  const navigate = useNavigate();
  const [bioExpanded, setBioExpanded] = useState(false);

  const toggleBio = () => setBioExpanded((prev) => !prev);

  return (
    <Card 
      {...props}
      sx={{
        width: 300,
        height: 260,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        transition: "0.3s",
       "&:hover": {
        backgroundColor: "#e3f2fd",
        boxShadow: 6,
        },
        ...props?.sx,
      }}
    >
        <CardHeader
          avatar={
            <Tooltip title="Click for details">
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  onAvatarClick(e, student.id);
                }}
              >
                <Avatar sx={{ bgcolor: "#1976d2" }}>
                  {student.fname ? student.fname.charAt(0).toUpperCase() : "U"}
                </Avatar>
              </IconButton>
            </Tooltip>
          }
          title={
            <Typography 
            variant="h6"
            onClick={() => navigate(`/view/${student.id}`)}
            sx={{ cursor: "pointer" }}
            >
              {student.fname && student.lname
                ? `${student.fname} ${student.lname}`
                : student.name || "Unnamed"}
            </Typography>
          }
          subheader={
            <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`/view/${student.id}`)}
            >
              {student.email}
            </Typography>
          }
          action={
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onMoreMenuClick(e, student.id);
              }}
            >
              <MoreVertIcon />
            </IconButton>
          }
        />

        <Menu
          anchorEl={accountAnchorEl}
          open={accountMenuOpen && selectedStudentId === student.id}
          onClose={onAccountMenuClose}
          slotProps={{
            paper: {
              elevation: 3,
              sx: {
                mt: 1.5,
                overflow: "visible",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 20,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          {menuItems.map((item, index) => (
            <MenuItem 
            key={index} 
            onClick={(e)=>{
            e.stopPropagation();
            item.action();
            }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography variant="inherit">{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>

        <CardContent>
          <Divider sx={{ mb: 1 }} />
          <Box>
            <Typography variant="body2" 
              sx={{ 
                color: "text.secondary",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: bioExpanded ? 'unset' : 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              <strong>Bio:</strong> {student.bio}
            </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: "primary.main",
                  cursor: "pointer",
                  mt: 1,
                  display: "inline-block",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBio();
                }}
              >
                {bioExpanded ? "Show Less" : "Show More"}
              </Typography> 
          </Box>
        </CardContent>
    </Card>
  );
}
