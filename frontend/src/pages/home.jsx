import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import "../styles/home.css";
import { Button, IconButton, TextField } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };
  return (
    <div className="FullBox">
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>
            <img src="/logo.svg" />
            LinkUp
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            style={{ color: "#bed4ff" }}
            onClick={() => navigate("/history")}
          >
            <RestoreIcon />
            <p>History</p>
          </IconButton>&nbsp;&nbsp;&nbsp;
          <Button
            style={{ fontSize: "1.4rem" }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">

            {/*  */}


            <Card sx={{ minWidth: 275 ,opacity:"0.7"  ,borderRadius:"20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 25, mb: 2 }}>Connect with LinkUp</Typography>
                <div style={{ display: "flex", gap: "10" }}>
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                label="Enter Meeting Code"
                id="outlined-basic"
                variant="outlined"
              ></TextField>
              <Button
                style={{ marginLeft: "8px" }}
                onClick={handleJoinCall}
                variant="contained"
              >
                Connect
              </Button>
            </div>
              </CardContent>
            </Card>



            {/*  */}
          
        </div>
        <div className="rightPanel">
          <img srcSet="/chatting.svg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);
