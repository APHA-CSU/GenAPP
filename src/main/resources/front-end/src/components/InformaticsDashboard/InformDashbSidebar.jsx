import React from "react";
import "../InformaticsDashboard/InformDashb.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";

const InformDashbSidebar = () => {
  const dashbtheme = createTheme({
    zIndex: {
      drawer: 0,
    },
  });

  return (
    <ThemeProvider theme={dashbtheme}>
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{
          className: "dashbdrawer",
        }}
        sx={{
          width: "25%",
        }}
      >
        <h3 className="dashbsidebar-h2">Filter</h3>
        <Box className="dashbsearch">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            className="dashb-input"
            placeholder="Search by pathogen or symptoms.."
          />
        </Box>
        <Box className="dashbform">
          <b>HOST TYPE</b>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Insect"
            />
            <FormControlLabel control={<Checkbox />} label="Animal" />
            <FormControlLabel control={<Checkbox />} label="Plant" />
          </FormGroup>
        </Box>
        <Divider />
        <Box className="dashbform">
          <b>PATHOGEN TYPE</b>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Virus"
            />
            <FormControlLabel control={<Checkbox />} label="Bacteria" />
            <FormControlLabel control={<Checkbox />} label="Fungi" />
          </FormGroup>
        </Box>
        <Divider />
        <Box className="dashbform">
          <b>REGION</b>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="UK"
            />
            <FormControlLabel control={<Checkbox />} label="Ireland" />
          </FormGroup>
        </Box>
        <Divider />
        <Box className="dashbform">
          <b>MILES FROM POSTCODE</b>
        </Box>
        <Divider />
        <Box className="dashbform">
          <b>COLLECTION YEAR</b>
        </Box>
        <Divider />
      </Drawer>
    </ThemeProvider>
  );
};

export default InformDashbSidebar;
