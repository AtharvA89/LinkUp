import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function LandingPage() {
  const routTo = useNavigate();
  return (
    <div className="LandingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>
            <img src="/logo.svg" />
            LinkUp
          </h2>
        </div>
        <div className="navList">
          <p
            onClick={() => {
              routTo("/guestUser");
            }}
          >
            Join as guest
          </p>
          <p
            onClick={() => {
              routTo("/auth");
            }}
          >
            Register
          </p>
          <div role="button">
            <p
              onClick={() => {
                routTo("/auth");
              }}
            >
              Login
            </p>
          </div>
        </div>
      </nav>

      <div className="LandingMainContainer">
        <div className="LandingMainImage">
          <img src="/mobileak.webp" alt="img" />
        </div>
        <div className="LandingMainContent">
          <h1 style={{ fontSize: "2.7rem" }}>
            <span style={{ color: "#FF9839" }}>Connect</span> with your Loved
            once
          </h1>
          <p
            style={{
              opacity: "0.7",
              marginBottom: "1.9rem",
              fontSize: "1.4rem",
            }}
          >
            cover a distance by LinkUp
          </p>
          {/*  */}
          <div className="cardBody">
            <Card sx={{ minWidth: 275, opacity: "0.7", borderRadius: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 25, mb: 2 }}>LinkUp</Typography>
                <Typography sx={{ mb: 4 }}>
                  <LocalPhoneIcon style={{ fontSize: "18px" }} />
                  &nbsp;Incoming call
                </Typography>
                <div className="bothbuttons">
                  <Link
                    className="GetStartedButton"
                    style={{ backgroundColor: "red", width: "100%" }}
                    to={"/auth"}
                  >
                    Decline
                  </Link>
                  &nbsp;
                  <Link
                    className="GetStartedButton"
                    style={{ width: "100%" }}
                    to={"/auth"}
                  >
                    Get Started
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
