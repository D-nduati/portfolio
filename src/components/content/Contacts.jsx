import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

function Contacts() {
  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Get in Touch
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="p">
          You can also reach me through:
        </Typography>
        <ul>
          <li>
            <a href={`mailto:${'davidnduati78@gmail.com'}`}>
              davidnduati78@gmail.com
            </a>
          </li>
          <li>
            <a href={`tel:${'+254 794 280996'}`}>
              +254 794 280996
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/davidnduati">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/davidnduati">
              GitHub
            </a>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Contacts;