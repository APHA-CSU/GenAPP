import React from "react";
import "../Help&Support/HelpPage.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";

const HelpSidebar = ({ setOpenSections }) => {
  const dashbtheme = createTheme({
    zIndex: {
      drawer: 0,
    },
  });

  const handleToggle = (sectionTitle) => {
    setOpenSections({
      Introduction: false,
      Instructions: false,
      "Interpretation Support": false,
      [sectionTitle]: true,
    });
  };

  const sidebarli = [
    { title: "Introduction" },
    { title: "Instructions" },
    { title: "Interpretation" },
  ];

  // const sidebarli = [
  //   {
  //     title: "Introduction",
  //     subheading: true,
  //     items: ["Introductory Videos", "About"],
  //   },
  //   {
  //     title: "Instructions",
  //     subheading: true,
  //     items: [
  //       "Navigating the site",
  //       "Navigating within a project",
  //       "Creating a Project",
  //       "Adding and Editing Panels",
  //       "Selecting and Filtering Data",
  //       "Labels, Colours, and Shapes",
  //       "Saving and version control",
  //       "Access Control and Project Sharing",
  //       "Tips & FAQ",
  //     ],
  //   },
  //   {
  //     title: "Interpretation Support",
  //     subheading: true,
  //     items: [],
  //   },
  // ];

  return (
    <ThemeProvider theme={dashbtheme}>
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{
          className: "helpdrawer",
        }}
        sx={{
          width: "20%",
          height: "100%",
        }}
      >
        <Box className="helpsearch">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase className="help-input" placeholder="Search topic..." />
        </Box>
        <List id="helppagelist">
          {sidebarli.map((section) => (
            <ListItem key={section.title}>
              <ListItemButton onClick={() => handleToggle(section.title)}>
                <ListItemText
                  primary={section.title}
                  primaryTypographyProps={{
                    className: "helpsidebar-heading",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default HelpSidebar;
