
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import moment from 'moment';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentTime, setCurrentTime] = useState(moment());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Sample patient data
  const [patient, setPatient] = useState('John Doe');
  const patients = ['John Doe', 'Jane Smith', 'Alice Johnson'];

  const handlePatientChange = (event) => {
    setPatient(event.target.value);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          EEG Analysis Console
        </Typography>

        {/* Settings & Options */}
        <Box>
          <IconButton color="inherit" aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="help">
            <HelpOutlineIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="logout">
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#1976d2' }}>
        {/* Patient Information */}
        <FormControl variant="standard" sx={{ minWidth: 200 }}>
          <InputLabel id="patient-select-label" style={{ color: '#fff' }}>Patient</InputLabel>
          <Select
            labelId="patient-select-label"
            id="patient-select"
            value={patient}
            onChange={handlePatientChange}
            label="Patient"
            style={{ color: '#fff' }}
          >
            {patients.map((p, index) => (
              <MenuItem key={index} value={p}>{p}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Date & Time */}
        <Typography variant="body2" sx={{ color: '#fff' }}>
          {currentTime.format('MMMM Do YYYY, h:mm:ss a')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
