import { AppBar, Toolbar, Typography, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FaReceipt } from "react-icons/fa6";
import { TbTransactionRupee } from "react-icons/tb";
import SettingsIcon from '@mui/icons-material/Settings';

const NavigationBar = () => {
  const drawerWidth = 300; // Adjusted drawer width

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#1C1C1C' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
            {[
              { text: 'Dashboard', icon: <MdDashboard style={{ color: 'white' }} />, link: '/' },
              { text: 'Expenses', icon: <FaReceipt style={{ color: 'white' }} />, link: '/expenses' },
              { text: 'Transactions', icon: <TbTransactionRupee style={{ color: 'white' }} />, link: '/transactions' },
              { text: 'Settings', icon: <SettingsIcon style={{ color: 'white' }} />, link: '/settings' }
            ].map((item) => (
              <ListItem 
                button 
                key={item.text} 
                component={Link} 
                to={item.link} 
                sx={{ textAlign: 'center' }}
              >
                <ListItemIcon sx={{ justifyContent: 'center', color: "white" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{ textAlign: 'center', color: 'white' }} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavigationBar;