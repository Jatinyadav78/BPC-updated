
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
// Import Material UI icons directly
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import dayjs from "dayjs";
import "./HomePage.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDates, setSelectedDates] = useState([dayjs(), dayjs()]);
  const [showPicker, setShowPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [variationRange, setVariationRange] = useState([null, null]);
  const [isLoading, setIsLoading] = useState(false);
  const rowsPerPage = 10;

  const columnNames = [
    "Date",
    "Time",
    "Cylinder Sr. No.",
    "Quarter",
    "DUE YEAR",
    "DUE DATE",
    "SET WEIGHT(kg)",
    "TARE WEIGHT(kg)",
    "NET WEIGHT()",
    "GROSS WEIGHT(kg)",
    "VARIATION(kg)",
    "Weight Status",
    "VALUE LEAK",
    "ORING LEAK",
    "SEAL",
    "BUNG STATUS",
    "CYLINDER STATUS",
  ];

  // Mock data for demonstration
  const mockData = [
    {
      createdAt: dayjs().format("YYYY-MM-DD"),
      time: "09:00:00",
      cylinderSrNo: "CYL001",
      quarter: "Q1",
      dueYear: "2025",
      dueDate: "2025-12-31",
      setWeight: "14.2",
      tareWeight: "13.2",
      netWeight: "1.0",
      grossWeight: "14.2",
      variation: "0.0",
      weightStatus: "OK",
      valueLeak: "NO",
      oringLeak: "NO",
      seal: "OK",
      bungStatus: "OK",
      cylinderStatus: "PASS"
    },
    // Add more mock data as needed
  ];

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Simulate API call with mock data
      setTimeout(() => {
        setData(mockData);
        setFilteredData(mockData);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Please try again.");
      setIsLoading(false);
    }
  };

  const applyFilters = () => {
    fetchData();
    setShowPicker(false);
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBySearch = filteredData.filter((row) =>
    row.cylinderSrNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBySearch.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentTableData = filteredBySearch.slice(indexOfFirstRow, indexOfLastRow);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDownload = () => {
    const workbook = XLSX.utils.book_new();
    const worksheetData = [
      columnNames,
      ...filteredBySearch.map((item) => [
        item.date || "N/A",
        item.time || "N/A",
        item.cylinderSrNo || "N/A",
        item.quarter || "N/A",
        item.dueYear || "N/A",
        item.dueDate || "N/A",
        item.setWeight || "N/A",
        item.tareWeight || "N/A",
        item.netWeight || "N/A",
        item.grossWeight || "N/A",
        item.variation || "N/A",
        item.weightStatus || "N/A",
        item.valueLeak || "N/A",
        item.oringLeak || "N/A",
        item.seal || "N/A",
        item.bungStatus || "N/A",
        item.cylinderStatus || "N/A",
      ]),
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "SQC Report");
    XLSX.writeFile(workbook, "SQC_Report.xlsx");
  };

  const handleReset = () => {
    setFilteredData([]);
    setData([]);
    setSelectedDates([dayjs(), dayjs()]);
    setSearchQuery("");
    setVariationRange([null, null]);
    setShowPicker(false);
  };

  return (
    <Paper elevation={3} className="table-container">
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: '#0056b3' }}>
          Cylinder Quality Control Report
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Paper
            elevation={1}
            sx={{
              p: 1,
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              mr: 2,
              backgroundColor: '#f5f5f5'
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              Date Range: {selectedDates[0].format("YYYY-MM-DD")} to {selectedDates[1].format("YYYY-MM-DD")}
            </Typography>
          </Paper>
          
          <TextField
            placeholder="Search by Cylinder Sr. No."
            value={searchQuery}
            onChange={handleSearch}
            variant="outlined"
            size="small"
            sx={{ width: '300px', mr: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          
          <Stack direction="column" spacing={1}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FilterAltIcon />}
              onClick={() => setShowPicker(true)}
              sx={{ width: '120px' }}
            >
              Filter
            </Button>
            
            <Button
              variant="contained"
              color="secondary"
              startIcon={<RestartAltIcon />}
              onClick={handleReset}
              sx={{ width: '120px' }}
            >
              Reset
            </Button>
            
            <Button
              variant="contained"
              color="success"
              startIcon={<FileDownloadIcon />}
              onClick={handleDownload}
              sx={{ width: '120px' }}
            >
              Export
            </Button>
          </Stack>
        </Box>
      </Box>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {showPicker && (
        <div className="modal-overlay" onClick={() => setShowPicker(false)}>
          <Paper className="modal-box" onClick={(e) => e.stopPropagation()} elevation={5}>
            <Typography variant="h6" sx={{ mb: 2 }}>Filter Options</Typography>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="box-date">
                <DatePicker
                  label="Start Date"
                  value={selectedDates[0]}
                  onChange={(newValue) => setSelectedDates([newValue, selectedDates[1]])}
                  slotProps={{ textField: { size: 'small', fullWidth: true } }}
                />
                <DatePicker
                  label="End Date"
                  value={selectedDates[1]}
                  onChange={(newValue) => setSelectedDates([selectedDates[0], newValue])}
                  slotProps={{ textField: { size: 'small', fullWidth: true } }}
                />
              </div>

              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>Variation Range (kg)</Typography>
              <div className="variation-filter">
                <TextField
                  label="From"
                  type="number"
                  value={variationRange[0] || ""}
                  onChange={(e) => setVariationRange([Math.max(0, e.target.value || 0), variationRange[1]])}
                  size="small"
                />
                <TextField
                  label="To"
                  type="number"
                  value={variationRange[1] || ""}
                  onChange={(e) => setVariationRange([variationRange[0], Math.max(0, e.target.value || 0)])}
                  size="small"
                />
              </div>
            </LocalizationProvider>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 1 }}>
              <Button 
                variant="outlined" 
                onClick={() => setShowPicker(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={applyFilters}
              >
                Apply Filters
              </Button>
            </Box>
          </Paper>
        </div>
      )}

      <Paper elevation={2} sx={{ mx: 2, mb: 2, overflow: 'hidden' }}>
        <div className="table-wrapper">
          <div className="frozen-columns">
            <table>
              <thead>
                <tr>
                  {columnNames.slice(0, 3).map((name, index) => (
                    <th key={index}>{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{dayjs(row.createdAt).format("DD-MM-YYYY")}</td>
                    <td>{dayjs(row.time, "HH:mm:ss").format("HH:mm")}</td>
                    <td>{row.cylinderSrNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="scrollable-table">
            <table>
              <thead>
                <tr>
                  {columnNames.slice(3).map((name, index) => (
                    <th key={index}>{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{row.quarter}</td>
                    <td>{row.dueYear}</td>
                    <td>{row.dueDate}</td>
                    <td>{row.setWeight}</td>
                    <td>{row.tareWeight}</td>
                    <td>{row.netWeight}</td>
                    <td>{row.grossWeight}</td>
                    <td>{row.variation}</td>
                    <td>{row.weightStatus}</td>
                    <td>{row.valueLeak}</td>
                    <td>{row.oringLeak}</td>
                    <td>{row.seal}</td>
                    <td>{row.bungStatus}</td>
                    <td>{row.cylinderStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {[...Array(totalPages).keys()].map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "contained" : "outlined"}
              color="primary"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outlined"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default HomePage;
