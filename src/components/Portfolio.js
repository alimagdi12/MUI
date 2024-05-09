import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    minHeight: "100vh",
    padding: "2rem 0",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2rem auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease-in-out",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    "&:hover": {
      transform: "scale(1.05)",
      "& $cardOverlay": {
        opacity: 0.7,
      },
    },
  },
  cardMedia: {
    height: 200,
  },
  cardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  overlayContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    color: "#fff",
    padding: "1rem",
    boxSizing: "border-box",
  },
}));

const projects = [
  {
    name: "Elegant Website",
    description: "A stunning website with elegant design and smooth animations.",
    image: project1,
  },
  {
    name: "Luxury E-Commerce",
    description: "An upscale e-commerce platform offering luxury products and services.",
    image: project2,
  },
  {
    name: "Premium Blog",
    description: "A sophisticated blog featuring high-quality content and beautiful imagery.",
    image: project3,
  },
  {
    name: "Exclusive App",
    description: "A sleek and exclusive mobile app designed for premium users.",
    image: project4,
  },
  {
    name: "Fashion Brand",
    description: "A luxurious fashion brand showcasing the latest trends in haute couture.",
    image: project5,
  },
  {
    name: "Fine Dining Experience",
    description: "An exquisite dining website offering a fine culinary experience.",
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.name}
                  className={classes.cardMedia}
                  image={project.image}
                />
                <div className={classes.cardOverlay}></div>
                <div className={classes.overlayContent}>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </div>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
