import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";

const UserInfo = ({ data, totalTests }) => {
  const [user] = useAuthState(auth);
  const wpmSum = data.reduce((acc, elem) => {
    return acc + elem.wpm;
  }, 0);

  let average = Math.floor(wpmSum / totalTests);
  if (isNaN(average)) {
    average = 0;
  }
  return (
    <div className="user-profile">
      <div className="user">
        <div className="picture">
          <AccountCircleIcon
            style={{
              transform: "scale(5)",
            }}
          />
        </div>
        <div className="info">
          <div className="email">
            <b>{user.email}</b>
          </div>
          <div className="joined-at">
            <b>
              Registered on: <br />
            </b>{" "}
            {user.metadata.creationTime}
          </div>
        </div>
      </div>
      <div className="total-tests">
        <div>
          <b>Total Tests taken:</b> {totalTests}
        </div>
        <div>
          <b>Average Typing Speed:</b> {average} WPM{" "}
        </div>
          <Link to="/" className="back-to-homepage">Back to Homepage &nbsp; &rarr;</Link>
      </div>
    </div>
  );
};

export default UserInfo;
