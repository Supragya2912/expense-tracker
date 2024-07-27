import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FlightIcon from '@mui/icons-material/Flight';
import ApprovalIcon from '@mui/icons-material/Approval';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';

const NavigationBar = () => {
  const drawerWidth = 300; // Adjusted drawer width

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#1C1C1C' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Add content for the top bar here if needed */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1C1C1C',
            color: '#FFF', 
          },
        }}
      >
        <Toolbar />
        <Box sx={{ textAlign: 'center', padding: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
            sx={{ margin: '20px auto', width: 100, height: 100 }}
          />
          <Typography variant="h6" sx={{ color: 'white' }}>
            John Doe
          </Typography>
        </Box>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Expenses', 'Trips', 'Approvals', 'Settings', 'Support'].map((text, index) => {
              const icons = [
                <HomeIcon sx={{ color: 'white' }} />,
                <ReceiptIcon sx={{ color: 'white' }} />,
                <FlightIcon sx={{ color: 'white' }} />,
                <ApprovalIcon sx={{ color: 'white' }} />,
                <SettingsIcon sx={{ color: 'white' }} />,
                <SupportIcon sx={{ color: 'white' }} />,
              ];
              return (
                <ListItem button key={text}>
                  <ListItemIcon>{icons[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: drawerWidth }}>
        <Toolbar />
        {/* Main content goes here */}
        <Box sx={{ padding: 2, backgroundColor: '#282828', borderRadius: 1 }}>
          <Typography variant="h4" sx={{ color: 'white', marginBottom: 2 }}>
            Dashboard
          </Typography>
          {/* Your content here */}
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationBar;
