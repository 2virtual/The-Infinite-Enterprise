import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url("https://res.cloudinary.com/dmnmyanin/image/upload/v1753597982/javier-miranda-Jn2EaLLYZfY-unsplash_ne4xbv.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: { xs: '60vh', md: '70vh' },
        py: { xs: 6, md: 10 },
        px: 3,
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Don’t Just Build. Create Legacy.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, maxWidth: 500 }}>
            Learn how to turn your ideas into engines that outlast you — systems that inspire, lead, and multiply without your presence.
          </Typography>
          <Button
  variant="contained"
  size="large"
  sx={{ mt: 4, backgroundColor: '#fff', color: '#000', fontWeight: 700, fontSize: '1rem' }}
  href="#order"
>
  Get the Book – $25
</Button>

          {/* <Button
            variant="contained"
            size="large"
            sx={{ mt: 4, backgroundColor: '#fff', color: '#000' }}
            href="#order"
          >
            Get the Book
          </Button> */}
        </Grid>

        <Grid item xs={12} md={6} sx={{ position: 'relative', height: '100%' }}>
          <Box
            component="img"
            src="https://res.cloudinary.com/dphiclnsc/image/upload/v1754721659/openart-image_yDio7nlF_1754721049486_raw_sgmu5m.jpg"
            alt="Book Cover"
            sx={{
              position: 'absolute',
              top: { xs: '20%', md: '10%' },
              left: { xs: '50%', md: '30%' },
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: 350,
              boxShadow: 6,
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;









// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Box, Typography, Button, Grid, Link, IconButton } from '@mui/material';
// import { Twitter, Instagram, LinkedIn } from '@mui/icons-material';

// const HeroBanner = () => {
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         backgroundImage: 'url("https://res.cloudinary.com/dmnmyanin/image/upload/v1753597982/javier-miranda-Jn2EaLLYZfY-unsplash_ne4xbv.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         minHeight: { xs: '60vh', md: '70vh' },
//         py: { xs: 6, md: 10 },
//         px: 3,
//         color: '#fff',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Top Right Nav */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           display: 'flex',
//           alignItems: 'center',
//           gap: 3,
//           zIndex: 2,
//         }}
//       >
//         <Link href="/about-author" underline="none" color="inherit" sx={{ fontWeight: 500 }}>
//           About Author
//         </Link>
//         <Link href="#license" underline="none" color="inherit" sx={{ fontWeight: 500 }}>
//           Print License
//         </Link>
//         <IconButton
//           href="https://twitter.com/yourhandle"
//           target="_blank"
//           rel="noopener"
//           sx={{ color: '#fff' }}
//         >
//           <Twitter />
//         </IconButton>
//         <IconButton
//           href="https://instagram.com/yourhandle"
//           target="_blank"
//           rel="noopener"
//           sx={{ color: '#fff' }}
//         >
//           <Instagram />
//         </IconButton>
//         <IconButton
//           href="https://linkedin.com/in/yourprofile"
//           target="_blank"
//           rel="noopener"
//           sx={{ color: '#fff' }}
//         >
//           <LinkedIn />
//         </IconButton>
//       </Box>

//       {/* Main Content */}
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <Typography variant="h2" sx={{ fontWeight: 700 }}>
//             Don’t Just Build. Create Legacy.
//           </Typography>
//           <Typography variant="h6" sx={{ mt: 2, maxWidth: 500 }}>
//             Learn how to turn your ideas into engines that outlast you — systems that inspire, lead, and multiply without your presence.
//           </Typography>
//           <Button
//             variant="contained"
//             size="large"
//             sx={{ mt: 4, backgroundColor: '#fff', color: '#000' }}
//             href="#order"
//           >
//             Get the Book
//           </Button>
//         </Grid>

//         <Grid item xs={12} md={6} sx={{ position: 'relative', height: '100%' }}>
//           <Box
//             component="img"
//             src="https://res.cloudinary.com/dmnmyanin/image/upload/v1753594197/infiniteImage_xf9slx.jpg"
//             alt="Book Cover"
//             sx={{
//               position: 'absolute',
//               top: { xs: '20%', md: '10%' },
//               left: { xs: '50%', md: '30%' },
//               transform: 'translateX(-50%)',
//               width: '100%',
//               maxWidth: 300,
//               boxShadow: 6,
//               borderRadius: 2,
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default HeroBanner;

