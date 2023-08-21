import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";

const LoginForm = ({ handleModalClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme();

  const handleSubmit = () => {
    if (!email || !password) {
      toast.warning("All Fields Are Mandatory! ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toast-message",
      });
      return;
    }

    // sign in with email and password using firebase
    // this will resolve in a promise
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("Logged In Successfully 🥳", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "toast-message",
        });
        handleModalClose();
      })
      .catch((err) => {
        toast.error(errorMapping[err.code] || "Some Error Occured", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "toast-message",
        });
      });
  };

  return (
    <Box p={3} className="login-form">
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{
          style: {
            color: theme.typeBoxText,
            opacity: 0.6,
          },
        }}
        InputProps={{
          style: {
            color: theme.typeBoxText,
          },
        }}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{
          style: {
            color: theme.typeBoxText,
            opacity: 0.6,
          },
        }}
        InputProps={{
          style: {
            color: theme.typeBoxText,
          },
        }}
      />
      <Button
        variant="contained"
        size="large"
        className="btn"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
