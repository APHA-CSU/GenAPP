import React from "react";
import "../InformaticsDashboard/InformDashb.css";
import Box from "@mui/material/Box";
import dashboard from "../../imgs/dashboard_icon.svg";

const InformDashbHeading = () => {
  return (
    <div>
      <Box className="heading-line"></Box>
      <Box className="headingcontent-box">
        <Box className="dashboard-icon">
          <img src={dashboard} />
        </Box>
        <Box className="headingtext-box">
          <h2>Informatics Dashboard</h2>
          <br />
          <p>
            Your comprehensive tool for managing and analysing pathogen data.
          </p>
          <br />
          <p>
            This platform offers a secure and intuitive environment designed for
            you to access critical information and insights. With features like
            real time data visualisation, personalised user profiles, and robust
            support resources, our dashboard empowers you to stay ahead in the
            fight against infectious diseases.
          </p>
          <br />
          <p>
            Explore to discover how this tool can enhance your research and
            support your efforts in animal and plant disease surveillance .
          </p>
          <br />
        </Box>
        <Box className="headinginfo-box">
          <b> What you can do on this page: </b>
          <p>
            <br />
            1. Filter for your pathogen of interest
          </p>
          <p>
            <br />
            2. Mark a favourite pathogen using the star
          </p>
          <p>
            <br />
            3. Check how many uploads have been made for a particular pathogen
          </p>
          <p>
            <br />
            4. Click on the 'view'button to launch the dashboard
          </p>
        </Box>
      </Box>
      <Box className="heading-line"></Box>
    </div>
  );
};

export default InformDashbHeading;
