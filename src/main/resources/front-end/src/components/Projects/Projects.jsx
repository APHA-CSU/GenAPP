import { useSelector } from "react-redux";
import "../Projects/Projects.css";
import Container from "@mui/material/Container";

const Projects = ({
  Footer,
  ProjectsSidebar,
  SearchProjects,
  ProjectsList,
}) => {
  const showProjectsPage = useSelector(
    (state) => state.security.showProjectsPage
  );

  return (
    <div className={showProjectsPage ? "project-div" : "hidden"}>
      <Container className="projects-container">
        <ProjectsSidebar />
        <SearchProjects />
        <ProjectsList />
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
