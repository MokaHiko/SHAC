import { Typography, Grid, Button, Divider } from "@mui/material";
import React from "react";

import { useStyles } from "../styles";
import ProjectImages from "./ProjectImages";
import MouseIcon from "@mui/icons-material/Mouse";
function CompanyCard() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.companyCard}
      id="CompanyCard"
      spacing={5}
    >
      <Grid item xs={6}>
        <Grid
          container
          spacing={5}
          alignItems="center"
          justify="center"
          className={classes.siteRoutes}
        >
          <Grid item md={12}>
            <Button href="#Shac">
              <Typography variant="h1" color="secondary">
                SHAC
              </Typography>
            </Button>
            <Divider />
          </Grid>
          <Grid item md={12}>
            <Button href="#Cana">
              <Typography variant="h1" color="primary">
                CANA
              </Typography>
            </Button>
            <Divider />
          </Grid>
          <Grid item md={12}>
            <Button href="#contact">
              <Typography variant="h1" color="black">
                Contact
              </Typography>
            </Button>
            <Divider />
          </Grid>
          <Grid item md={12}>
            <Typography variant="h6" color="black" display="blo">
              Interested in Working With SHAC?{" "}
              <Button
                href="/work"
                startIcon={<MouseIcon />}
                variant="contained"
                disableElevation
                color="warning"
              >
                Click Here
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <ProjectImages />
      </Grid>
    </Grid>
  );
}

export default CompanyCard;
