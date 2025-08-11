import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


import { Box, Typography, Button, Container } from '@mui/material';

const ImpactSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: 2,
        backgroundColor: '#ffffff',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: '#111',
          }}
        >
          Build What Outlives You
        </Typography>
        <Typography
  variant="body1"
  sx={{
    fontSize: '1.1rem',
    color: '#555',
    mb: 4,
    textAlign: 'left',
  }}
>
  <em>You weren’t meant to just scale a brand.</em><br />
  You were wired to build something that echoes beyond your lifetime.<br />
  In a world chasing algorithms and virality…<br />
  <strong>what you build can still be timeless.</strong>
  <br /><br />

  <strong>📘 What You’ll Discover:</strong><br />
  • How to scale like omnipresence — without burnout<br />
  • How to design systems that multiply without you<br />
  • How to build for legacy, not just launches<br />
  • How to use AI as a multiplier, not a replacement<br />
  • How to embed purpose, values, and structure that outlive you
  <br /><br />

  <strong>✅ For Visionaries Who...</strong><br />
  • Feel called to create more than just content<br />
  • Want to lead without burning out<br />
  • Care about significance more than success<br />
  • Want to build something that survives them<br />
  • Believe their ideas can live forever — if built right
</Typography>

{/* 
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            color: '#555',
            mb: 4,
          }}
        >
          The world is scaling faster than ever — through AI, automation, and systems that don’t sleep.
          <br />
          <br />
          <strong>The Infinite Enterprise</strong> is your blueprint for building ideas that multiply,
          move without you, and echo beyond your lifetime.
        </Typography> */}

        <Button
  variant="contained"
  color="primary"
  size="large"
  href="/read" // goes to PDFViewer component route
  sx={{
    px: 5,
    py: 1.5,
    borderRadius: '999px',
    fontWeight: 600,
    textTransform: 'none',
  }}
    component={RouterLink}
            to="/read"
>
  Start Reading
</Button>

      </Container>
    </Box>
  );
};

export default ImpactSection;
