import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ProjectsList = () => {
  return (
    <Box className="projectslist-box">
      <ProjectCard/>
      <Stack  spacing={2}>
      <Pagination className="projectsnav" count={5} variant="outlined" shape="rounded" />
    </Stack>
    </Box>
  )
}

export default ProjectsList