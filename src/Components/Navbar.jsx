
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import HomeIcon from "@mui/icons-material/Home";
// import LogoutIcon from "@mui/icons-material/Logout";
// import LoginIcon from "@mui/icons-material/Login";
// import Bpcl from "../images/English_Logo-r.png";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <AppBar position="static" elevation={3} sx={{ backgroundColor: "#0056b3" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img 
//               src={Bpcl} 
//               alt="BPCL Logo" 
//               style={{ 
//                 height: '50px', 
//                 marginRight: '16px',
//                 filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))'
//               }} 
//             />
//             <Typography 
//               variant="h6" 
//               component="div" 
//               sx={{ 
//                 fontWeight: 'bold',
//                 letterSpacing: '0.5px',
//                 textShadow: '0px 1px 2px rgba(0,0,0,0.2)'
//               }}
//             >
//               BPCL Cylinder Quality Control
//             </Typography>
//           </Box>
          
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             {isLoggedIn ? (
//               <>
//                 <Button 
//                   color="inherit" 
//                   onClick={() => navigate("/")} 
//                   startIcon={<HomeIcon />}
//                   sx={{ 
//                     fontWeight: 'bold',
//                     borderRadius: '4px',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                     }
//                   }}
//                 >
//                   HOME
//                 </Button>
//                 <Button 
//                   color="inherit" 
//                   onClick={handleLogout} 
//                   startIcon={<LogoutIcon />}
//                   sx={{ 
//                     fontWeight: 'bold',
//                     borderRadius: '4px',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                     }
//                   }}
//                 >
//                   LOG OUT
//                 </Button>
//               </>
//             ) : (
//               <Button 
//                 color="inherit" 
//                 onClick={() => navigate("/login")} 
//                 startIcon={<LoginIcon />}
//                 sx={{ 
//                   fontWeight: 'bold',
//                   borderRadius: '4px',
//                   '&:hover': {
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                   }
//                 }}
//               >
//                 LOG IN
//               </Button>
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }























import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Import Material UI icons directly
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "./Navbar.css";
import Bpcl from "../images/English_Logo-r.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    handleMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const menuId = 'primary-account-menu';
  const mobileMenuId = 'primary-menu-mobile';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 3,
        sx: { 
          minWidth: 200,
          borderRadius: 2,
          mt: 1
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AccountCircleIcon fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" color="error" />
        </ListItemIcon>
        <Typography color="error">Logout</Typography>
      </MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={Boolean(mobileMenuAnchorEl)}
      onClose={handleMobileMenuClose}
      PaperProps={{
        elevation: 3,
        sx: { 
          minWidth: 200,
          borderRadius: 2,
          mt: 1
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {isLoggedIn ? (
        <>
          <MenuItem onClick={() => {
            navigate("/");
            handleMobileMenuClose();
          }}>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            Home
          </MenuItem>
          <MenuItem onClick={() => {
            navigate("/");
            handleMobileMenuClose();
          }}>
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            Dashboard
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" color="error" />
            </ListItemIcon>
            <Typography color="error">Logout</Typography>
          </MenuItem>
        </>
      ) : (
        <MenuItem onClick={() => {
          navigate("/login");
          handleMobileMenuClose();
        }}>
          <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0056b3" }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={Bpcl} alt="BPCL Logo" style={{ height: '45px', marginRight: '16px' }} />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            BPCL Cylinder Quality Control
          </Typography>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              display: { xs: 'block', sm: 'none' }
            }}
          >
            BPCL QC
          </Typography>
        </Box>
        
        <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          {isLoggedIn ? (
            <>
              {!isMobile && (
                <>
                  <Button 
                    color="inherit" 
                    onClick={() => navigate("/")} 
                    startIcon={<HomeIcon />}
                    sx={{ mx: 1 }}
                  >
                    HOME
                  </Button>
                  <Button 
                    color="inherit" 
                    onClick={() => navigate("/")} 
                    startIcon={<DashboardIcon />}
                    sx={{ mx: 1 }}
                  >
                    DASHBOARD
                  </Button>
                </>
              )}
              
              {isMobile ? (
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Tooltip title="Account settings">
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    sx={{ ml: 1 }}
                  >
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'white', color: '#0056b3' }}>
                      <AccountCircleIcon />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              )}
            </>
          ) : (
            isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Button 
                color="inherit" 
                onClick={() => navigate("/login")} 
                startIcon={<LoginIcon />}
                variant="outlined"
                sx={{ 
                  mx: 1, 
                  borderColor: 'rgba(255,255,255,0.5)',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                LOGIN
              </Button>
            )
          )}
        </Box>
      </Toolbar>
      {renderMenu}
      {renderMobileMenu}
    </AppBar>
  );
}