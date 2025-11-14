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
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Menu from "@mui/material/Menu";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import WorkIcon from "@mui/icons-material/Work";
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
  const pages = [
    { icon: <HomeOutlinedIcon />, label: "Home", page: "home" },
    {
      icon: <TroubleshootOutlinedIcon />,
      label: "Informatics Dashboard",
      page: "informdashb",
    },
    { icon: <WorkIcon />, label: "Projects", page: "projects" },
    {
      icon: <HelpOutlineOutlinedIcon />,
      label: "Help & Support",
      page: "helppage",
    },
    { icon: <FileUploadOutlinedIcon />, label: "Upload", page: "upload" },
    { icon: <PermIdentityOutlinedIcon />, label: "Profile", page: "login" },
  ];

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
      {pages.map((menuItem) => (
        <MenuItem
          key={menuItem.label}
          onClick={() => {
            handleMobileMenuClose();
            dispatch(setShowPage(menuItem.page));
          }}
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
              {pages.map(
                (element) =>
                  element.label !== "Profile" && (
                    <button
                      key={element.label}
                      onClick={() => dispatch(setShowPage(element.page))}
                      className={
                        activePage === element.page ? "active" : "navbutton"
                      }
                    >
                      {element.label}
                    </button>
                  )
              )}
            </Box>
            {/* Search Box */}
            <Box className="navbarsearch">
              <IconButton>
                <SearchIcon />
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="inherit"
                  onClick={() => dispatch(setShowPage("login"))}
                >
                  <PermIdentityOutlinedIcon />
                </IconButton>
                <p className="icontext">Profile</p>
              </Box>
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
