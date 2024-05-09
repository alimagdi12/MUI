import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  educationContainer: {
    background: "#233",
    color: "#fff",
    padding: "4rem 2rem",
    textAlign: "center",
  },
  title: {
    marginBottom: "2rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "2.5rem",
  },
  educationCard: {
    background: "#444",
    borderRadius: "10px",
    padding: "2rem",
    marginBottom: "2rem",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  institution: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  duration: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
    color: "#ccc",
  },
  description: {
    fontSize: "1rem",
  },
}));

const Education = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.educationContainer}>
      <Typography variant="h2" className={classes.title}>
        Education
      </Typography>
      <Box component="div" className={classes.educationCard}>
        <Typography variant="h4" className={classes.institution}>
          ITI - Web & UI Development
        </Typography>
        <Typography variant="h5" className={classes.duration}>
          9 Months Program
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Integrated Technology Institute (ITI) is a leading technical training institute that offers a comprehensive 9-month program in Web & UI Development. The program covers HTML, CSS, JavaScript, React, and other essential technologies, equipping students with the skills needed for a successful career in web development.
        </Typography>
      </Box>
      <Box component="div" className={classes.educationCard}>
        <Typography variant="h4" className={classes.institution}>
          Faculty of Commerce, English Section, PTS
        </Typography>
        <Typography variant="h5" className={classes.duration}>
          Bachelor's Degree
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Faculty of Commerce, English Section, PortSaid university (PTS) offers a rigorous Bachelor's Degree program. The curriculum includes courses in accounting, finance, management, and economics, providing students with a solid foundation in business studies and preparing them for diverse career opportunities in the corporate world.
        </Typography>
      </Box>
    </Box>
  );
};

export default Education;
