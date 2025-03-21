import { useSelector, useDispatch } from "react-redux";
import { setShowPage } from "../../features/securitySlice";
import "../Home/Home.css";
import genapplogo from "../../imgs/GenAPP_logo.svg";
import dashboard from "../../imgs/dashboard_icon.svg";
import projectsicon from "../../imgs/projects_icon.svg";
import manualicon from "../../imgs/manual_icon.svg";
import videoicon from "../../imgs/video_icon.svg";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Home = ({ Footer }) => {
  const dispatch = useDispatch();
  const showHomePage = useSelector((state) => state.security.showHomePage);
  return (
    <div className={showHomePage ? "home-div" : "hidden"}>
      <Container className="home-container">
        <Box className="heading-line"></Box>
        <Box className="heading-box">
          <Box>
            <img src={genapplogo} style={{ width: "250px" }} />
          </Box>
          <Box>
            <h2>Genomics of Animal and Plant Pathogens</h2>
            <br />
            <p>
              Your comprehensive tool for managing and analysing pathogen data.
              This platform offers a secure and intuitive environment designed
              for you to access critical information and insights. With features
              like real time data visualisation, personalised user profiles, and
              robust support resources, our dashboard empowers you to stay ahead
              in the fight against infectious diseases. Explore to discover how
              this tool can enhance your research and support your efforts in
              animal and plant disease surveillance.
            </p>
            <br />
            <p>
              <b>Acknowledgements</b>: This project is a collaboration between
              APHA, CEFAS, FERA, Forest Research, Pirbright, and RVC.
            </p>
          </Box>
        </Box>
        <Box className="heading-line"></Box>
        <Box className="body-box">
          <Box className="body-card">
            <Box className="img-box">
              <img src={projectsicon} />
            </Box>
            <b> My Profile and Projects</b>
            <p>Manage your research and settings with a personalised profile</p>
            <button
              onClick={() => dispatch(setShowPage("projects"))}
              id="view-projects"
              className="govuk-button"
            >
              View Now
            </button>
          </Box>
          <Box className="dashboard-card">
            <Box className="dashboard-img-box">
              <img src={dashboard} />
            </Box>
            <b>Informatics Dashboard </b>
            <p>
              Gain insights from data and interactive maps, tables and charts
            </p>
            <button id="view-dashboard" className="govuk-button">
              View Now
            </button>
          </Box>
          <Box className="body-card">
            <Box className="img-box">
              <img src={manualicon} />
            </Box>
            <b>Help & Support</b>
            <p>Access help and support resources to maximise your experience</p>
            <button id="view-support" className="govuk-button">
              View Now
            </button>
          </Box>
          <Box className="other-resources">
            <b>Other resources that may be of interest...</b>
            <Box className="resources-card">
              <p>Do you want to read more on the terms of use?</p>
              <button id="view-terms" className="govuk-button">
                Terms of Service
              </button>
              <p>Do you want to know more about this data?</p>
              <button id="view-aboutdata" className="govuk-button">
                Data Dictionary
              </button>
              <p>Stay informed on the latest updates/features</p>
              <button id="view-news" className="govuk-button">
                News & Updates
              </button>
            </Box>
          </Box>
        </Box>
        <Box className="how-to">
          <img src={videoicon} style={{ width: "50px" }} />
          <p>
            Do you require some quick 'How to' videos on getting started with
            this platform? <br />
          </p>
          <button id="view-how" className="govuk-button">
            View Here
          </button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
