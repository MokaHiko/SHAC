import React from "react";
import { Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { useStyles } from "../styles";

function Contact() {
  const classes = useStyles();
  const contactInfoList = ({ email, landline, phone }) => {
    return (
      <List sx={{ width: "100%", alignItems: "center" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="landline" secondary={landline} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="phone" secondary={phone} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="email" secondary={email} />
        </ListItem>
      </List>
    );
  };
  return (
    <Grid container id="contact" className={classes.page} spacing={8}>
      <Grid item xs={12}>
        <Typography variant="h1">Contact Us</Typography>
        <Grid container>
          <Grid item xs={6}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12} md={12}>
                <Typography variant="h3" color="secondary">
                  {" "}
                  SHAC{" "}
                </Typography>
                {contactInfoList({
                  email: "michaelsolon@sugar-hills.com",
                  landline: "422-6263",
                  phone: "09173206265",
                })}
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="h3" color="primary">
                  Cana{" "}
                </Typography>
                {contactInfoList({
                  email: "christiansolon@sugar-hills.com",
                  landline: "422-6263",
                  phone: "09173206265",
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654.7530851382041!2d123.23666102516782!3d9.448708690765388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab79f5414a7431%3A0x9d5731b98ab7f37e!2sCana%20Retreat!5e0!3m2!1sen!2sph!4v1642326937705!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
