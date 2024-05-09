import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#f0f0f0",
    padding: "2rem",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#333",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
    letterSpacing: "1px",
  },
  infoContainer: {
    marginBottom: "2rem",
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  icon: {
    marginRight: "0.5rem",
    fontSize: "1.2rem",
    verticalAlign: "middle",
  },
  iconHover: {
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "translateX(5px)",
    },
  },
  divider: {
    margin: "2rem 0",
    backgroundColor: "#999",
  },
  socialButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.contactContainer}>
      <Typography variant="h4" className={classes.heading}>
        Contact Me
      </Typography>
      <Box className={classes.infoContainer}>
        <Box
          className={`${classes.contactInfo} ${classes.iconHover}`}
          onClick={() => {
            window.open("mailto:alimagdi12367@gmail.com");
          }}
        >
          <EmailIcon className={classes.icon} />
          <Typography variant="body1" component="p">
            alimagdi12367@gmail.com
          </Typography>
        </Box>
        <Box
          className={`${classes.contactInfo} ${classes.iconHover}`}
          onClick={() => {
            window.open("tel:+201279459896");
          }}
        >
          <PhoneIcon className={classes.icon} />
          <Typography variant="body1" component="p">
            +20 1279459896
          </Typography>
        </Box>
      </Box>
      <Divider className={classes.divider} />
      <Typography variant="body1" component="p">
        Connect with me on social media:
      </Typography>
      <Box className={classes.socialButtons}>
        <Button
          startIcon={<LinkedInIcon />}
          variant="outlined"
          color="primary"
          href="https://www.linkedin.com/in/ali-magdi-46a364193"
          target="_blank"
          rel="noopener noreferrer"className={classes.iconHover}
        >
          LinkedIn
        </Button>
        <Button
          startIcon={<GitHubIcon />}
          variant="outlined"
          color="primary"
          href="https://github.com/alimagdi12"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.iconHover}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;