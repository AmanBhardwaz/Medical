
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="default" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Navigation Buttons */}
        <Box>
          <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
            Previous
          </Button>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Box>

        {/* Action Buttons */}
        <Box>
          <Button variant="outlined" color="secondary" sx={{ marginRight: 1 }}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" sx={{ marginRight: 1 }}>
            Export
          </Button>
          <Button variant="outlined" color="secondary" sx={{ marginRight: 1 }}>
            Print
          </Button>
          <Button variant="outlined" color="secondary">
            Review History
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
