import { Grid, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cana from "./Cana/Cana";
import CompanyCard from "./CompanyCard/CompanyCard";
import Contact from "./Contact/Contact";
import Shac from "./SHAC/Shac";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useStyles } from "./styles";
function LandingPage() {
  const classes = useStyles();
  const [showReturn, setShowReturn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset >= window.innerHeight / 2) {
        setShowReturn(true);
      } else {
        setShowReturn(false);
      }
    };

    //clean up
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      onScroll={() => console.log("asstitties")}
    >
      <Grid item className={classes.page}>
        <CompanyCard />
      </Grid>
      <Grid item className={classes.page}>
        <Shac />
      </Grid>
      <Grid item className={classes.page}>
        <Cana />
      </Grid>
      <Grid item className={classes.page}>
        <Contact />
      </Grid>
      <Grid
        item
        style={{ opacity: showReturn ? 1 : 0 }}
        className={classes.returnToTop}
      >
        <Button
          disabled={!showReturn}
          href="#CompanyCard"
          color="warning"
          variant="contained"
          elevation={0}
          startIcon={<KeyboardReturnIcon />}
        >
          <Typography variant="h4">Return To Top</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
