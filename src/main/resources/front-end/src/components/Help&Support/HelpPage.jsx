import "../Help&Support/HelpPage.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HelpHeading from "./HelpHeading";
import HelpSidebar from "./HelpSidebar";
import HelpBody from "./HelpBody";

const HelpPage = ({ Footer }) => {
  const showHelpPage = useSelector((state) => state.security.showHelpPage);
  const [openSections, setOpenSections] = useState({
    Introduction: true,
    Instructions: false,
    "Interpretation Support": false,
  });

  return (
    <div className={showHelpPage ? "helpsupport-div" : "hidden"}>
      <Container className="helpsupport-container ">
        <HelpHeading />
        <Box className="help-content">
          <HelpSidebar setOpenSections={setOpenSections} />
          <HelpBody openSections={openSections} />
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default HelpPage;
