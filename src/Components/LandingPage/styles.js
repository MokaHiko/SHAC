import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},
  page: {
    height: "100vh",
  },
  companyCard: {
    height: "100%",
  },
  siteRoutes: {
    position: "relative",
    top: "25vh",
  },
  returnToTop: {
    opacity: "1",
    position: "fixed",
    bottom: "0px",
    transition: "all 1s ease",
  },
}));
