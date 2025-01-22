import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import styles from "../styles/landing.module.css";
import { useMediaQuery } from "@mui/material";


function LandingPage() {
  const routTo = useNavigate();
  const isMobile = useMediaQuery("(max-width:500px)");
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
          {isMobile ? null :<p
          className="hide-in-mobile"
            onClick={() => {
              routTo("/auth");
            }}
          >
            Register
          </p>}
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
          <h1 >
            <span style={{ color: "#FF9839" }}>Connect</span> with your Loved
            ones
          </h1>
          <p>
            cover a distance by LinkUp
          </p>
          {/*  */}
          <div className="cardBody">
            <Card className="card" sx={{  borderRadius: "20px" }}>
              <CardContent className="cardContent" >
                <Typography className={styles.cardContent1} >LinkUp</Typography>
                <Typography className={styles.CardContentText} >
                  <LocalPhoneIcon className={styles.CardContentLogo}/>
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
