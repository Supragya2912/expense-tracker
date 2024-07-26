import React, {  useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoChatbubbleSharp } from "react-icons/io5";
// import LogoImg from '../images/phyfarmlogo-medium-english 1.png';
import { LuCopy } from "react-icons/lu";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { BsQrCode } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { VscServerEnvironment } from "react-icons/vsc";
import { MdSupervisedUserCircle } from "react-icons/md";
import { FaUsers } from 'react-icons/fa';
import { Badge } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { FaRegUserCircle } from 'react-icons/fa';

import { FaUserPen } from "react-icons/fa6";
import { BsFillHouseGearFill } from "react-icons/bs";
// import { checkAuth, logout } from '../apis/auth/api';
import { TiTags } from "react-icons/ti";



const drawerWidth = 260;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        backgroundColor:'red',

        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



const NavigationBar = ({ unreadMSG }) => {

    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [userData, setUserData] = useState({});
    const [openCopyDialog, setOpenCopyDialog] = useState(false);
    const [agroDataLocalStorage, setAgroDataLocalStorage] = useState({});
    const [permissions, setPermissions] = useState([]);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



   
    const openDialog = () => {
        setOpenCopyDialog(true);
    }

    const featureToSidebarItems = {
        platformUser_mgmt: [
            {
                text: 'Farm Users',
                icon: <FaUsers style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/users',
            }
        ],
        user_mgmt: [
            {
                text: '360 Users',
                icon: <FaRegUserCircle style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/user-management',
            }
        ],
        gptChat_mgmt: [
            {
                text: 'Farm GPT',
                icon: <IoChatbubbleSharp style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/user-chat',
            }
        ],
        agroChat_mgmt: [
            {
                text: 'Org Chats',
                icon: <IoChatbubbleSharp style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/agro-chats',
            }
        ],
        farm_mgmt: [
            {
                text: 'Farms',
                icon: <GiFarmTractor style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/farms',
            }
        ],
        env_mgmt: [
            {
                text: 'Hubs',
                icon: <VscServerEnvironment style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/envs',
            }
        ],
        payment_mgmt: [
            {
                text: 'Payments',
                icon: <MdOutlinePayment style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/payments',
            }
        ],
        feature_mgmt: [
            {
                text: 'Feature Management',
                icon: <BsFillHouseGearFill style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/feature-management',
            }
        ],
        role_mgmt: [
            {
                text: 'Role Management',
                icon: <FaUserPen style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/role-management',
            }
        ],
        admin_mgmt: [
            {
                text: 'Admin Management',
                icon: <MdSupervisedUserCircle style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/admin-management',
            }
        ],
        "360_tags_mgmt": [
            {
                text: '360 Tags',
                icon: <TiTags style={{ marginBottom: 10, marginLeft: 7 }} />,
                link: '/tags',
            }
        ]
    };




    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ backgroundColor: "#1C1C1C", boxShadow: 'none' }}>

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                    }}>
                        <img style={{ width: '44.44px', height: '44.44px' }} alt="phyfarm" />
                    </div>
                    <Typography variant="h6" style={{ color: 'black', fontFamily: 'sen', marginLeft: 30, fontWeight: 'bold' }}>
                        Phyfarm
                    </Typography>
                    {
                        userData?.role?.name === 'agronomist' && (

                            <div style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >

                                <Button variant="contained"
                                    // onClick={downloadImage}
                                    style={{ marginRight: '8px', backgroundColor: "#D9D9D9", color: 'black', borderRadius: 20, boxShadow: "none" }}>
                                    <BsQrCode style={{ marginRight: 10 }} />Download QR
                                </Button>
                                <Button variant="contained" onClick={openDialog} style={{ marginRight: '8px', backgroundColor: "#D9D9D9", color: 'black', borderRadius: 20, boxShadow: "none" }}><LuCopy style={{ marginRight: 10 }} /> Invite Link</Button>
                            </div>
                        )
                    }
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader
                    sx={{ backgroundColor: userData?.role?.name === "agronomist" ? '#E3DDDD' : "white" }}
                >
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                {
                    userData?.role?.name === 'agronomist' && (

                        <List style={{ backgroundColor: '#E3DDDD', height: '100vh' }}>
                            {['Dashboard', 'User Chat'].map((text, index) => (
                                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton component={Link}
                                        to={
                                            index === 0 ? '/users-dashboard' :
                                                index === 1 ? '/users-chat' :
                                                    null
                                        }
                                        sx={{ borderRadius: '0px 50px 50px 0px' }}
                                    >
                                        <ListItemIcon>
                                            {
                                                index === 0 ? <DashboardIcon /> :
                                                    index === 1 ? <Badge badgeContent={unreadMSG} showZero color="success"><IoChatbubbleSharp /> </Badge> : null
                                            }
                                        </ListItemIcon>
                                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    )
                }


                {
                    userData?.role?.name === 'agronomist' ? null :
                        (
                            userData?.role?.name === 'superadmin' ? (
                                <List style={{ marginTop: 15 }}>
                                    {
                                        permissions?.user_permissions?.permissions.slice().reverse().map((permission) => {
                                            let sidebarItems = featureToSidebarItems[permission.feature_name];
                                            if (sidebarItems && permission.permissions.view) {
                                                return sidebarItems.map((item, index) => {
                                                    
                                                    return (
                                                        <ListItem key={index} disablePadding>
                                                            <ListItemButton onClick={() => navigate(item.link, { replace: true })}>
                                                                <ListItemIcon style={{
                                                                    fontSize: 18,
                                                                }} >
                                                                    {item.icon}
                                                                </ListItemIcon>
                                                                <Link to={item.link} style={{ color: 'black', textDecoration: 'none', marginBottom: 10, fontFamily: 'sen', textAlign: 'center', paddingRight: 12 }}>
                                                                    {item.text}
                                                                </Link>
                                                            </ListItemButton>
                                                        </ListItem>
                                                    );
                                                });
                                            }
                                            return null;
                                        })
                                    }
                                </List>
                            ) : (
                                <List style={{ marginTop: 15 }}>
                                    {permissions?.user_permissions?.permissions.map((permission) => {
                                        const sidebarItems = featureToSidebarItems[permission.feature_name];

                                        if (sidebarItems && permission.permissions.view) {
                                            return sidebarItems.map((item, index) => {
                                                return (
                                                    <ListItem key={index} disablePadding>
                                                        <ListItemButton onClick={() => navigate(item.link, { replace: true })}>
                                                            <ListItemIcon style={{
                                                                fontSize: 18,
                                                            }} >
                                                                {item.icon}
                                                            </ListItemIcon>
                                                            <Link to={item.link} style={{ color: 'black', textDecoration: 'none', marginBottom: 10, fontFamily: 'sen', textAlign: 'center', paddingRight: 12 }}>
                                                                {item.text}
                                                            </Link>
                                                        </ListItemButton>
                                                    </ListItem>
                                                );
                                            });
                                        }
                                        return null;
                                    })}
                                </List>
                            )
                        )
                }

                <div style={{ position: 'absolute', bottom: 20, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <ListItem primary="Logout" disablePadding  >
                        {/* <ListItemButton onClick={handleLogout}> */}
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <RiLogoutCircleLine
                                    style={{ color: 'black', marginLeft: 7 }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                        {/* </ListItemButton> */}
                    </ListItem>
                </div>
            </Drawer>


            {/* <Dialog open={openCopyDialog} onClose={openDialog}>
                <DialogTitle style={{ fontSize: 18, fontWeight: 'bold', backgroundColor: '#EFEDED', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Invite Link
                    <IconButton onClick={() => setOpenCopyDialog(false)} ><IoCloseOutline /></IconButton>

                </DialogTitle>
                <DialogContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '550px', height: '120px', backgroundColor: '#D9D3D3' }}>
                    <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 20, width: '100%', textAlign: 'center' }}>
                        {getInviteLink() || "Invite link not available"}
                    </div>
                </DialogContent>
            </Dialog> */}
        </Box>
    );
}

export default NavigationBar;