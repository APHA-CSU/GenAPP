import Box from "@mui/material/Box";
import APHAlogo from "../../imgs/APHA_logo_svg.svg";
const Footer = () => {
  return (
    <Box className="footer">
      <img src={APHAlogo} height="25px" width="40px" />
      <p>Service developed and maintained by APHA Science</p>
    </Box>
  );
};

export default Footer;
