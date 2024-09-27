import React from 'react';
import { Grid, Typography, Avatar, List, ListItem, ListItemText, Button } from '@material-ui/core';

function About() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">About Me</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          I'm David Nduati, a passionate full-stack web and software developer with a strong background in modern web technologies, system analysis, and database management.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Avatar src="https://via.placeholder.com/300x200" alt="Profile Picture" style={{ borderRadius: '50%' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">Skills</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Web Development" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Software Development" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Machine Learning & AI" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">Experience</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Freelance Web Developer" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Software Developer Intern at Tech Innovators Inc." />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">Achievements</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Improved website performance by 20%" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Enhanced user experience by 30%" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" href="#contact">
          Get in Touch
        </Button>
      </Grid>
    </Grid>
  );
}

export default About;