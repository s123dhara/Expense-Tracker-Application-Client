import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Chip,
  useMediaQuery,
} from "@mui/material";
import { Add, Edit, Delete, Search } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CategoryPage = () => {
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const [categories] = useState([
    {
      id: 1,
      name: "Food",
      description: "Food and dining expenses",
      color: "#8b5cf6",
      count: 25,
    },
    {
      id: 2,
      name: "Transport",
      description: "Transportation costs",
      color: "#ec4899",
      count: 12,
    },
    {
      id: 3,
      name: "Entertainment",
      description: "Movies, games, fun activities",
      color: "#06b6d4",
      count: 8,
    },
    {
      id: 4,
      name: "Bills",
      description: "Utilities and monthly bills",
      color: "#f59e0b",
      count: 15,
    },
    {
      id: 5,
      name: "Shopping",
      description: "Clothing and personal items",
      color: "#10b981",
      count: 18,
    },
    {
      id: 6,
      name: "Shopping2",
      description: "Clothing and personal items",
      color: "#10b981",
      count: 18,
    },
    {
      id: 7,
      name: "Shopping3",
      description: "Clothing and personal items",
      color: "#10b981",
      count: 18,
    },
    {
      id: 8,
      name: "Shopping4",
      description: "Clothing and personal items",
      color: "#10b981",
      count: 18,
    },
    {
      id: 9,
      name: "Shopping5",
      description: "Clothing and personal items",
      color: "#10b981",
      count: 18,
    },
    {
      id: 10,
      name: "Shopping6",
      description: "Clothing and personal items",
      color: "#10b981",
      count: 18,
    },
    {
      id: 11,
      name: "Shopping7",
      description: "Clothing and personal items",
      color: "#10b981",
      count: 18,
    },
    {
      id: 12,
      name: "Shopping8",
      description: "Clothing and personal items",
      color: "#10b981",
      count: 18,
    },
    {
      id: 13,
      name: "Shopping9",
      description: "Clothing and personal items",
      color: "#10b981",
      count: 18,
    },
    {
      id: 14,
      name: "Health",
      description: "Medical and healthcare",
      color: "#ef4444",
      count: 6,
    },
  ]);

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

  const columns = [
    {
      field: "name",
      headerName: "Category",
      flex: 1,
      minWidth: 120,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: params.row.color,
            }}
          />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {params.value}
          </Typography>
        </Box>
      ),
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
      minWidth: 200,
      renderCell: (params) => (
        <Typography variant="body2" color="text.secondary">
          {params.value}
        </Typography>
      ),
    },
    {
      field: "count",
      headerName: "Transactions",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={`${params.value}`}
          size="small"
          sx={{
            backgroundColor: "rgba(139, 92, 246, 0.2)",
            color: "#8b5cf6",
            fontSize: "0.75rem",
          }}
        />
      ),
    },
    {
      field: "color",
      headerName: "Color",
      width: 100,
      renderCell: (params) => (
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: 1,
            backgroundColor: params.value,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      renderCell: () => (
        <Box>
          <IconButton
            size="small"
            sx={{
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          >
            <Edit fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            sx={{ color: "text.secondary", "&:hover": { color: "error.main" } }}
          >
            <Delete fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ p: { xs: 2, md: 3 }, bgcolor: "background.default", minHeight: "100vh" }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          {/* Header */}
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
                sx={{ fontWeight: "bold", color: "text.primary", mb: 0.5 }}
              >
                Categories
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage your expense categories
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<Add />}
              sx={{
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
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
              sx={{
                maxWidth: { xs: "100%", sm: 400 },
                "& .MuiOutlinedInput-root": {
                  bgcolor: "background.paper",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                  "&:hover fieldset": { borderColor: "primary.main" },
                  "&.Mui-focused fieldset": { borderColor: "primary.main" },
                },
              }}
              Input={{
                startAdornment: (
                  <Search sx={{ color: "text.secondary", mr: 1 }} />
                ),
              }}
            />
          </Box>

          {/* DataGrid */}
          <Box
            sx={{
              height: { xs: 400, md: 500 },
              width: '100%',
              bgcolor: "background.paper",
              borderRadius: 2,
              border: "1px solid rgba(255,255,255,0.1)",
              '& .MuiDataGrid-root': {
                minWidth: 0,
              }
            }}
          >
            <DataGrid
              rows={categories}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5, page: 0 },
                },
                columns: {
                  columnVisibilityModel: {
                    description: !isSmallScreen,
                    color: !isSmallScreen,
                  },
                },
              }}
              pageSizeOptions={[5, 10, 25]}
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
                // Show columns on larger screens
                "@media (min-width: 768px)": {
                  "& .MuiDataGrid-columnHeader--description": {
                    display: "flex",
                  },
                  "& .MuiDataGrid-cell--description": {
                    display: "flex",
                  },
                  "& .MuiDataGrid-columnHeader--color": {
                    display: "flex",
                  },
                  "& .MuiDataGrid-cell--color": {
                    display: "flex",
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CategoryPage;