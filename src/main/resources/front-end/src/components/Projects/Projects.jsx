import { useSelector } from "react-redux";
import "../Projects/Projects.css";
import Container from "@mui/material/Container";
import ProjectsSidebar from "./ProjectsSidebar";
import SearchProjects from "./SearchProjects";
import ProjectsList from "./ProjectsList"

const Projects = ({
  Footer,
}) => {
  const showProjectsPage = useSelector(
    (state) => state.security.showProjectsPage
  );

  return (
    <div className={showProjectsPage ? "project-div" : "hidden"}>
      <Container className="projects-container">
        <ProjectsSidebar />
        {/* <SearchProjects /> */}
        <ProjectsList />
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
