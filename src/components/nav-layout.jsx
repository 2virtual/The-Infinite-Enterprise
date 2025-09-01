// Layout.jsx
import React, { useState } from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Link, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Twitter, Instagram, LinkedIn, Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // small screen breakpoint

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navLinks = (
    <>
      <MenuItem component={RouterLink} to="/" onClick={handleMenuClose}>Home</MenuItem>
      <MenuItem component={RouterLink} to="/about-author" onClick={handleMenuClose}>Author</MenuItem>
      <MenuItem component={RouterLink} to="/community" onClick={handleMenuClose}>Community</MenuItem>
      <MenuItem
        component="a"
        href="https://twitter.com/yourhandle"
        target="_blank"
        rel="noopener"
        onClick={handleMenuClose}
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <Twitter /> Twitter
      </MenuItem>
      <MenuItem
        component="a"
        href="https://instagram.com/yourhandle"
        target="_blank"
        rel="noopener"
        onClick={handleMenuClose}
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <Instagram /> Instagram
      </MenuItem>
      <MenuItem
        component="a"
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener"
        onClick={handleMenuClose}
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <LinkedIn /> LinkedIn
      </MenuItem>
    </>
  );

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
          justifyContent: isMobile ? 'flex-end' : 'flex-end',
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
        {isMobile ? (
          <>
            <IconButton
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              sx={{ color: 'inherit' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
            >
              {navLinks}
            </Menu>
          </>
        ) : (
          <>
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
              to="/community"
              underline="none"
              sx={{ fontWeight: 500, color: 'inherit' }}
            >
              Community
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
          </>
        )}
      </Box>

      {/* Main Page Content */}
      <Outlet />
    </Box>
  );
};

export default Layout;








// import React from 'react';
// import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
// import { Box, Link, IconButton } from '@mui/material';
// import { Twitter, Instagram, LinkedIn } from '@mui/icons-material';

// const Layout = () => {
//   const location = useLocation();
//   const isHome = location.pathname === '/';

//   return (
//     <Box sx={{ position: 'relative' }}>
//       {/* Global Nav Bar */}
//       <Box
//         component="nav"
//         sx={{
//           position: isHome ? 'absolute' : 'fixed',
//           top: isHome ? 20 : 0,
//           right: isHome ? 20 : 0,
//           width: isHome ? 'auto' : '100%',
//           display: 'flex',
//           justifyContent: isHome ? 'flex-end' : 'flex-end',
//           alignItems: 'center',
//           gap: 3,
//           px: 4,
//           py: isHome ? 0 : 2,
//           zIndex: 10,
//           backgroundColor: isHome ? 'transparent' : '#fff',
//           color: isHome ? '#fff' : '#111',
//           boxShadow: isHome ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.05)',
//         }}
//       >
//         <Link
//   component={RouterLink}
//   to="/"
//   underline="none"
//   color="inherit"
//   sx={{ fontWeight: 500 }}
// >
//   Home
// </Link>
//         <Link
//           component={RouterLink}
//           to="/about-author"
//           underline="none"
//           sx={{ fontWeight: 500, color: 'inherit' }}
//         >
//           Author
//         </Link>

//         <Link
//           component={RouterLink}
//           to="/license"
//           underline="none"
//           sx={{ fontWeight: 500, color: 'inherit' }}
//         >
//           Print License
//         </Link>

//         <IconButton
//           href="https://twitter.com/yourhandle"
//           target="_blank"
//           rel="noopener"
//           sx={{ color: 'inherit' }}
//         >
//           <Twitter />
//         </IconButton>
//         <IconButton
//           href="https://instagram.com/yourhandle"
//           target="_blank"
//           rel="noopener"
//           sx={{ color: 'inherit' }}
//         >
//           <Instagram />
//         </IconButton>
//         <IconButton
//           href="https://linkedin.com/in/yourprofile"
//           target="_blank"
//           rel="noopener"
//           sx={{ color: 'inherit' }}
//         >
//           <LinkedIn />
//         </IconButton>
//       </Box>

//       {/* Main Page Content */}
//       <Outlet />
//     </Box>
//   );
// };

// export default Layout;
