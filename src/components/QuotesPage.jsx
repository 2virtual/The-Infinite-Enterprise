// src/pages/QuotesPage.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Chip,
  Snackbar,
  Alert,
  Tooltip,
  Collapse
} from '@mui/material';

// Icons
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

// Utility
import { generateQuoteImage } from '../utils/generateQuoteImage';

// External Data
import { quotes } from '../data/quotes';

const QuotesPage = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const [openShares, setOpenShares] = useState({});

  const websiteUrl = 'https://the-infinite-enterprise.vercel.app/infinite-enterprise/quotes';
  const bookTitle = 'The Infinite Enterprise';

  const toggleShareMenu = (quoteId) => {
    setOpenShares((prev) => ({
      ...prev,
      [quoteId]: !prev[quoteId]
    }));
  };

  const shareQuote = (quote, platform) => {
    const fullQuote = `"${quote}"\n— ${bookTitle}`;
    const textToCopy = `${fullQuote}\n\n${websiteUrl}`;
    const encodedUrl = encodeURIComponent(websiteUrl);

    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        const twitterText = encodeURIComponent(`${fullQuote}\n\n${websiteUrl}`);
        shareUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
        break;

      case 'facebook':
        const facebookQuote = encodeURIComponent(fullQuote);
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${facebookQuote}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
        break;

      case 'linkedin':
        const linkedInTitle = encodeURIComponent(fullQuote);
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${linkedInTitle}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
        break;

      case 'discord':
        copyToClipboard(textToCopy, 'Quote copied! Paste into Discord.');
        break;

      default:
        break;
    }
  };

  const copyToClipboard = async (text, successMsg) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setSnackbar({ open: true, message: successMsg });
    } catch (err) {
      setSnackbar({ open: true, message: 'Failed to copy.' });
    }
  };

  const handleDownloadImage = (quote, category) => {
    generateQuoteImage(quote, `ie-quote-${category.toLowerCase()}`);
    setSnackbar({
      open: true,
      message: 'Instagram image downloaded! Ready to post.'
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        width: '100%',
        pt: { xs: 2, sm: 4, md: 6 },
        pb: { xs: 8, md: 10 },
        minHeight: '100vh',
        bgcolor: '#f9f9f9'
      }}
    >
      {/* Title Section */}
      <Box
        sx={{
          textAlign: 'center',
          px: 3,
          mb: { xs: 5, md: 7 },
          overflow: 'visible',
          position: 'relative',
          zIndex: 10,
        }}
      >
           <Typography
          variant="h2" // Changed from h3 to h2 for better hierarchy
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: '2rem',    // 32px on mobile
              sm: '2.5rem',  // 40px on tablet
              md: '3rem',    // 48px on desktop
            },
            lineHeight: 1.2,
            color: '#fff',   // Ensure visibility if near hero
            textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            overflow: 'visible',
            mx: 'auto',
            maxWidth: 800,
          }}
        >
          The Infinite Enterprise Quotes
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            mt: 2,
            maxWidth: 600,
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.25rem' }
          }}
        >
          Share a quote. Spark a legacy.
        </Typography>
      </Box>

      {/* Quotes Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {quotes.map((quote) => (
            <Grid item xs={12} sm={6} md={4} key={quote.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontStyle: 'italic',
                      lineHeight: 1.6
                    }}
                  >
                    "{quote.text}"
                  </Typography>
                  <Chip
                    label={quote.category}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </CardContent>

                <CardActions sx={{ flexDirection: 'column', p: 1 }}>
                  <IconButton
                    onClick={() => toggleShareMenu(quote.id)}
                    sx={{
                      color: 'text.secondary',
                      bgcolor: 'background.default',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <ShareIcon fontSize="small" />
                  </IconButton>

                  <Collapse in={openShares[quote.id]} timeout="auto" unmountOnExit>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        mt: 1,
                        flexWrap: 'wrap'
                      }}
                    >
                      <Tooltip title="Share on X">
                        <IconButton
                          size="small"
                          onClick={() => shareQuote(quote.text, 'twitter')}
                          sx={{ color: '#1DA1F2' }}
                        >
                          <TwitterIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Share on Facebook">
                        <IconButton
                          size="small"
                          onClick={() => shareQuote(quote.text, 'facebook')}
                          sx={{ color: '#4267B2' }}
                        >
                          <FacebookIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Share on LinkedIn">
                        <IconButton
                          size="small"
                          onClick={() => shareQuote(quote.text, 'linkedin')}
                          sx={{ color: '#0077B5' }}
                        >
                          <LinkedInIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Download for Instagram">
                        <IconButton
                          size="small"
                          onClick={() => handleDownloadImage(quote.text, quote.category)}
                          sx={{ color: '#C13584' }}
                        >
                          <PhotoCameraIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Collapse>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default QuotesPage; 








// // src/components/QuotesPage.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardActions,
//   IconButton,
//   Chip,
//   Snackbar,
//   Alert,
//   Tooltip,
//   Collapse
// } from '@mui/material';

// // Icons
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import DiscordIcon from './icons/DiscordIcon';
// import ShareIcon from '@mui/icons-material/Share';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

// // Utility
// import { generateQuoteImage } from '../utils/generateQuoteImage';

// const QuotesPage = () => {
//   const [snackbar, setSnackbar] = useState({ open: false, message: '' });
//   const [openShares, setOpenShares] = useState({});

//   const websiteUrl = 'https://the-infinite-enterprise.vercel.app/infinite-enterprise/quotes';
//   const bookTitle = 'The Infinite Enterprise';

//   const quotes = [
//     { id: 1, text: "You weren't meant to replicate what already exists. You were meant to originate.", category: "Vision" },
//     { id: 2, text: "You're not here just to make a living. You're here to build something that outlives you.", category: "Purpose" },
//     { id: 3, text: "The world doesn't need more influencers. It needs architects of eternity.", category: "Legacy" },
//     { id: 4, text: "Some ideas can live forever — if they're built with the right blueprint.", category: "Strategy" },
//     { id: 5, text: "You weren't designed to simply function — you were designed to influence.", category: "Impact" },
//     { id: 6, text: "You were wired to build. Not just to produce or survive, but to design systems, ideas, and structures that carry value long after you're gone.", category: "Builder Mindset" },
//     { id: 7, text: "We are most alive when we are creating.", category: "Creativity" },
//     { id: 8, text: "True originality isn't about being different. It's about being authentic to the pattern you're meant to express.", category: "Authenticity" },
//     { id: 9, text: "Anyone can start something. But not everyone builds something that lives beyond them.", category: "Differentiation" },
//     { id: 10, text: "Multipliers design systems that continue solving problems without them.", category: "Scaling" }
//   ];

//   const toggleShareMenu = (quoteId) => {
//     setOpenShares((prev) => ({
//       ...prev,
//       [quoteId]: !prev[quoteId]
//     }));
//   };

//   const shareQuote = (quote, platform) => {
//     const fullQuote = `"${quote}"\n— ${bookTitle}`;
//     const textToCopy = `${fullQuote}\n\n${websiteUrl}`;
//     const encodedUrl = encodeURIComponent(websiteUrl);

//     let shareUrl = '';

//     switch (platform) {
//       case 'twitter':
//         const twitterText = encodeURIComponent(`${fullQuote}\n\n${websiteUrl}`);
//         shareUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
//         window.open(shareUrl, '_blank', 'noopener,noreferrer');
//         break;

//       case 'facebook':
//         const facebookQuote = encodeURIComponent(fullQuote);
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${facebookQuote}`;
//         window.open(shareUrl, '_blank', 'noopener,noreferrer');
//         break;

//       case 'linkedin':
//         const linkedInTitle = encodeURIComponent(fullQuote);
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${linkedInTitle}`;
//         window.open(shareUrl, '_blank', 'noopener,noreferrer');
//         break;

//       case 'discord':
//         copyToClipboard(textToCopy, 'Quote copied! Paste into Discord.');
//         break;

//       default:
//         break;
//     }
//   };

//   const copyToClipboard = async (text, successMsg) => {
//     try {
//       if (navigator.clipboard && window.isSecureContext) {
//         await navigator.clipboard.writeText(text);
//       } else {
//         const textArea = document.createElement('textarea');
//         textArea.value = text;
//         textArea.style.position = 'fixed';
//         textArea.style.opacity = '0';
//         document.body.appendChild(textArea);
//         textArea.focus();
//         textArea.select();
//         document.execCommand('copy');
//         document.body.removeChild(textArea);
//       }
//       setSnackbar({ open: true, message: successMsg });
//     } catch (err) {
//       setSnackbar({ open: true, message: 'Failed to copy.' });
//     }
//   };

//   const handleDownloadImage = (quote, category) => {
//     generateQuoteImage(quote, `ie-quote-${category.toLowerCase()}`);
//     setSnackbar({
//       open: true,
//       message: 'Instagram image downloaded! Ready to post.'
//     });
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         overflow: 'visible', // 🔥 Critical: Prevents clipping
//         pt: { xs: 2, sm: 4, md: 6 }, // Add top padding for safety
//         pb: { xs: 8, md: 10 },
//         minHeight: '100vh',
//       }}
//     >
//       {/* ✅ Title Section – Isolated and Safe */}
//       <Box
//         sx={{
//           textAlign: 'center',
//           px: 3,
//           mb: { xs: 5, md: 7 },
//           overflow: 'visible',
//           position: 'relative',
//           zIndex: 10,
//         }}
//       >
//         <Typography
//           variant="h2" // Changed from h3 to h2 for better hierarchy
//           component="h1"
//           sx={{
//             fontWeight: 700,
//             fontSize: {
//               xs: '2rem',    // 32px on mobile
//               sm: '2.5rem',  // 40px on tablet
//               md: '3rem',    // 48px on desktop
//             },
//             lineHeight: 1.2,
//             color: '#fff',   // Ensure visibility if near hero
//             textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
//             wordBreak: 'break-word',
//             whiteSpace: 'normal',
//             overflow: 'visible',
//             mx: 'auto',
//             maxWidth: 800,
//           }}
//         >
//           The Infinite Enterprise Quotes
//         </Typography>
//         <Typography
//           variant="h6"
//           color="text.secondary"
//           sx={{
//             mt: 2,
//             maxWidth: 600,
//             mx: 'auto',
//             fontSize: { xs: '1.1rem', md: '1.25rem' },
//           }}
//         >
//           Share a quote. Spark a legacy.
//         </Typography>
//       </Box>

