import { Grid, Button, Typography, Card, CardContent } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";

function WorkPage() {
  const classes = useStyles();
  return (
    <Card elevation={4}>
      <CardContent>
        <Grid
          className={classes.page}
          spacing={4}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h1" color="primary" textAlign={"center"}>
              SHAC
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/work/application" style={{ textDecoration: "none" }}>
              <Button
                color="warning"
                startIcon={<AddBoxIcon style={{ fontSize: "64" }} />}
                size="large"
                variant="contained"
              >
                <Typography variant="h2">New Employee</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/work/projects" style={{ textDecoration: "none" }}>
              <Button
                startIcon={<LocalShippingIcon style={{ fontSize: "64" }} />}
                color="info"
                size="large"
                variant="contained"
              >
                <Typography variant="h2">Existing Employee</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item className={classes.returnToTop}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                color="warning"
                variant="outlined"
                elevation={0}
                startIcon={<KeyboardReturnIcon />}
              >
                <Typography variant="h4">Go Back</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WorkPage;
