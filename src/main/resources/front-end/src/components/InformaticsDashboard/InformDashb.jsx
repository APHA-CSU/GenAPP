import { useSelector } from "react-redux";
import "../InformaticsDashboard/InformDashb.css";
import Container from "@mui/material/Container";
import InformDashbHeading from "./InformDashbHeading";
import InformDashbTable from "./InformDashbTable";

const InformDashb = ({ Footer }) => {
  const showInformDashb = useSelector(
    (state) => state.security.showInformDashb
  );

  if (!showInformDashb) return null;

  return (
    <div className="informdashb-div">
      <Container className="informdashb-container">
        <InformDashbHeading />
        <div className="informdashb-content">
          <InformDashbTable />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default InformDashb;
