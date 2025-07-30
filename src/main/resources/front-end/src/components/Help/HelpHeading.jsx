import React from "react";
import "../Help/Help.css";
import Box from "@mui/material/Box";
import manualicon from "../../imgs/manual_icon.svg";

const HelpHeading = () => {
  return (
    <div>
      <Box className="heading-line"></Box>
      <Box className="helpheading-box">
        <Box className="help-icon">
          <img src={manualicon} />
        </Box>
        <Box className="helpheadingtext">
          <h2>Help & Support </h2>
          <br />
          <p>
            Welcome to the Help and Support page for this Informatics Dashboard.
            Our goal is to ensure you have the assistance you need to make the
            most of our platform. Below, you will find a range of resources and
            contact information to help you with any issues or questions you may
            have.
          </p>
        </Box>
      </Box>
      <Box className="heading-line"></Box>
    </div>
  );
};

export default HelpHeading;
