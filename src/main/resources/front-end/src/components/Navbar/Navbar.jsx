import React, { useEffect } from "react";
import "../Navbar/Navbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
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
import Menu from "@mui/material/Menu";

const Navbar = () => {
  const showRegisterPage = useSelector(
    (state) => state.security.showRegisterPage
  );
  const showLoginPage = useSelector((state) => state.security.showLoginPage);
  const showNavbar = !showRegisterPage && !showLoginPage;

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
      <MenuItem>
        <IconButton color="inherit">
          <AccessibilityNewOutlinedIcon fontSize="small" />
        </IconButton>
        <p className="icontext">Accessibility</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <AutoStoriesOutlinedIcon fontSize="small" />
        </IconButton>
        <p className="icontext">Glossary</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <HelpOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <p className="icontext">Help</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <NotificationsNoneOutlinedIcon fontSize="small" />
        </IconButton>
        <p className="icontext">Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <PermIdentityOutlinedIcon fontSize="small" />
        </IconButton>
        <p className="icontext">Profile</p>
      </MenuItem>
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <h1>GenAPP</h1>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "rgb(142, 137, 137, 10%)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                },

                width: "15%",
                marginLeft: "500px",
              }}
            >
              <IconButton
                sx={{
                  height: "100%",
                  position: "absolute",
                  color: "inherit",
                }}
              >
                <SearchIcon sx={{ fontSize: "25px" }} />
              </IconButton>
              <InputBase
                placeholder="Search…"
                sx={{
                  color: "inherit",
                  padding: "8px 8px 8px 40px",
                  fontSize: "16px",
                }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {[
                {
                  icon: <AccessibilityNewOutlinedIcon fontSize="small" />,
                  label: "Accessibility",
                },
                {
                  icon: <AutoStoriesOutlinedIcon fontSize="small" />,
                  label: "Glossary",
                },
                {
                  icon: <HelpOutlineOutlinedIcon fontSize="small" />,
                  label: "Help",
                },
                {
                  icon: <NotificationsNoneOutlinedIcon fontSize="small" />,
                  label: "Notifications",
                },
                {
                  icon: <PermIdentityOutlinedIcon fontSize="small" />,
                  label: "Profile",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <IconButton color="inherit">{item.icon}</IconButton>
                  <p className="icontext">{item.label}</p>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleMobileMenuOpen} color="inherit">
                <MoreIcon fontSize="small" />
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
