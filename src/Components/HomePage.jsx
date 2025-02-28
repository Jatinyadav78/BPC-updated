
// import React, { useState, useRef } from "react";
// import * as XLSX from "xlsx";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import CircularProgress from "@mui/material/CircularProgress";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import InputAdornment from "@mui/material/InputAdornment";
// import Chip from "@mui/material/Chip";
// import Popover from "@mui/material/Popover";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
// // Import Material UI icons directly
// import SearchIcon from "@mui/icons-material/Search";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import RestartAltIcon from "@mui/icons-material/RestartAlt";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import dayjs from "dayjs";
// import "./HomePage.css";

// const HomePage = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedDates, setSelectedDates] = useState([dayjs(), dayjs()]);
//   const [showPicker, setShowPicker] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [variationRange, setVariationRange] = useState([null, null]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const filterRef = useRef(null);
//   const rowsPerPage = 10;

//   const columnNames = [
//     "Date",
//     "Time",
//     "Cylinder Sr. No.",
//     "Quarter",
//     "DUE YEAR",
//     "DUE DATE",
//     "SET WEIGHT(kg)",
//     "TARE WEIGHT(kg)",
//     "NET WEIGHT()",
//     "GROSS WEIGHT(kg)",
//     "VARIATION(kg)",
//     "Weight Status",
//     "VALUE LEAK",
//     "ORING LEAK",
//     "SEAL",
//     "BUNG STATUS",
//     "CYLINDER STATUS",
//   ];

//   // Mock data for demonstration
//   const mockData = [
//     {
//       createdAt: dayjs().format("YYYY-MM-DD"),
//       time: "09:00:00",
//       cylinderSrNo: "CYL001",
//       quarter: "Q1",
//       dueYear: "2025",
//       dueDate: "2025-12-31",
//       setWeight: "14.2",
//       tareWeight: "13.2",
//       netWeight: "1.0",
//       grossWeight: "14.2",
//       variation: "0.0",
//       weightStatus: "OK",
//       valueLeak: "NO",
//       oringLeak: "NO",
//       seal: "OK",
//       bungStatus: "OK",
//       cylinderStatus: "PASS"
//     },
//     // Add more mock data as needed
//   ];

//   const fetchData = async () => {
//     setIsLoading(true);
//     try {
//       // Simulate API call with mock data
//       setTimeout(() => {
//         setData(mockData);
//         setFilteredData(mockData);
//         setIsLoading(false);
//       }, 1000);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       alert("Failed to fetch data. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   const applyFilters = () => {
//     fetchData();
//     setShowPicker(false);
//     setFilterAnchorEl(null);
//     setCurrentPage(1);
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredBySearch = filteredData.filter((row) =>
//     row.cylinderSrNo.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredBySearch.length / rowsPerPage);
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentTableData = filteredBySearch.slice(indexOfFirstRow, indexOfLastRow);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleDownload = () => {
//     const workbook = XLSX.utils.book_new();
//     const worksheetData = [
//       columnNames,
//       ...filteredBySearch.map((item) => [
//         item.date || "N/A",
//         item.time || "N/A",
//         item.cylinderSrNo || "N/A",
//         item.quarter || "N/A",
//         item.dueYear || "N/A",
//         item.dueDate || "N/A",
//         item.setWeight || "N/A",
//         item.tareWeight || "N/A",
//         item.netWeight || "N/A",
//         item.grossWeight || "N/A",
//         item.variation || "N/A",
//         item.weightStatus || "N/A",
//         item.valueLeak || "N/A",
//         item.oringLeak || "N/A",
//         item.seal || "N/A",
//         item.bungStatus || "N/A",
//         item.cylinderStatus || "N/A",
//       ]),
//     ];

//     const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
//     XLSX.utils.book_append_sheet(workbook, worksheet, "SQC Report");
//     XLSX.writeFile(workbook, "SQC_Report.xlsx");
//   };

//   const handleReset = () => {
//     setFilteredData([]);
//     setData([]);
//     setSelectedDates([dayjs(), dayjs()]);
//     setSearchQuery("");
//     setVariationRange([null, null]);
//     setShowPicker(false);
//     setFilterAnchorEl(null);
//   };

//   const handleFilterClick = (event) => {
//     setFilterAnchorEl(event.currentTarget);
//   };

//   const handleFilterClose = () => {
//     setFilterAnchorEl(null);
//   };

//   const handleDateRangeClick = () => {
//     setShowPicker(true);
//   };

//   const open = Boolean(filterAnchorEl);
//   const id = open ? 'filter-popover' : undefined;

//   return (
//     <Paper elevation={3} className="table-container">
//       <Box sx={{ p: 2 }}>
//         <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: '#0056b3' }}>
//           Cylinder Quality Control Report
//         </Typography>
        
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 1 }}>
//           <Chip
//             label={`Date Range: ${selectedDates[0].format("YYYY-MM-DD")} to ${selectedDates[1].format("YYYY-MM-DD")}`}
//             onClick={handleDateRangeClick}
//             color="default"
//             icon={<CalendarMonthIcon />}
//             sx={{ 
//               height: '36px', 
//               borderRadius: '4px',
//               backgroundColor: '#f5f5f5',
//               '& .MuiChip-label': { fontWeight: 'medium' }
//             }}
//           />
          
