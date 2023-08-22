import React, { useState } from "react";
import Select from "react-select";
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tooltip } from "@mui/material";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleChange = (event) => {
    setTheme(event.value);
    localStorage.setItem("theme", JSON.stringify(event.value));
  };

  const myStyles = (open) => ({
    control: (styles, { isFocused, isDisabled }) => ({
      ...styles,
      backgroundColor: theme.background,
      border: `1.5px solid ${theme.typeBoxText}`,
      fontWeight: "bold",
      width: "100%",
      opacity: isDisabled ? 0.7 : 1,
      "&:hover": {
        cursor: "pointer",
        borderColor: theme.typeBoxText,
      },
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "white",
      color: "black",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.9)",
      borderRadius: "10px",
      fontSize: 15,
      height: open ? "300px" : "0px",
      overflow: "hidden",
      opacity: open ? 1 : 0,
      transition: "all 1s ease-in-out",
      visibility: open ? "visible" : "hidden",
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      cursor: "pointer",
      fontWeight: "bold",
      backgroundColor: theme.background,
      color: "black",
      boxShadow: isFocused ? "0 2px 4px rgba(0, 0, 0, 0.9)" : "none",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.typeBoxText,
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: theme.typeBoxText,
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: theme.typeBoxText,
    }),
    "@media (max-width: 650px)": {
      height: open ? "100%" : "0px",
      visibility: open ? "visible" : "hidden",
    },
  });

  return (
    <div className="footer">
      <div className="links">
        <Tooltip title="Ckeckout my GitHub">
          <div>
            <a href="https://github.com/vedantgour45" target="_blank">
              <GitHubIcon style={{ transform: "scale(1.2)" }} />
            </a>
          </div>
        </Tooltip>
        <Tooltip title="Connect with me on LinkedIn">
          <div>
            <a href="https://www.linkedin.com/in/vedantgour45" target="_blank">
              <LinkedInIcon style={{ transform: "scale(1.3)" }} />
            </a>
          </div>
        </Tooltip>
      </div>
      <div className="themeButton">
        <span className="heading">THEMES</span>
        <div onClick={() => setOpen(!open)}>
          <Select
            defaultValue={{ label: theme.label, value: theme }}
            onChange={handleChange}
            options={themeOptions}
            menuPlacement="top"
            isSearchable={false}
            onBlur={() => setOpen(false)}
            menuIsOpen
            styles={myStyles(open)}
            className="select-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
