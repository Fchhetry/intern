import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
 
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

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

  const toggleBio = () => {
    setBioExpanded((prev) => !prev);
  };

  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: '#f5f5f5',
        transition: '0.3s',
        '&:hover': {
          backgroundColor: '#e3f2fd',
          boxShadow: 6,
        },
      }}
    >
    <CardActionArea onClick={() => navigate(`/view/${student.id}`)}>

      <CardHeader
        avatar={
          <Tooltip title="Click for details">
            <IconButton onClick={(e) => onAvatarClick(e, student.id)}>
              <Avatar sx={{ bgcolor: '#1976d2' }}>
                {student.fname ? student.fname.charAt(0).toUpperCase() : 'U'}
              </Avatar>
            </IconButton>
          </Tooltip>
        }
        title={
          <Typography variant="h6">
            {student.fname && student.lname
              ? `${student.fname} ${student.lname}`
              : student.name || 'Unnamed'}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            {student.email}
          </Typography>
        }
        action={
          <IconButton onClick={(e) => onMoreMenuClick(e, student.id)}>
            <MoreVertIcon />
          </IconButton>
        }
      />

      {/* Gender/Phone Menu */}
      <Menu
        anchorEl={accountAnchorEl}
        id={`account-menu-${student.id}`}
        open={accountMenuOpen && selectedStudentId === student.id}
        onClose={onAccountMenuClose}
        onClick={onAccountMenuClose}
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
          <Typography variant="body2">
            <strong>Gender:</strong> {student.gender}
          </Typography>
        </MenuItem>
        <MenuItem sx={{ pointerEvents: 'none' }}>
          <Typography variant="body2">
            <strong>Phone:</strong> {student.phone}
          </Typography>
        </MenuItem>
      </Menu>

      <CardContent>
        <Divider sx={{ mb: 1 }} />
        <Typography
          variant="body2"
          onClick={toggleBio}
          sx={{
            cursor: 'pointer',
            color: 'text.secondary',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            display: 'block',
          }}
        >
          <strong>Bio: </strong>{student.bio}
        </Typography>       
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

