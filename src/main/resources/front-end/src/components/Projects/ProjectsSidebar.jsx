import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WorkIcon from "@mui/icons-material/Work";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const ProjectsSidebar = () => {
  const theme = createTheme({
    zIndex: {
      drawer: 0, // Changes the default zIndex for Drawer
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Drawer variant="permanent" anchor="left">
          <h2 className="projectssidebar-h2">My Profile and Projects</h2>
          <div className="projectssidebarli">
            <Divider />
            <List>
              {[
                { icon: <WorkIcon />, label: "My Projects" },
                { icon: <StarBorderIcon />, label: "My Interests" },
                { icon: <PeopleOutlineIcon />, label: "Shared with me" },
                { icon: <DeleteOutlineIcon />, label: "Bin" },
              ].map((element, index) => (
                <ListItem key={element.label}>
                  <ListItemButton>
                    <ListItemIcon>{element.icon}</ListItemIcon>
                    <ListItemText> {element.label}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <FolderOpenIcon />
                </ListItemIcon>
                <ListItemText>Folders</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
            <List>
              {[
                { icon: <SettingsIcon />, label: "Account Settings" },
                { icon: <VpnKeyIcon />, label: "Sign out" },
              ].map((element, index) => (
                <ListItem key={element.label}>
                  <ListItemButton>
                    <ListItemIcon>{element.icon}</ListItemIcon>
                    <ListItemText> {element.label}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectsSidebar;