//       {/* Quotes Grid */}
//       <Container
//         maxWidth="lg"
//         sx={{
//           px: { xs: 2, md: 3 },
//           overflow: 'visible',
//         }}
//       >
//         <Grid container spacing={3}>
//           {quotes.map((quote) => (
//             <Grid item xs={12} sm={6} md={4} key={quote.id}>
//               <Card
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                 }}
//               >
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       mb: 2,
//                       fontStyle: 'italic',
//                       lineHeight: 1.6,
//                     }}
//                   >
//                     "{quote.text}"
//                   </Typography>
//                   <Chip label={quote.category} size="small" color="primary" variant="outlined" />
//                 </CardContent>

//                 <CardActions sx={{ flexDirection: 'column', p: 1 }}>
//                   <IconButton
//                     onClick={() => toggleShareMenu(quote.id)}
//                     sx={{
//                       color: 'text.secondary',
//                       bgcolor: 'background.default',
//                       '&:hover': { bgcolor: 'action.hover' },
//                     }}
//                   >
//                     <ShareIcon fontSize="small" />
//                   </IconButton>

//                   <Collapse in={openShares[quote.id]} timeout="auto" unmountOnExit>
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         gap: 1,
//                         mt: 1,
//                         flexWrap: 'wrap',
//                       }}
//                     >
//                       <Tooltip title="Share on X">
//                         <IconButton
//                           size="small"
//                           onClick={() => shareQuote(quote.text, 'twitter')}
//                           sx={{ color: '#1DA1F2' }}
//                         >
//                           <TwitterIcon fontSize="small" />
//                         </IconButton>
//                       </Tooltip>

