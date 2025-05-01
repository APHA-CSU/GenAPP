import React, { useEffect } from "react";
import genapplogo from "../../imgs/GenAPP_logo.svg";
import "../Navbar/Navbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useSelector, useDispatch } from "react-redux";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Menu from "@mui/material/Menu";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { setShowPage } from "../../features/securitySlice";

const Navbar = () => {
  const activePage = useSelector((state) => state.security.activePage);
  const showRegisterPage = useSelector(
    (state) => state.security.showRegisterPage
  );
  const showLoginPage = useSelector((state) => state.security.showLoginPage);
  const showNavbar = !showRegisterPage && !showLoginPage;

  const dispatch = useDispatch();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {[
        { icon: <HomeOutlinedIcon />, label: "Home" },
        { icon: <InfoOutlinedIcon />, label: "About" },
        { icon: <TroubleshootOutlinedIcon />, label: "Informatics Dashboard" },
        { icon: <NewspaperOutlinedIcon />, label: "News" },
        { icon: <HelpOutlineOutlinedIcon />, label: "Help & Support" },
        { icon: <FileUploadOutlinedIcon />, label: "Upload" },
        { icon: <AccessibilityNewOutlinedIcon />, label: "Accessibility" },
        { icon: <AutoStoriesOutlinedIcon />, label: "Glossary" },
        { icon: <NotificationsNoneOutlinedIcon />, label: "Notifications" },
        { icon: <PermIdentityOutlinedIcon />, label: "Profile" },
      ].map((menuItem, index) => (
        <MenuItem
          key={index}
          onClick={
            menuItem.label === "Profile"
              ? () => dispatch(setShowPage("login"))
              : undefined
          }
        >
          <IconButton color="inherit">{menuItem.icon}</IconButton>
          <p className="icontext">{menuItem.label}</p>
        </MenuItem>
      ))}
    </Menu>
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960 && isMobileMenuOpen) {
        handleMobileMenuClose();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    showNavbar && (
      <Box>
        <AppBar
          position="relative"
          sx={{
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Box className="navlogo">
              <img src={genapplogo} />
            </Box>
            {/* Pages/ */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },

                flexGrow: 1,
                justifyContent: "space-evenly",
              }}
            >
              <button
                onClick={() => dispatch(setShowPage("home"))}
                className={activePage === "home" ? "active" : "navbutton"}
              >
                Home
              </button>
              <button
                onClick={() => dispatch(setShowPage("about"))}
                className={activePage === "about" ? "active" : "navbutton"}
              >
                About
              </button>
              <button
                onClick={() => dispatch(setShowPage("informdashb"))}
                className={
                  activePage === "informdashb" ? "active" : "navbutton"
                }
              >
                Informatics Dashboard
              </button>
              <button
                onClick={() => dispatch(setShowPage("projects"))}
                className={activePage === "projects" ? "active" : "navbutton"}
              >
                Projects
              </button>
              <button
                onClick={() => dispatch(setShowPage("help&support"))}
                className={
                  activePage === "help&support" ? "active" : "navbutton"
                }
              >
                Help & Support
              </button>
              <button
                onClick={() => dispatch(setShowPage("upload"))}
                className={activePage === "upload" ? "active" : "navbutton"}
              >
                Upload
              </button>
            </Box>
            {/* Search Box */}
            <Box className="navbarsearch">
              <IconButton>
                <SearchIcon/>
              </IconButton>
              <InputBase className="navbar-input" placeholder="Search…" />
            </Box>
            {/* Pages/ */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                justifyContent: "flex-end",
              }}
            >
              {[
                {
                  icon: <AccessibilityNewOutlinedIcon />,
                  label: "Accessibility",
                },
                {
                  icon: <AutoStoriesOutlinedIcon />,
                  label: "Glossary",
                },
                {
                  icon: <NotificationsNoneOutlinedIcon />,
                  label: "Notifications",
                },
                {
                  icon: <PermIdentityOutlinedIcon />,
                  label: "Profile",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    color="inherit"
                    onClick={
                      item.label === "Profile"
                        ? () => dispatch(setShowPage("login"))
                        : undefined
                    }
                  >
                    {item.icon}
                  </IconButton>
                  <p className="icontext">{item.label}</p>
                </Box>
              ))}
            </Box>
            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
    )
  );
};
export default Navbar;
