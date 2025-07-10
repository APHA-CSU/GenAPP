import React from "react";
import Box from "@mui/material/Box";
import "../Help&Support/HelpPage.css";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import TryTwoToneIcon from "@mui/icons-material/TryTwoTone";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HelpBody = ({ openSections }) => {
  return (
    <>
      {openSections.Introduction && (
        <Box className="introbody-box">
          <Box className="intro-text">
            <h3>Introduction</h3>
            <br />
            <p>
              This informatics dashboard is a tool developed by the APHA Science
              Team. It allows you to visualise and explore various data types,
              including clustering (trees), geographic (maps), temporal
              (timeline) data and other charts. Additional metadata variables
              are displayed in a table. You can customise colours and shapes to
              display on the map, tree, and timeline. You can download and save
              projects.
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
            <Box className="contact-expert">
              <b>Need support with interpretation?</b>
              <br />
              <button className="govuk-button contact">Contact Expert</button>
            </Box>
            <Box className="help-links">
              <ForumTwoToneIcon className="helpicons" />
              <button className="govuk-button contact">Community Forum</button>
            </Box>
            <Box className="help-links">
              <ContactPageTwoToneIcon className="helpicons" />
              <button className="govuk-button contact">Contact Us</button>
            </Box>
            <Box className="help-links">
              <TryTwoToneIcon className="helpicons" />
              <button className="govuk-button contact">Feedback</button>
            </Box>
          </Box>
        </Box>
      )}
      {openSections.Instructions && (
        <Box className="instrucbody-box">
          <Box className="instru-text">
            <h3>Instructions</h3>
            <br />
            <div className="help-accordions">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel1-header"
                >
                  <b component="span">Navigating the site</b>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel2-header"
                >
                  <b component="span">Navigating within a project</b>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel3-header"
                >
                  <b component="span">Creating a project</b>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel4-header"
                >
                  <b component="span">Selecting and filtering data</b>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel5-header"
                >
                  <b component="span">Labels, colours, and shapes</b>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel6-header"
                >
                  <b component="span">Saving and version control</b>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel7-header"
                >
                  <b component="span">Access control and project sharing</b>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel8-header"
                >
                  <b component="span">Tips & FAQs</b>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </div>
          </Box>
        </Box>
      )}
      {openSections.Interpretation && (
        <Box className="interpbody-box">
          <h3>Interpretation Support</h3>
        </Box>
      )}
    </>
  );
};

export default HelpBody;
