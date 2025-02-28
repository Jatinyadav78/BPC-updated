
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import Bpcl from "../images/English_Logo-r.png";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav className="main">
//       <section className="one-fourth">
//         <img src={Bpcl} alt="BPCL Logo" />
//       </section>
//       <ul className="menu">
//         {isLoggedIn ? (
//           <>
//             <li>
//               <button onClick={() => navigate("/")} className="nav-button">
//                 HOME
//               </button>
//             </li>
//             <li>
//               <button onClick={handleLogout} className="logout-button">
//                 LOG OUT
//               </button>
//             </li>
//           </>
//         ) : (
//           <li>
//             <button onClick={() => navigate("/login")} className="nav-button">
//               LOG IN
//             </button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// Import Material UI icons directly
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import "./Navbar.css";
import Bpcl from "../images/English_Logo-r.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0056b3" }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={Bpcl} alt="BPCL Logo" style={{ height: '50px', marginRight: '16px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            BPCL Cylinder Quality Control
          </Typography>
        </Box>
        
        <Box sx={{ marginLeft: 'auto' }}>
          {isLoggedIn ? (
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
                onClick={handleLogout} 
                startIcon={<LogoutIcon />}
                sx={{ mx: 1 }}
              >
                LOG OUT
              </Button>
            </>
          ) : (
            <Button 
              color="inherit" 
              onClick={() => navigate("/login")} 
              startIcon={<LoginIcon />}
              sx={{ mx: 1 }}
            >
              LOG IN
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}