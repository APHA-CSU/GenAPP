import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SearchProjects = () => {
  return (
    <Box className="projects-box">
      <Box className="searchprojects">
        <IconButton
          sx={{
            height: "100%",
            position: "absolute",
          }}
        >
          <SearchIcon sx={{ fontSize: "25px" }} />
        </IconButton>
        <InputBase
          className="project-input"
          placeholder="Search for a project or pathogen name"
        />
        <Button variant="contained">Search</Button>
      </Box>
      <Box className="sortby">
        <p>Sort By</p>
        <FormGroup className="formgroup">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="A to Z"
          />
          <FormControlLabel control={<Checkbox />} label="Oldest to Newest" />
          <FormControlLabel control={<Checkbox />} label="Newest to Oldest" />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default SearchProjects;
