import "../Help/Help.css";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HelpHeading from "./HelpHeading";
import HelpBody from "./HelpBody";

const Help = ({ Footer }) => {
  const showHelpPage = useSelector((state) => state.security.showHelpPage);

  return (
    <div className={showHelpPage ? "helpsupport-div" : "hidden"}>
      <Container className="helpsupport-container ">
        <HelpHeading />
        <Box className="help-content">
          <HelpBody />
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Help;
