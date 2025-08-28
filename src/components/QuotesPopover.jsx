// src/components/QuotesPopover.jsx
import React, { useState } from 'react';
import { Box, Typography, Popover, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const QuotesPopover = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const quotes = [
    "You weren't meant to replicate what already exists. You were meant to originate.",
    "You're not here just to make a living. You're here to build something that outlives you.",
    "The world doesn't need more influencers. It needs architects of eternity.",
    "Some ideas can live forever — if they're built with the right blueprint.",
    "You weren't designed to simply function — you were designed to influence."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      sx={{ display: 'inline-block', cursor: 'pointer' }}
    >
      {children}

      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        sx={{
          pointerEvents: 'none',
          mt: 2, // adds space above popover
        }}
        PaperProps={{
          sx: {
            p: 2,
            width: 350, // wider popover
            maxWidth: '90vw',
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: 2,
            boxShadow: 4,
            pointerEvents: 'auto', // allows interaction
          }
        }}
      >
        <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.5, mb: 1 }}>
          "{randomQuote}"
        </Typography>
        <Typography
          variant="caption"
          component={RouterLink}
          to="/infinite-enterprise/quotes"
          sx={{
            display: 'block',
            textAlign: 'right',
            color: 'primary.main',
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          More quotes →
        </Typography>
      </Popover>
    </Box>
  );
};

export default QuotesPopover;