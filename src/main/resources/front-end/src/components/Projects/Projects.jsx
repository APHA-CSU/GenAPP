import { useSelector } from "react-redux";
import "../Projects/Projects.css";
import Container from "@mui/material/Container";
import ProjectsSidebar from "./ProjectsSidebar";
import SearchProjects from "./SearchProjects";
import ProjectsList from "./ProjectsList";
import Box from "@mui/material/Box";

const Projects = ({ Footer }) => {
  const showProjectsPage = useSelector(
    (state) => state.security.showProjectsPage
  );

  if (!showProjectsPage) return null;

  return (
    <div className="project-div">
      <Container className="projects-container">
        <Box className="heading-line"></Box>
        <ProjectsSidebar />
        {/* <SearchProjects /> */}
        <ProjectsList />
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
