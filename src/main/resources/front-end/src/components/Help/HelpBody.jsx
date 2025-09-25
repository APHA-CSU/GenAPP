import React from "react";
import Box from "@mui/material/Box";
import "../Help/Help.css";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import TryTwoToneIcon from "@mui/icons-material/TryTwoTone";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";

const HelpBody = () => {
  return (
    <>
      <Box className="introbody-box">
        <Box className="intro-text">
          <h3>Introduction</h3>
          <br />
          <p>
            This informatics dashboard is a tool developed by the APHA Science
            Team. It allows you to visualise and explore various data types,
            including clustering (trees), geographic (maps), temporal (timeline)
            data and other charts. Additional metadata variables are displayed
            in a table. You can customise colours and shapes to display on the
            map, tree, and timeline. You can download and save projects.
          </p>
          <br />
          <p>
            This is a web-based application that provides interactive data
            visualisations. It enables the rapid generation and linkage of
            trees, maps, networks, charts, and timelines, allowing you to
            respond faster and with greater accuracy.
          </p>
        </Box>
        <Box className="intro-help-links">
          <div className="help-links">
            <a
              href="https://genapp.readthedocs.io/en/latest/"
              target="_blank"
              rel="noreferrer noopener"
              className="govuk-button contact"
            >
              Documentation
            </a>
          </div>
          <div className="help-links">
            <a className="govuk-button contact">Community Forum</a>
          </div>
          <div className="help-links">
            <a className="govuk-button contact">Contact Us</a>
          </div>
          <div className="help-links">
            <a className="govuk-button contact">Feedback</a>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default HelpBody;
