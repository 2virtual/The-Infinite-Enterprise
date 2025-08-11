import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button, Grid } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage:
          'url("https://res.cloudinary.com/dmnmyanin/image/upload/v1753597982/javier-miranda-Jn2EaLLYZfY-unsplash_ne4xbv.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: { xs: "50vh", md: "55vh" }, // minHeight instead of fixed height
        py: { xs: 6, md: 10 }, // add vertical padding
        px: 3,
        color: "#fff",
        overflow: "visible", // allow image to show outside if needed
      }}
    >
      <Grid container spacing={2} alignItems="center" sx={{ height: "100%" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Don’t Just Build. Create Legacy.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, maxWidth: 500 }}>
            Learn how to turn your ideas into engines that outlast you — systems
            that inspire, lead, and multiply without your presence.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: 700,
              fontSize: "1rem",
            }}
            component={RouterLink}
            to="/order"
          >
            Get the Book
          </Button>
        </Grid>

        {/* Remove absolute positioning to prevent cutting off */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dphiclnsc/image/upload/v1754721659/openart-image_yDio7nlF_1754721049486_raw_sgmu5m.jpg"
            alt="Book Cover"
            sx={{
              maxWidth: { xs: "70%", md: 320 },
              maxHeight: { xs: "40vh", md: "50vh" },
              borderRadius: 2,
              boxShadow: 6,
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;

// import React from 'react';
// import { Box, Typography, Button, Grid } from '@mui/material';

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
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <Typography variant="h2" sx={{ fontWeight: 700 }}>
//             Don’t Just Build. Create Legacy.
//           </Typography>
//           <Typography variant="h6" sx={{ mt: 2, maxWidth: 500 }}>
//             Learn how to turn your ideas into engines that outlast you — systems that inspire, lead, and multiply without your presence.
//           </Typography>
//           <Button
//   variant="contained"
//   size="large"
//   sx={{ mt: 4, backgroundColor: '#fff', color: '#000', fontWeight: 700, fontSize: '1rem' }}
//   href="#order"
// >
//   Get the Book – $25
// </Button>

//           {/* <Button
//             variant="contained"
//             size="large"
//             sx={{ mt: 4, backgroundColor: '#fff', color: '#000' }}
//             href="#order"
//           >
//             Get the Book
//           </Button> */}
//         </Grid>

//         <Grid item xs={12} md={6} sx={{ position: 'relative', height: '100%' }}>
//           <Box
//             component="img"
//             src="https://res.cloudinary.com/dphiclnsc/image/upload/v1754721659/openart-image_yDio7nlF_1754721049486_raw_sgmu5m.jpg"
//             alt="Book Cover"
//             sx={{
//               position: 'absolute',
//               top: { xs: '20%', md: '10%' },
//               left: { xs: '50%', md: '30%' },
//               transform: 'translateX(-50%)',
//               width: '100%',
//               maxWidth: 350,
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
