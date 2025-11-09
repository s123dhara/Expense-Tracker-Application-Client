import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Add } from "@mui/icons-material";
import { Search } from "lucide-react";

const DataTable = ({
  rows,
  columns,
  pageSize = 5,
  pageSizeOptions = [5, 10, 25],
  hiddenColumns = [],
  height = { xs: 400, md: 500 },
  onChange,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const [searchQuery, setSearchQuery] = useState("");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#8b5cf6" },
      background: {
        default: "#07071a",
        paper: "#171732",
      },
      text: {
        primary: "#f9fafb",
        secondary: "#c7d2fe",
      },
    },
  });

  // Create column visibility model
  const columnVisibilityModel = {};
  hiddenColumns.forEach((col) => {
    columnVisibilityModel[col] = !isSmallScreen;
  });

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange && onChange(searchQuery);
    }, 500); // 300ms delay

    return () => clearTimeout(timer);
  }, [searchQuery, onChange]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            gap: 2,
            mb: 3,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "var(--text-primary)", mb: 0.5 }}
            >
              Categories
            </Typography>
            <Typography variant="body1" color="var(--text-secondary)">
              Manage your expense categories
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              bgcolor: "var(--accent)",
              "&:hover": { bgcolor: "var(--accent-hover)" },
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            Add Category
          </Button>
        </Box>

        {/* Search */}
        <Box sx={{ mb: 3 }}>
          <TextField
            placeholder="Search categories..."
            variant="outlined"
            size="small"
            fullWidth
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            sx={{
              maxWidth: { xs: "100%", sm: 400 },
              "& .MuiOutlinedInput-root": {
                bgcolor: "background.paper",
                "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                "&:hover fieldset": { borderColor: "var(--accent-hover)" },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--text-secondary)",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <Search sx={{ color: "var(--text-secondary)", mr: 1 }} />
              ),
            }}
          />
        </Box>

        <Box
          sx={{
            height,
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: 2,
            border: "1px solid rgba(255,255,255,0.1)",
            "& .MuiDataGrid-root": {
              minWidth: 0,
            },
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize, page: 0 },
              },
              columns: {
                columnVisibilityModel,
              },
            }}
            pageSizeOptions={isSmallScreen ? [] : pageSizeOptions}
            disableRowSelectionOnClick
            sx={{
              border: "none",
              "& .MuiDataGrid-cell": {
                borderColor: "rgba(255,255,255,0.1)",
              },
              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "rgba(14, 14, 36, 0.8)",
                borderColor: "rgba(255,255,255,0.1)",
              },
              "& .MuiDataGrid-row:hover": {
                bgcolor: "rgba(14, 14, 36, 0.5)",
              },
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DataTable;
