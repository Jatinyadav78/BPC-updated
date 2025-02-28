


// import React, { useState } from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Mock authentication for demonstration
//     if (login === "demo" && password === "demo") {
//       const mockToken = "mock-jwt-token";
//       localStorage.setItem("token", mockToken);
//       setShowModal(true);
//     } else {
//       alert("Invalid credentials. Try using demo/demo");
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     navigate("/");
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1>LOGIN</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="username">Username</label>
//             <input
//               onChange={(e) => setLogin(e.target.value)}
//               type="text"
//               id="username"
//               name="username"
//               value={login}
//               placeholder="Enter your username (demo)"
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               placeholder="Enter your password (demo)"
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//       </div>

//       {/* Success Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Login Successful</h2>
//             <p>Welcome back!</p>
//             <button onClick={closeModal} className="modal-button">
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (login === "autosqc" && password === "autosqc") {
//       const mockToken = "mock-jwt-token";
//       localStorage.setItem("token", mockToken);

//       // SweetAlert2 Success Popup
//       Swal.fire({
//         icon: "success",
//         title: "Successful",
//         text: "You have successfully logged in.",
//         showConfirmButton: true,
//         confirmButtonText: "Go to Dashboard",
//         confirmButtonColor: "#28a745",
//       }).then(() => {
//         navigate("/");
//       });
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Credentials",
//         text: "Try using demo/demo.",
//         confirmButtonColor: "#d33",
//       });
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1>LOGIN</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="username">Username</label>
//             <input
//               onChange={(e) => setLogin(e.target.value)}
//               type="text"
//               id="username"
//               name="username"
//               value={login}
//               placeholder="Enter your username ()"
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               placeholder="Enter your password ()"
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
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
import "./Login.css";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

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
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          width: '100%', 
          maxWidth: '400px', 
          p: 4, 
          borderRadius: 2,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#0056b3', mb: 3 }}
        >
          LOGIN
        </Typography>
        
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
                  <PersonIcon />
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
                  <LockIcon />
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
            sx={{ 
              py: 1.5, 
              textTransform: 'uppercase', 
              fontWeight: 'bold',
              borderRadius: 1
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}