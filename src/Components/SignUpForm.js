import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";

const SignUpForm = ({handleModalClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { theme } = useTheme();

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      toast.warning("All Fields Are Mandatory!", {
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

    if (password !== confirmPassword) {
      toast.warning("Password Must Match", {
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

    // creating user in firebase
    // this function will resolve in a promise
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("User Created Successfully 🥳", {
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
      <TextField
        variant="outlined"
        type="password"
        label="Confirm Your Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
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
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUpForm;
