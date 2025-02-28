


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



import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Login.css";
import { useNavigate } from "react-router-dom";

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
        title: "Successful",
        text: "You have successfully logged in.",
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
        text: "Try using demo/demo.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              id="username"
              name="username"
              value={login}
              placeholder="Enter your username ()"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password ()"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
