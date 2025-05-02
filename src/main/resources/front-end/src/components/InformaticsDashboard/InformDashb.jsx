import { useSelector } from "react-redux";
import "../InformaticsDashboard/InformDashb.css";
import Container from "@mui/material/Container";
import InformDashbHeading from "./InformDashbHeading";
import InformDashbTable from "./InformDashbTable";
import InformDashbSidebar from "./InformDashbSidebar";

const InformDashb = ({ Footer }) => {
  const showInformDashb = useSelector(
    (state) => state.security.showInformDashb
  );

  return (
    <div className={showInformDashb ? "informdashb-div" : "hidden"}>
      <Container className="informdashb-container">
        <InformDashbHeading />
        <div className="informdashb-content">
          {/* <InformDashbSidebar /> */}
          <InformDashbTable />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default InformDashb;
