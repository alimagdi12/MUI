import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button, Grid, Paper } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
  coursesContainer: {
    background: "#1a1a1a",
    color: "#fff",
    padding: "4rem 2rem",
    textAlign: "center",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    marginBottom: "2rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "2.5rem",
    color: "#ff9900",
    position: "relative",
    animation: "$moveIn 1s ease-out forwards",
  },
  courseItem: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%", // Ensure all cards have the same height
    justifyContent: "center", // Vertically center the content
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  courseTitle: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#ff9900",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    animation: "$fadeIn 1s ease-out forwards",
  },
  courseDuration: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
    color: "#ccc",
    animation: "$fadeIn 1s ease-out 0.2s forwards",
  },
  "@keyframes moveIn": {
    "0%": {
      transform: "translateY(50px)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  
}));

const Courses = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.coursesContainer}>
      <Typography variant="h2" className={classes.title}>
        Courses
      </Typography>
      <Box component="div">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.courseItem}>
              <Typography variant="h4" className={classes.courseTitle}>
                CISCO CERTIFIED NETWORK ASSOCIATE (CCNA)
              </Typography>
              <Typography variant="h5" className={classes.courseDuration}>
                CISCO, USA (2020 - Present)
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.courseItem}>
              <Typography variant="h4" className={classes.courseTitle}>
                CCNA SECURITY
              </Typography>
              <Typography variant="h5" className={classes.courseDuration}>
                CISCO, USA (2020 - Present)
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.courseItem}>
              <Typography variant="h4" className={classes.courseTitle}>
                COMPTIA NETWORK +
              </Typography>
              <Typography variant="h5" className={classes.courseDuration}>
                COMPTIA, USA (2020 - Present)
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.courseItem}>
              <Typography variant="h4" className={classes.courseTitle}>
                COMPTIA SECURITY +
              </Typography>
              <Typography variant="h5" className={classes.courseDuration}>
                COMPTIA, USA (2020 - Present)
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      
    </Box>
  );
};

export default Courses;
