import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

function Home() {
  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardMedia
            component="img"
            alt="Profile Picture"
            height="200"
            image="https://via.placeholder.com/300x200"
            style={{ borderRadius: '50%' }}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Hi, I'm David Nduati Kabui
            </Typography>
            <Typography variant="body1" component="p">
              A passionate full-stack web and software developer with a strong background in modern web technologies, system analysis, and database management.
            </Typography>
            <Button variant="contained" color="primary" href="#about">
              Learn more about me
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Skills
                </Typography>
                <ul>
                  <li>Web Development: HTML, CSS, JavaScript, ReactJS, Express.js, Node.js</li>
                  <li>Software Development: Python, Java, C++, Data Structures, and Algorithms</li>
                  <li>Machine Learning & AI: Fundamental knowledge and practical application</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Experience
                </Typography>
                <ul>
                  <li>Freelance Web Developer</li>
                  <li>Software Developer Intern at Tech Innovators Inc.</li>
                  <li>Web Developer at The Jitu</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Achievements
                </Typography>
                <ul>
                  <li>Improved website performance by 20%</li>
                  <li>Enhanced user experience by 30%</li>
                  <li>Successfully led the development of a high-impact Library Store application</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;