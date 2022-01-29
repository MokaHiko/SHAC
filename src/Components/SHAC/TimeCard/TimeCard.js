import * as React from "react";
import { useState, useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Paper from "@mui/material/Paper";
import { Box, Button, Grid, Select, MenuItem, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useStyles } from "./styles";
import useClock from "../../../CustomHooks/useClock";
import usePostFetch from "../../../CustomHooks/usePostFetch";
import useSubmit from "../../../CustomHooks/useSubmit"
import useFetch from "../../../CustomHooks/useFetch";

 const timeRequestBody =
  {
    TimeIn: "2022-01-27"
  }
export default function TimeCard() {
  const classes = useStyles();

  const clock = useClock();

  const allEmployees = useFetch("https://localhost:44363/api/shac/employees");
  const [currentEmployee, setCurrentEmployee] = useState("");
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  const {response, loading, error} = usePostFetch("https://localhost:44363/api/shac/timecard/employees", "post", timeRequestBody);
  const submit = useSubmit();

  const handleChange = (e) => {
    setCurrentEmployee(e.target.value);
  };

  const handleAddToTimeCard = (e) =>
  {
    e.preventDefault();
    setShowAddEmployee(false);
    console.log(currentEmployee);
    const newEmployeeInTimeCard = {
        EmployeeID : currentEmployee,
        TimeIn: clock.apiTime,
        TimeOut: clock.apiTime
    };
    console.log(newEmployeeInTimeCard);
    submit.submit("https://localhost:44363/api/shac/timecard", "POST", newEmployeeInTimeCard);
  }

  const employeeSelect = () => {
    return Object.keys(allEmployees.data).map((id) => {
        return (
          <MenuItem key={allEmployees.data[id].id} value={allEmployees.data[id].id}>
            <Grid container>
              <Grid item xs={2}>
                {allEmployees.data[id].id}
              </Grid>
              <Grid item xs={2}>
                {allEmployees.data[id].name}
              </Grid>
              <Grid item xs={2}>
                {allEmployees.data[id].gender}
              </Grid>
              <Grid item xs={2}>
                {allEmployees.data[id].mobile}
              </Grid>
              <Grid item xs={2}>
                {allEmployees.data[id].position}
              </Grid>
              <Grid item xs={2}>
                {`${
                  clock.stringTime
                }`}
              </Grid>
            </Grid>
          </MenuItem>
        );
      })}

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">CANA</Typography>
            {`${clock.stringDate} ${clock.stringTime} `}
        </Grid>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="large"
                  aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHead}>
                        Employee #ID
                      </TableCell>
                      <TableCell align="center" className={classes.tableHead}>
                        Name
                      </TableCell>
                      <TableCell align="center" className={classes.tableHead}>
                        Gender
                      </TableCell>
                      <TableCell align="center" className={classes.tableHead}>
                        Position
                      </TableCell>
                      <TableCell align="center" className={classes.tableHead}>
                        Time In
                      </TableCell>
                      <TableCell align="center" className={classes.tableHead}>
                        Time out
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {!response ? <></> : Object.keys(response).map((key, idx) => (
                      <TableRow
                        key={idx}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {response[key].id}
                        </TableCell>
                        <TableCell align="center">{response[key].name}</TableCell>
                        <TableCell align="center">{response[key].gender}</TableCell>
                        <TableCell align="center">
                          {response[key].position}
                        </TableCell>
                        <TableCell align="center">{response[key].timeIn}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} className={classes.addItem}>
              <Accordion expanded={showAddEmployee} elevation={showAddEmployee ? 3 : 0}>
                <AccordionSummary>
                  <Button
                    startIcon={<AddIcon style={{ fontSize: "2em" }} />}
                    style={{ justifyContent: "flex-start" }}
                    fullWidth
                    variant={!showAddEmployee ? "contained" : "outlined"}
                    onClick={() =>setShowAddEmployee(val => !val)}
                  >Add Employee To TimeCard</Button>
                </AccordionSummary>
                  <AccordionDetails>
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <Select
                            label="Employee"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currentEmployee}
                            onChange={handleChange}
                            fullWidth
                          >
                            {employeeSelect()}
                          </Select>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            startIcon={<AddIcon />}
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={handleAddToTimeCard}
                          >
                            Punch In
                          </Button>
                        </Grid>
                      </Grid>
                  </AccordionDetails>
              </Accordion>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
