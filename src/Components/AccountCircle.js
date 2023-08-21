import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Modal, AppBar, Tabs, Tab, Box } from "@mui/material";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useTheme } from "../Context/ThemeContext";
import GoogleButton from "react-google-button";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const AccountCircle = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleModalOpen = () => {
    {
      if (user) {
        // navigate to user page
        navigate("/user");
      } else {
        setOpen(true);
      }
    }
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  const handleValueCahange = (event, val) => {
    setValue(val);
  };

  const logout = () => {
    auth
      .signOut()
      .then((res) => {
        toast.success("Logged Out Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "toast-message",
        });
      })
      .catch((err) => {
        toast.error("Something Went Wrong, Try Again!", {
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

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success("Signed In Successfully 🥳", {
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
        return;
      });
  };

  return (
    <div>
      <div className="user-and-logout">
        <Tooltip title={"Account"}>
          <span>
            <AccountCircleIcon
              onClick={handleModalOpen}
              style={{
                transform: "scale(1.5)",
                cursor: "pointer",
                color: theme.typeBoxText,
              }}
            />
          </span>
        </Tooltip>

        {user && (
          <span>
            <Tooltip title={"Logout"}>
              <LogoutIcon
                onClick={logout}
                style={{
                  color: theme.typeBoxText,
                  transform: "scale(1.5)",
                  cursor: "pointer",
                  marginLeft: "0.7rem",
                }}
              />
            </Tooltip>
          </span>
        )}
      </div>
      <Modal open={open} onClose={handleModalClose} className="modal">
        <div className="modal-content">
          <AppBar position="static" className="appBar">
            <Tabs
              value={value}
              onChange={handleValueCahange}
              variant="fullWidth"
            >
              <Tab
                label="login"
                className="tab"
                style={{ color: theme.textColor }}
              ></Tab>
              <Tab
                label="signup"
                className="tab"
                style={{ color: theme.textColor }}
              ></Tab>
            </Tabs>
          </AppBar>
          {value === 0 && <LoginForm handleModalClose={handleModalClose} />}
          {value === 1 && <SignUpForm handleModalClose={handleModalClose} />}
          <Box>
            <span>- OR -</span>
            <GoogleButton
              type="light"
              onClick={handleGoogleSignIn}
              className="google-btn"
              style={{
                color: "black",
                fontWeight: "600",
              }}
            />
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default AccountCircle;
