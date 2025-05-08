import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { pathogens } from "../../data/dummydashbdata.json";
import Box from "@mui/material/Box";

const InformDashbTable = () => {
  const dashbcolumns = [
    { field: "id", headerName: "ID" },
    { field: "hosttype", headerName: "Host Type", flex: 1 },
    { field: "hostspecies", headerName: "Host Species", flex: 1 },
    { field: "pathogen", headerName: "Pathogen", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "reference_genome", headerName: "Reference Genome", flex: 1 },
    { field: "lastupdated", headerName: "Last Updated", flex: 1 },
    { field: "views", headerName: "Views", flex: 1 },
    { field: "region", headerName: "Region", flex: 1 },
    { field: "collectionYear", headerName: "Collection Year", flex: 1 },
  ];

  return (
    <Box className="dashbtable-box">
      <DataGrid
        checkboxSelection
        rows={pathogens}
        columns={dashbcolumns}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default InformDashbTable;
