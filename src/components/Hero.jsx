// src/components/HeroBanner.jsx
import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Grid
} from "@mui/material";
import QuotesPopover from "./QuotesPopover";

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
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        minHeight: { xs: "50vh", md: "55vh" },
        py: { xs: 8, md: 12 },
        px: 3,
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 2, height: "100%" }}>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h1" sx={{ 
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1.2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
          }}>
            Don’t Just Build. <br />
            <Box component="span" sx={{ color: "primary.light" }}>
              Create Legacy.
            </Box>
          </Typography>

          <Typography variant="h6" sx={{ 
            mt: 3, 
            maxWidth: 500,
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            opacity: 0.95
          }}>
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
              px: 4,
              py: 1.5,
              boxShadow: 3,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 4
              }
            }}
            component={RouterLink}
            to="/order"
            aria-label="Get The Infinite Enterprise book"
          >
            Get the Book
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            mt: { xs: 4, md: 0 }
          }}
        >
          <QuotesPopover>
            <Box
              component="img"
              src="https://res.cloudinary.com/dphiclnsc/image/upload/v1755272387/book_cover_2_fhc7x3.png"
              alt="The Infinite Enterprise - Ideas That Outlive You"
              loading="eager"
              sx={{
                maxWidth: { xs: "70%", md: "100%" },
                width: { xs: "220px", sm: "260px", md: "300px" },
                maxHeight: { xs: "40vh", md: "60vh" },
                borderRadius: 3,
                boxShadow: 8,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
                objectFit: "contain",
              }}
            />
          </QuotesPopover>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;








// import React from "react";
// import { Link as RouterLink } from 'react-router-dom';
// import { Box, Typography, Button, Grid } from "@mui/material";

// const HeroBanner = () => {
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         backgroundImage:
//           'url("https://res.cloudinary.com/dmnmyanin/image/upload/v1753597982/javier-miranda-Jn2EaLLYZfY-unsplash_ne4xbv.jpg")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: { xs: "50vh", md: "55vh" }, // minHeight instead of fixed height
//         py: { xs: 6, md: 10 }, // add vertical padding
//         px: 3,
//         color: "#fff",
//         overflow: "visible", // allow image to show outside if needed
//       }}
//     >
//       <Grid container spacing={2} alignItems="center" sx={{ height: "100%" }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h2" sx={{ fontWeight: 700 }}>
//             Don’t Just Build. Create Legacy.
//           </Typography>
//           <Typography variant="h6" sx={{ mt: 2, maxWidth: 500 }}>
//             Learn how to turn your ideas into engines that outlast you — systems
//             that inspire, lead, and multiply without your presence.
//           </Typography>

//           <Button
//             variant="contained"
//             size="large"
//             sx={{
//               mt: 4,
//               backgroundColor: "#fff",
//               color: "#000",
//               fontWeight: 700,
//               fontSize: "1rem",
//             }}
//             component={RouterLink}
//             to="/order"
//           >
//             Get the Book
//           </Button>
//         </Grid>

//         {/* Remove absolute positioning to prevent cutting off */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             display: "flex",
//             justifyContent: { xs: "center", md: "flex-start" },
//             alignItems: "center",
//           }}
//         >
//           <Box
//             component="img"
//             src="https://res.cloudinary.com/dphiclnsc/image/upload/v1755272387/book_cover_2_fhc7x3.png"
//             alt="Book Cover"
//             sx={{
//               maxWidth: { xs: "70%", md: 320 },
//               maxHeight: { xs: "40vh", md: "50vh" },
//               borderRadius: 2,
//               boxShadow: 6,
//               objectFit: "contain",
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default HeroBanner;

