import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
/*

*/
function Classes() {
  const columns = [
    { field: "id", headerName: "", width: 90, editable: false },
    {
      field: "NameSubject",
      headerName: "اسم المادة",
      width: 150,
      editable: false,
      headerClassName: "header",
    },
    {
      field: "NameTeacher",
      headerName: "اسم الأستاذ",
      width: 150,
      editable: false,
      headerClassName: "header",
    },
    {
      field: "time",
      headerName: "التوقيت/التاريخ",
      width: 160,
      editable: false,
      headerClassName: "header",
    },
    {
      field: "button",
      headerName: "",

      sortable: false,
      headerClassName: "header",
      renderCell: () => (
        <Button variant="contained" color="primary">
          إنضمام
        </Button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      NameSubject: "math",
      NameTeacher: "roaa",
      time: "sunday at 9:00",
    },
    {
      id: 2,
      NameSubject: "math",
      NameTeacher: "roaa",
      time: "sunday at 9:00",
    },
    {
      id: 3,
      NameSubject: "math",
      NameTeacher: "roaa",
      time: "sunday at 9:00",
    },
    {
      id: 4,
      NameSubject: "math",
      NameTeacher: "roaa",
      time: "sunday at 9:00",
    },
    {
      id: 5,
      NameSubject: "math",
      NameTeacher: "roaa",
      time: "sunday at 9:00",
    },
    {
      id: 6,
      NameSubject: "math",
      NameTeacher: "roaa",
      time: "sunday at 9:00",
    },
    {
      id: 7,
      NameSubject: "math",
      NameTeacher: "roaa",
      time: "sunday at 9:00",
    },
    {
      id: 8,
      NameSubject: "math",
      NameTeacher: "roaa",
      time: "sunday at 9:00",
    },
    {
      id: 9,
      NameSubject: "math",
      NameTeacher: "roaa",
      time: "sunday at 9:00",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "8px",
      }}>
      <DataGrid
        sx={{
          border: 2,
          fontSize: "16px",
          borderColor: "transparent",
          "& .header": {
            fontSize: "18px",
            fontWeight: "bold",
          },
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
}

export default Classes;
