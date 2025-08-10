import React from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Link, IconButton } from '@mui/material';
import { Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Global Nav Bar */}
      <Box
        component="nav"
        sx={{
          position: isHome ? 'absolute' : 'fixed',
          top: isHome ? 20 : 0,
          right: isHome ? 20 : 0,
          width: isHome ? 'auto' : '100%',
          display: 'flex',
          justifyContent: isHome ? 'flex-end' : 'flex-end',
          alignItems: 'center',
          gap: 3,
          px: 4,
          py: isHome ? 0 : 2,
          zIndex: 10,
          backgroundColor: isHome ? 'transparent' : '#fff',
          color: isHome ? '#fff' : '#111',
          boxShadow: isHome ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Link
  component={RouterLink}
  to="/"
  underline="none"
  color="inherit"
  sx={{ fontWeight: 500 }}
>
  Home
</Link>
        <Link
          component={RouterLink}
          to="/about-author"
          underline="none"
          sx={{ fontWeight: 500, color: 'inherit' }}
        >
          Author
        </Link>

        <Link
          component={RouterLink}
          to="/license"
          underline="none"
          sx={{ fontWeight: 500, color: 'inherit' }}
        >
          Print License
        </Link>

        <IconButton
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener"
          sx={{ color: 'inherit' }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener"
          sx={{ color: 'inherit' }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener"
          sx={{ color: 'inherit' }}
        >
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Main Page Content */}
      <Outlet />
    </Box>
  );
};

export default Layout;
