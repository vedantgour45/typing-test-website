import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import TableUserData from "../Components/TableUserData";
import Graph from "../Components/Graph";
import UserInfo from "./../Components/UserInfo";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import motivationalQuotes from "../Utils/motivationQuotes";

const UserPage = () => {
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  let { theme } = useTheme();

  const fetchUSerData = () => {
    const resultsRef = db.collection("Results");
    console.log(resultsRef);
    const { uid } = auth.currentUser;
    let tempData = [];
    let tempGraphData = [];
    resultsRef
      .where("userId", "==", uid)
      .orderBy("timeStamp", "desc")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          tempData.push({ ...doc.data() });
          tempGraphData.push([
            doc.data().timeStamp.toDate().toLocaleString().split(",")[0],
            doc.data().wpm,
          ]);
        });
        setData(tempData);
        setGraphData(tempGraphData.reverse());
        setDataLoading(false);
      });
  };

  useEffect(() => {
    if (!loading) {
      fetchUSerData();
    }

    if (!loading && !user) {
      navigate("/");
    }
  }, [loading]);

  if (loading || dataLoading) {
    return (
      <div className="center-of-screen">
        <CircularProgress size={"15%"} style={{color: theme.textColor}}/>
      </div>
    );
  }

  if (!loading && !dataLoading && data.length === 0) {
    return (
      <div className="center-of-screen">
        <div>Take some tests then come back!!</div>
        <Link to="/" className="back-to-homepage">
          Back to Homepage &nbsp; &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="canvas">
      <UserInfo data={data} totalTests={data.length} />
      <div className="motivation-quote">
        Remember : &nbsp;
        {
          motivationalQuotes[
            Math.floor(Math.random() * motivationalQuotes.length)
          ]
        }
      </div>
      <div className="graph-user-page">
        <Graph graphData={graphData} />
      </div>
      <TableUserData data={data} />
    </div>
  );
};

export default UserPage;
