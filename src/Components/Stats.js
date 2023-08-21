import React, { useEffect } from "react";
import Graph from "./Graph";
import { auth, db } from "../firebaseConfig";
import { toast } from "react-toastify";
import ReplayIcon from "@mui/icons-material/Replay";
import { Tooltip } from "@mui/material";

const Stats = ({
  wpm,
  accuracy,
  correctChars,
  incorrectChars,
  missedChars,
  extraChars,
  graphData,
}) => {
  let timeSet = new Set();
  const newGraphData = graphData.filter((i) => {
    if (!timeSet.has(i[0])) {
      timeSet.add(i[0]);
      return i;
    }
  });

  const pushDataToDB = () => {
    if (isNaN(accuracy)) {
      toast.error("Invalid Test / Type Atleast 1 Word To Get Results", {
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

    const resultsRef = db.collection("Results");
    const { uid } = auth.currentUser;
    resultsRef
      .add({
        wpm: wpm,
        accuracy: accuracy,
        timeStamp: new Date(),
        correctCharacters: correctChars,
        incorrectCharacters: incorrectChars,
        missedCharacters: missedChars,
        extraCharacters: extraChars,
        userId: uid,
      })
      .then((res) => {
        toast.success("Data Saved in Database", {
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
        toast.error("Data not Saved", {
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

  useEffect(() => {
    if (auth.currentUser) {
      pushDataToDB();
    } else {
      toast.warning("Login to save results", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toast-message",
      });
    }
  }, []);

  return (
    <div className="stats-box">
      <div className="left-stats">
        <div className="subtitle">
          <span className="title">WPM :</span>
          {wpm}
        </div>
        <div className="subtitle">
          <span className="title">Accuracy :</span>
          {accuracy}%
        </div>
        <span className="title">Character Count :</span>
        <div className="chars">
          <div>Correct Characters: {correctChars}</div>
          <div>Incorrect Characters: {incorrectChars}</div>
          <div>Missed Characters: {missedChars}</div>
          <div>Extra Characters: {extraChars}</div>
        </div>
        <div className="reload-btn">
          <Tooltip title={"Restart"}>
            <ReplayIcon
              fontSize="large"
              onClick={() => window.location.reload(false)}
              style={{ cursor: "pointer" }}
            />
          </Tooltip>
        </div>
      </div>
      <div className="right-stats">
        <Graph graphData={newGraphData} />
      </div>
    </div>
  );
};

export default Stats;
