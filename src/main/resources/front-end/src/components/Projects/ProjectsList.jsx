import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { projects } from "../../data/dummyprojectdata.json";
const ProjectsList = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Project Name", flex: 1 },
    { field: "access", headerName: "Access", flex: 1 },
    { field: "created", headerName: "Created", flex: 1 },
    { field: "author", headerName: "Author", flex: 1 },
  ];
  return (
    <Box className="projectslist-box">
      {/* <ProjectCard/>
      <Stack  spacing={2}>
      <Pagination className="projectsnav" count={5} variant="outlined" shape="rounded" />
    </Stack> */}
      <Box className="projectstable">
        <DataGrid
          checkboxSelection
          rows={projects}
          columns={columns}
          slots={{toolbar: GridToolbar}}
          sx={{
            '& .MuiDataGrid-root': { fontSize: '13px' },
            '& .MuiDataGrid-columnHeaders': { fontSize: '13px' },
            '& .MuiDataGrid-cell': { fontSize: '13px' },
            '& .MuiDataGrid-toolbarContainer': { fontSize: '13px' } // Toolbar font size
          }}
        />
      </Box>
    </Box>
  );
};

export default ProjectsList;
