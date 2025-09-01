// src/components/QuotesPopover.jsx
import React, { useState } from 'react';
import { Box, Typography, Popover, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const QuotesPopover = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const quotes = [
    "Trust is the most under-discussed scaling force in business.",
    "Timeless intelligence means building for legacy, not just leverage.",
    "If it dies with you, it was never a legacy — only a performance.",
    "The future won’t be dominated by AI alone — It will be led by those who know how to think clearly, design with depth, and scale with conscience.",
    "When your idea becomes infrastructure, you don’t need to be present in every room — your design already is.",
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