import React, { useState } from 'react';
import './content.css';
import Home from './Home'
import Contacts from './Contacts';
import About from './About';
import Projects from './Projects'
import { Stack, Grid, Box, Typography } from "@mui/material";


function Content() {
  const [isActive,setisActive] = useState('/')

  let renderedSection;
  switch (isActive) {
    case 'home':
      renderedSection = <Home />;
      break;
    case 'contacts':
      renderedSection = <Contacts />;
      break;
    case 'projects':
      renderedSection = <Projects />;
      break;
    default:
      renderedSection = <Home />; // Default to Home section if no match
  }
  return (
    <Box sx={{ overflowY: 'auto', height: '76vh' }}> 
      <Grid container spacing={0.2}>
        <Grid item xs={4} sx={{ height: '68vh', overflowY: 'hidden' }}>
          <Box sx={{ backgroundColor: '#ECFFE6', p: 2, borderRadius: 2 }}>
            <Stack direction="column" alignItems="center" spacing={2}>
              <img 
                src='https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTg2NjI4Nzk0MDgxMDkzNDY5/ways-to-show-off-your-thick-thighs.webp' 
                alt='woman'
                loading = 'lazy'
                style={{
                  maxWidth: '100%', 
                  maxHeight: '300px', 
                  objectFit: 'cover', 
                  borderRadius: '2px' 
                }}
              />
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero
                vel ultricies aliquam, nunc nunc lacinia nunc, et lacin
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ overflowY: 'auto', height: '68vh', p: 2, backgroundColor: '#CEDEBD' }}>
          {renderedSection}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Content;