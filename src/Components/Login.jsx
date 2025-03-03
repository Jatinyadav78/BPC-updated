

// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// import PersonIcon from "@mui/icons-material/Person";
// import LockIcon from "@mui/icons-material/Lock";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import Container from "@mui/material/Container";
// import { motion } from "framer-motion";

// export default function Login() {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (login === "autosqc" && password === "autosqc") {
//       const mockToken = "mock-jwt-token";
//       localStorage.setItem("token", mockToken);

//       // SweetAlert2 Success Popup
//       Swal.fire({
//         icon: "success",
//         title: "Login Successful",
//         text: "Welcome to BPCL Cylinder Quality Control System",
//         showConfirmButton: true,
//         confirmButtonText: "Go to Dashboard",
//         confirmButtonColor: "#28a745",
//         background: '#ffffff',
//         iconColor: '#28a745',
//         customClass: {
//           title: 'swal-title',
//           confirmButton: 'swal-button'
//         }
//       }).then(() => {
//         navigate("/");
//       });
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Credentials",
//         text: "Please try using autosqc/autosqc",
//         confirmButtonColor: "#d33",
//         background: '#ffffff',
//         iconColor: '#d33',
//         customClass: {
//           title: 'swal-title',
//           confirmButton: 'swal-button'
//         }
//       });
//     }
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box 
//         component={motion.div}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         sx={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           alignItems: 'center', 
//           minHeight: 'calc(100vh - 64px)',
//         }}
//       >
//         <Paper 
//           elevation={6} 
//           sx={{ 
//             width: '100%', 
//             p: 4, 
//             borderRadius: 3,
//             boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//             background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)'
//           }}
//         >
//           <Typography 
//             variant="h4" 
//             component="h1" 
//             align="center" 
//             gutterBottom
//             sx={{ 
//               fontWeight: 'bold', 
//               color: '#0056b3', 
//               mb: 3,
//               textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
//             }}
//           >
//             Welcome Back
//           </Typography>
          
//           <Typography 
//             variant="subtitle1" 
//             align="center" 
//             sx={{ mb: 4, color: '#666' }}
//           >
//             Sign in to access the BPCL Cylinder Quality Control System
//           </Typography>
          
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Username"
//               variant="outlined"
//               margin="normal"
//               value={login}
//               onChange={(e) => setLogin(e.target.value)}
//               placeholder="Enter your username (autosqc)"
//               required
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PersonIcon color="primary" />
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{ mb: 3 }}
//             />
            
//             <TextField
//               fullWidth
//               label="Password"
//               type={showPassword ? "text" : "password"}
//               variant="outlined"
//               margin="normal"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password (autosqc)"
//               required
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <LockIcon color="primary" />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//               sx={{ mb: 4 }}
//             />
            
//             <Button 
//               component={motion.button}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit" 
//               fullWidth 
//               variant="contained" 
//               color="primary"
//               size="large"
//               sx={{ 
//                 py: 1.5, 
//                 textTransform: 'none', 
//                 fontWeight: 'bold',
//                 borderRadius: 2,
//                 fontSize: '1rem',
//                 boxShadow: '0 4px 10px rgba(0,86,179,0.3)',
//                 background: 'linear-gradient(45deg, #0056b3, #0077cc)',
//                 '&:hover': {
//                   boxShadow: '0 6px 15px rgba(0,86,179,0.4)',
//                 }
//               }}
//             >
//               Sign In
//             </Button>
//           </form>
          
//           <Typography 
//             variant="body2" 
//             align="center" 
//             sx={{ mt: 3, color: '#666' }}
//           >
//             Demo credentials: autosqc / autosqc
//           </Typography>
//         </Paper>
//       </Box>
//     </Container>
//   );
// }























import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
import "./Login.css";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (login === "autosqc" && password === "autosqc") {
        const mockToken = "mock-jwt-token";
        localStorage.setItem("token", mockToken);

        // SweetAlert2 Success Popup
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome to BPCL Cylinder Quality Control System",
          showConfirmButton: true,
          confirmButtonText: "Go to Dashboard",
          confirmButtonColor: "#28a745",
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
          text: "Please try using autosqc/autosqc",
          confirmButtonColor: "#d33",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: '#f5f5f5',
        p: 2
      }}
    >
      <Card 
        elevation={4} 
        sx={{ 
          width: '100%', 
          maxWidth: '420px', 
          borderRadius: 3,
          overflow: 'hidden'
        }}
      >
        <Box sx={{ 
          bgcolor: '#0056b3', 
          py: 4, 
          px: 2, 
          textAlign: 'center',
          color: 'white'
        }}>
          <Avatar 
            sx={{ 
              mx: 'auto', 
              bgcolor: 'white', 
              color: '#0056b3',
              width: 60,
              height: 60,
              mb: 2
            }}
          >
            <LockOutlinedIcon fontSize="large" />
          </Avatar>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ fontWeight: 'bold', mb: 1 }}
          >
            LOGIN
          </Typography>
          <Typography variant="body2">
            Enter your credentials to access the BPCL Cylinder Quality Control System
          </Typography>
        </Box>
        
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Enter your username (autosqc)"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password (autosqc)"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            
            <Button 
              type="submit" 
              fullWidth 
              variant="contained" 
              color="primary"
              size="large"
              disabled={isLoading}
              sx={{ 
                py: 1.5, 
                textTransform: 'uppercase', 
                fontWeight: 'bold',
                borderRadius: 2,
                position: 'relative'
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" sx={{ position: 'absolute' }} />
              ) : 'Login'}
            </Button>
          </form>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="body2" color="text.secondary" align="center">
            For demo purposes, use username: <b>autosqc</b> and password: <b>autosqc</b>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}