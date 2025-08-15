import { Box, Typography, Grid } from '@mui/material';

const books = [
  { title: 'The Infinite Enterprise (Main Book)', img: 'https://res.cloudinary.com/dphiclnsc/image/upload/v1755272387/book_cover_2_fhc7x3.png' },
  { title: 'The Infinite Enterprise Workbook', img: 'https://res.cloudinary.com/dphiclnsc/image/upload/v1754723593/openart-image_30vcfTnh_1754723434638_raw_ysembz.jpg' },
];

const ShowcaseBooks = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}
      >
        The Infinite Enterprise Bundle
      </Typography>

      {/* Accent Bar */}
      <Box
        sx={{
          width: 80,
          height: 4,
          mx: 'auto',
          mb: 2,
          borderRadius: 2,
          background: 'linear-gradient(90deg, #ff6f61, #ffca28)',
        }}
      />

      {/* Subtitle */}
      <Typography variant="subtitle1" align="center" sx={{ mb: 6, opacity: 0.9 }}>
        Get the <strong>Workbook FREE</strong> when you buy the Main Book for just{' '}
        <strong>$25</strong>
      </Typography>

      {/* Books Grid */}
      <Grid container spacing={6} justifyContent="center" mt={2}>
        {books.map((book, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} textAlign="center">
            {/* Image directly on background */}
            <Box
              component="img"
              src={book.img}
              alt={book.title}
              sx={{
                width: '100%',
                height: 360,
                objectFit: 'contain',
                display: 'block',
                mx: 'auto',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                transition: 'transform 0.3s ease, filter 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.25))',
                },
              }}
            />

            {/* Title directly under image */}
            <Typography
              variant="subtitle1"
              sx={{
                mt: 1.5,
                fontWeight: 400, // sleek, not bold
                fontSize: '1rem', // smaller size
                color: '#333',
                lineHeight: 1.4,
              }}
            >
              {book.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShowcaseBooks;



// import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

// const books = [
//   { title: 'The Infinite Enterprise (Main Book)', img: 'https://res.cloudinary.com/dphiclnsc/image/upload/v1754721659/openart-image_yDio7nlF_1754721049486_raw_sgmu5m.jpg' },
//   { title: 'The Infinite Enterprise Workbook', img: 'https://res.cloudinary.com/dphiclnsc/image/upload/v1754723593/openart-image_30vcfTnh_1754723434638_raw_ysembz.jpg' },
// ];

// const ShowcaseBooks = () => {
//   return (
//     <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         The Infinite Enterprise Bundle
//       </Typography>
//       <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
//         Get the <strong>Workbook FREE</strong> when you buy the Main Book for just <strong>$25</strong>
//       </Typography>
//       <Grid container spacing={4} justifyContent="center" mt={2}>
//         {books.map((book, i) => (
//           <Grid item xs={12} sm={6} md={4} key={i}>
//             <Card sx={{ maxWidth: 300, mx: 'auto' }}>
//               <CardMedia
//                 component="img"
//                 height="360"
//                 image={book.img}
//                 alt={book.title}
//                 sx={{ objectFit: 'contain', backgroundColor: '#fff' }}
//               />
//               <CardContent>
//                 <Typography variant="h6" align="center">
//                   {book.title}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ShowcaseBooks;







// import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

// const books = [
//   { title: 'The Infinite Enterprise', img: '/assets/book1.jpg' },
//   { title: 'The Seed of Legacy', img: '/assets/book2.jpg' },
//   { title: 'Purpose Unfolded', img: '/assets/book1.jpg' },
// ];

// const ShowcaseBooks = () => {
//   return (
//     <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Explore Our Collection
//       </Typography>
//       <Grid container spacing={4} justifyContent="center" mt={2}>
//         {books.map((book, i) => (
//           <Grid item xs={12} sm={6} md={4} key={i}>
//             <Card sx={{ maxWidth: 300, mx: 'auto' }}>
//               <CardMedia
//                 component="img"
//                 height="360"
//                 image={book.img}
//                 alt={book.title}
//                 sx={{ objectFit: 'contain' }}
//               />
//               <CardContent>
//                 <Typography variant="h6" align="center">
//                   {book.title}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ShowcaseBooks;
