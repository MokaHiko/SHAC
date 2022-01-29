import { Container, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ProjectSelect() {
  const project = ({ Site, Description, imgUrl }) => {
    return (
      <Card sx={{ maxWidth: "80%", height: "75vh" }}>
        <CardActionArea sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            image={imgUrl}
            alt="green iguana"
            sx={{ height: "80%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Site}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  return (
    <Container size="sm">
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h2" textAlign={"center"} color="secondary">
            SELECT PROJECT
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              {project({
                Site: "Tanjay",
                Description: "Tanjay City Sand And Gravel Project",
                imgUrl:
                  "https://www.mogroup.com/contentassets/7958faee54a14c1c8bff59463f3fd376/lt330d-mobile-cone-crusher-w-person-img-4448.jpg?preset=preset_575x400",
              })}
            </Grid>
            <Grid item xs={4}>
              <Link to="cana" style={{ textDecoration: "none" }}>
                {project({
                  Site: "Cana",
                  Description: "Cana Retreat",
                  imgUrl:
                    "https://scontent.fceb2-2.fna.fbcdn.net/v/t1.18169-9/27073155_713346388864337_9017535849025405487_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeG5uV-NNFJsIwEcZn33jEUiLn8IakPseBIufwhqQ-x4ElxG54D0urjAoO3mHy1_YaGryEouG6Kv_9WQwz8FaGGE&_nc_ohc=__jZw632C7cAX95Jefw&_nc_ht=scontent.fceb2-2.fna&oh=00_AT_JK8ksaOQ4YNltfk2NLrgXp9Rw2PzeHiWNIBCi1PAHMA&oe=6208F621",
                })}
              </Link>
            </Grid>
            <Grid item xs={4}>
              {project({
                Site: "Tubtubon",
                Description: "Tubtubon Site",
                imgUrl:
                  "https://image.shutterstock.com/image-photo/wheel-loader-loads-truck-sand-260nw-1071569927.jpg",
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProjectSelect;
