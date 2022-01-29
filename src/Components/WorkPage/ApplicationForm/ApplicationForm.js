import { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Divider,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import React from "react";
import useSubmit from "../../../CustomHooks/useSubmit";

function ApplicationForm() {
  const submission = useSubmit();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Male");
  const [position, setPosition] = useState("SHAC Staff");
  const [mobile, setMobile] = useState(0);

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handlePosition = (e) => setPosition(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      Name: firstName + " " + lastName,
      Gender: gender,
      Position: position,
      Mobile: parseFloat(mobile),
    };
    submission.submit(
      "https://localhost:44363/api/shac/employees",
      "post",
      newEmployee
    );

    setFirstName("");
    setLastName("");
    setGender("");
    setPosition("");
    setMobile("");
  };
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant="h1">Application Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Full name</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth={true}
                required
                value={firstName}
                onChange={handleFirstName}
                label="First Name"
                helperText="Please enter your first name"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth={true}
                required
                value={lastName}
                onChange={handleLastName}
                label="Last Name"
                helperText="Please enter your last name"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
                value={gender}
                onChange={handleGender}
                required
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-label">
                Desired Position
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={position}
                onChange={handlePosition}
                label="Age"
                fullWidth
                required
              >
                <MenuItem value={"Driver"}>Driver</MenuItem>
                <MenuItem value={"Maid"}>Maid</MenuItem>
                <MenuItem value={"Cana Staff"}>Cana Staff</MenuItem>
                <MenuItem value={"SHAC Staff"}>SHAC Staff</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={mobile}
                required
                onChange={handleMobile}
                fullWidth
                label="mobile number"
                helperText="Enter Mobile Number Here"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="add any additional info here"
                helperText="optional"
                required={false}
              />
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Link to="/work" style={{ textDecoration: "none" }}>
                <Button
                  startIcon={<ArrowBackIcon />}
                  fullWidth
                  size="large"
                  color="warning"
                  elevation={0}
                  variant="contained"
                >
                  Go Back
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                startIcon={<KeyboardArrowUpIcon />}
                fullWidth
                size="large"
                elevation={0}
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default ApplicationForm;
