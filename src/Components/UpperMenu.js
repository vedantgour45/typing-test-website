import React from "react";
import { useTestMode } from "../Context/TestModeContext";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Tooltip } from "@mui/material";
import { useEffect } from "react";

const UpperMenu = ({ countDown, reset }) => {
  const { setTestTime } = useTestMode();

  const updateTime = (event) => {
    setTestTime(Number(event.target.id));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [updateTime]);

  return (
    <div className="upper-menu">
      <div className="counter">
        <div className="countdown">{countDown}</div>
        <Tooltip title={"Reset"}>
          <RestartAltIcon className="restart" onClick={reset} />
        </Tooltip>
      </div>
      <div className="modes">
        <Tooltip title={"Take a 15 sec test"}>
          <div className="time-mode" id={15} onClick={updateTime}>
            15s
          </div>
        </Tooltip>
        <Tooltip title={"Take a 30 sec test"}>
          <div className="time-mode" id={30} onClick={updateTime}>
            30s
          </div>
        </Tooltip>
        <Tooltip title={"Take a 60 sec test"}>
          <div className="time-mode" id={60} onClick={updateTime}>
            60s
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default UpperMenu;