//           <TextField
//             placeholder="Search by Cylinder Sr. No."
//             value={searchQuery}
//             onChange={handleSearch}
//             variant="outlined"
//             size="small"
//             sx={{ flex: 1, minWidth: '200px', maxWidth: '300px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
          
//           <Stack direction="row" spacing={1}>
//             <Chip
//               label="FILTER"
//               icon={<FilterAltIcon />}
//               onClick={handleFilterClick}
//               color="primary"
//               ref={filterRef}
//               sx={{ height: '36px', borderRadius: '4px' }}
//             />
            
//             <Chip
//               label="RESET"
//               icon={<RestartAltIcon />}
//               onClick={handleReset}
//               color="secondary"
//               sx={{ height: '36px', borderRadius: '4px' }}
//             />
            
//             <Chip
//               label="EXPORT"
//               icon={<FileDownloadIcon />}
//               onClick={handleDownload}
//               color="success"
//               sx={{ height: '36px', borderRadius: '4px' }}
//             />
//           </Stack>
//         </Box>
//       </Box>

//       {isLoading && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
//           <CircularProgress />
//         </Box>
//       )}

//       <Popover
//         id={id}
//         open={open}
//         anchorEl={filterAnchorEl}
//         onClose={handleFilterClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//       >
//         <Paper sx={{ p: 2, width: '320px' }}>
//           <Typography variant="h6" sx={{ mb: 2 }}>Filter Options</Typography>
          
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <div className="box-date">
//               <DatePicker
//                 label="Start Date"
//                 value={selectedDates[0]}
//                 onChange={(newValue) => setSelectedDates([newValue, selectedDates[1]])}
//                 slotProps={{ textField: { size: 'small', fullWidth: true } }}
//               />
//               <DatePicker
//                 label="End Date"
//                 value={selectedDates[1]}
//                 onChange={(newValue) => setSelectedDates([selectedDates[0], newValue])}
//                 slotProps={{ textField: { size: 'small', fullWidth: true } }}
//               />
//             </div>

//             <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>Variation Range (kg)</Typography>
//             <div className="variation-filter">
//               <TextField
//                 label="From"
//                 type="number"
//                 value={variationRange[0] || ""}
//                 onChange={(e) => setVariationRange([Math.max(0, e.target.value || 0), variationRange[1]])}
//                 size="small"
//               />
//               <TextField
//                 label="To"
//                 type="number"
//                 value={variationRange[1] || ""}
//                 onChange={(e) => setVariationRange([variationRange[0], Math.max(0, e.target.value || 0)])}
//                 size="small"
//               />
//             </div>
//           </LocalizationProvider>

//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 1 }}>
//             <Button 
//               variant="outlined" 
//               onClick={handleFilterClose}
//             >
//               Cancel
//             </Button>
//             <Button 
//               variant="contained" 
//               color="primary" 
//               onClick={applyFilters}
//             >
//               Apply Filters
//             </Button>
//           </Box>
//         </Paper>
//       </Popover>

//       {showPicker && (
//         <div className="modal-overlay" onClick={() => setShowPicker(false)}>
//           <Paper className="modal-box" onClick={(e) => e.stopPropagation()} elevation={5}>
//             <Typography variant="h6" sx={{ mb: 2 }}>Date Range Selection</Typography>
            
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <div className="box-date">
//                 <DatePicker
//                   label="Start Date"
//                   value={selectedDates[0]}
//                   onChange={(newValue) => setSelectedDates([newValue, selectedDates[1]])}
//                   slotProps={{ textField: { size: 'small', fullWidth: true } }}
//                 />
//                 <DatePicker
//                   label="End Date"
//                   value={selectedDates[1]}
//                   onChange={(newValue) => setSelectedDates([selectedDates[0], newValue])}
//                   slotProps={{ textField: { size: 'small', fullWidth: true } }}
//                 />
//               </div>
//             </LocalizationProvider>

