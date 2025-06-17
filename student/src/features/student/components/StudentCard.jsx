import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  ListItemIcon,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function StudentCard({
  student,
  onAvatarClick,
  accountAnchorEl,
  accountMenuOpen,
  onAccountMenuClose,
  selectedStudentId,
  onMoreMenuClick,
}) {
  return (
    <Card
      sx={{
        height: '100%',
        cursor: 'pointer',
        transition: '0.3s',
        backgroundColor: '#f5f5f5',
        '&:hover': {
          backgroundColor: '#e3f2fd',
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Avatar + Info Menu */}
          <Box>
            <Tooltip title="Additional Info">
              <IconButton
                onClick={(e) => onAvatarClick(e, student.id)}
                size="small"
              >
                <Avatar sx={{ width: 40, height: 40 }}>
                  {student.fname ? student.fname.charAt(0).toUpperCase() : 'U'}
                </Avatar>
              </IconButton>
            </Tooltip>

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

          {/* More (Edit/Delete) Menu */}
          <IconButton
            aria-label="more actions"
            onClick={(e) => onMoreMenuClick(e, student.id)}
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
      </CardContent>
    </Card>
  );
}
