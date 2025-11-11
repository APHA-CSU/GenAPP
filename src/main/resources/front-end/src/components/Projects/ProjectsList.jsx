import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { projects } from "../../data/dummyprojectdata.json";
const ProjectsList = () => {
  const projectcolumns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Project Name", flex: 1 },
    { field: "access", headerName: "Access", flex: 1 },
    { field: "created", headerName: "Created", flex: 1 },
    { field: "author", headerName: "Author", flex: 1 },
  ];

  return (
    <Box className="projectslist-box">
      <DataGrid
        checkboxSelection
        rows={projects}
        columns={projectcolumns}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default ProjectsList;