//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 1 }}>
//               <Button 
//                 variant="outlined" 
//                 onClick={() => setShowPicker(false)}
//               >
//                 Cancel
//               </Button>
//               <Button 
//                 variant="contained" 
//                 color="primary" 
//                 onClick={() => {
//                   setShowPicker(false);
//                   applyFilters();
//                 }}
//               >
//                 Apply
//               </Button>
//             </Box>
//           </Paper>
//         </div>
//       )}

//       <Paper elevation={2} sx={{ mx: 2, mb: 2, overflow: 'hidden' }}>
//         <div className="table-wrapper">
//           <div className="frozen-columns">
//             <table>
//               <thead>
//                 <tr>
//                   {columnNames.slice(0, 3).map((name, index) => (
//                     <th key={index}>{name}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentTableData.map((row, rowIndex) => (
//                   <tr key={rowIndex}>
//                     <td>{dayjs(row.createdAt).format("DD-MM-YYYY")}</td>
//                     <td>{dayjs(row.time, "HH:mm:ss").format("HH:mm")}</td>
//                     <td>{row.cylinderSrNo}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="scrollable-table">
//             <table>
//               <thead>
//                 <tr>
//                   {columnNames.slice(3).map((name, index) => (
//                     <th key={index}>{name}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentTableData.map((row, rowIndex) => (
//                   <tr key={rowIndex}>
//                     <td>{row.quarter}</td>
//                     <td>{row.dueYear}</td>
//                     <td>{row.dueDate}</td>
//                     <td>{row.setWeight}</td>
//                     <td>{row.tareWeight}</td>
//                     <td>{row.netWeight}</td>
//                     <td>{row.grossWeight}</td>
//                     <td>{row.variation}</td>
//                     <td>{row.weightStatus}</td>
//                     <td>{row.valueLeak}</td>
//                     <td>{row.oringLeak}</td>
//                     <td>{row.seal}</td>
//                     <td>{row.bungStatus}</td>
//                     <td>{row.cylinderStatus}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </Paper>

//       <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
//         <Stack direction="row" spacing={1}>
//           <Button
//             variant="outlined"
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </Button>
//           {[...Array(totalPages).keys()].map((_, index) => (
//             <Button
//               key={index}
//               variant={currentPage === index + 1 ? "contained" : "outlined"}
//               color="primary"
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </Button>
//           ))}
//           <Button
//             variant="outlined"
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </Button>
//         </Stack>
//       </Box>
//     </Paper>
//   );
// };

// export default HomePage;
















import React, { useState, useRef } from "react";
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
import Chip from "@mui/material/Chip";
import Popover from "@mui/material/Popover";
import ClickAwayListener from "@mui/material/ClickAwayListener";
// Import Material UI icons directly
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const filterRef = useRef(null);
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
    setFilterAnchorEl(null);
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
    setFilterAnchorEl(null);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleDateRangeClick = () => {
    // Open the filter dropdown when date range is clicked
    setFilterAnchorEl(filterRef.current);
  };

  const open = Boolean(filterAnchorEl);
  const id = open ? 'filter-popover' : undefined;

  return (
    <Paper elevation={3} className="table-container">
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: '#0056b3' }}>
          Cylinder Quality Control Report
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 3, 
          flexWrap: 'wrap', 
          gap: 1,
          justifyContent: 'space-between'
        }}>
          <Chip
            label={`Date Range: ${selectedDates[0].format("YYYY-MM-DD")} to ${selectedDates[1].format("YYYY-MM-DD")}`}
            onClick={handleDateRangeClick}
            color="default"
            icon={<CalendarMonthIcon />}
            sx={{ 
              height: '36px', 
              borderRadius: '4px',
              backgroundColor: '#f5f5f5',
              '& .MuiChip-label': { fontWeight: 'medium' }
            }}
          />
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            flexWrap: 'wrap'
          }}>
            <TextField
              placeholder="Search by Cylinder Sr. No."
              value={searchQuery}
              onChange={handleSearch}
              variant="outlined"
              size="small"
              sx={{ width: '240px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            <Chip
              label="FILTER"
              icon={<FilterAltIcon />}
              onClick={handleFilterClick}
              color="primary"
              ref={filterRef}
              sx={{ height: '36px', borderRadius: '4px' }}
            />
            
            <Chip
              label="RESET"
              icon={<RestartAltIcon />}
              onClick={handleReset}
              color="secondary"
              sx={{ height: '36px', borderRadius: '4px' }}
            />
            
            <Chip
              label="EXPORT"
              icon={<FileDownloadIcon />}
              onClick={handleDownload}
              color="success"
              sx={{ height: '36px', borderRadius: '4px' }}
            />
          </Box>
        </Box>
      </Box>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Paper sx={{ p: 2, width: '320px' }}>
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
              onClick={handleFilterClose}
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
      </Popover>

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