//                       <Tooltip title="Share on Facebook">
//                         <IconButton
//                           size="small"
//                           onClick={() => shareQuote(quote.text, 'facebook')}
//                           sx={{ color: '#4267B2' }}
//                         >
//                           <FacebookIcon fontSize="small" />
//                         </IconButton>
//                       </Tooltip>

//                       <Tooltip title="Share on LinkedIn">
//                         <IconButton
//                           size="small"
//                           onClick={() => shareQuote(quote.text, 'linkedin')}
//                           sx={{ color: '#0077B5' }}
//                         >
//                           <LinkedInIcon fontSize="small" />
//                         </IconButton>
//                       </Tooltip>

//                       {/* <Tooltip title="Copy for Discord">
//                         <IconButton
//                           size="small"
//                           onClick={() => shareQuote(quote.text, 'discord')}
//                           sx={{ color: '#5865F2' }}
//                         >
//                           <DiscordIcon fontSize="small" />
//                         </IconButton>
//                       </Tooltip> */}

//                       <Tooltip title="Download for Instagram">
//                         <IconButton
//                           size="small"
//                           onClick={() => handleDownloadImage(quote.text, quote.category)}
//                           sx={{ color: '#C13584' }}
//                         >
//                           <PhotoCameraIcon fontSize="small" />
//                         </IconButton>
//                       </Tooltip>
//                     </Box>
//                   </Collapse>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={4000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default QuotesPage;


