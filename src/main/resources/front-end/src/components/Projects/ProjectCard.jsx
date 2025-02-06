import Box from "@mui/material/Box";
import projectData from "../../data/dummyprojectdata.json";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";

const ProjectCard = () => {
  return (
    <Box className="projectslist">
      {projectData.projects.map((project) => (
        <div key={project.id} className="projectcard">
          <div className="cardbutton">
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </div>
          <div>
            <h3 style={{ color: "#8778CC" }}>{project.name}</h3>
            <p>Access: {project.access}</p>
            <p>Created: {project.created}</p>
            <p>Author: {project.author}</p>
          </div>
          <div className="cardbutton">
            <IconButton>
              <ShareIcon />
            </IconButton>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default ProjectCard;
