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
  ...props
}) {
  const navigate = useNavigate();
  const [bioExpanded, setBioExpanded] = useState(false);

  const toggleBio = () => setBioExpanded((prev) => !prev);

  return (
    <Card
      {...props}
      sx={{
        backgroundColor: "#f5f5f5",
        transition: "0.3s",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          backgroundColor: "#e3f2fd",
          boxShadow: 6,
        },
        ...props?.sx,
      }}
    >
      <Box onClick={() => navigate(`/view/${student.id}`)}>
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
            <Typography variant="h6">
              {student.fname && student.lname
                ? `${student.fname} ${student.lname}`
                : student.name || "Unnamed"}
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="text.secondary">
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
          id={`account-menu-${student.id}`}
          open={accountMenuOpen && selectedStudentId === student.id}
          onClose={onAccountMenuClose}
          PaperProps={{
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
          }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <MenuItem disabled>
            <Typography variant="body2">
              <strong>Gender:</strong> {student.gender}
            </Typography>
          </MenuItem>
          <MenuItem disabled>
            <Typography variant="body2">
              <strong>Phone:</strong> {student.phone}
            </Typography>
          </MenuItem>
        </Menu>
        <CardContent>
          <Divider sx={{ mb: 1 }} />
          <Box>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <strong>Bio:</strong>{" "}
              {bioExpanded
                ? student.bio
                : student.bio?.split(" ").slice(0, 5).join(" ") +
                  (student.bio?.split(" ").length > 5 ? "..." : "")}
            </Typography>

            {student.bio && student.bio.split(" ").length > 5 && (
              <Typography
                variant="caption"
                sx={{
                  color: "primary.main",
                  cursor: "pointer",
                  mt: 1,
                  display: "inline-block",
                }}
                onClick={toggleBio}
              >
                {bioExpanded ? "Show Less" : "Show More"}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
