// src/components/QuotesPage.jsx
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Chip,
  Box,
  Snackbar,
  Alert,
  Tooltip
} from '@mui/material';

// Icons
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/PhotoCamera';
import DiscordIcon from './icons/DiscordIcon'; // Create this (code below)
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const QuotesPage = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  // 🔗 Replace with your actual website URL
  const websiteUrl = 'http://localhost:5173/infinite-enterprise/quotes';
  const bookTitle = 'The Infinite Enterprise';

  const quotes = [
    { id: 1, text: "You weren't meant to replicate what already exists. You were meant to originate.", category: "Vision" },
    { id: 2, text: "You're not here just to make a living. You're here to build something that outlives you.", category: "Purpose" },
    { id: 3, text: "The world doesn't need more influencers. It needs architects of eternity.", category: "Legacy" },
    { id: 4, text: "Some ideas can live forever — if they're built with the right blueprint.", category: "Strategy" },
    { id: 5, text: "You weren't designed to simply function — you were designed to influence.", category: "Impact" },
    { id: 6, text: "You were wired to build. Not just to produce or survive, but to design systems, ideas, and structures that carry value long after you're gone.", category: "Builder Mindset" },
    { id: 7, text: "We are most alive when we are creating.", category: "Creativity" },
    { id: 8, text: "True originality isn't about being different. It's about being authentic to the pattern you're meant to express.", category: "Authenticity" },
    { id: 9, text: "Anyone can start something. But not everyone builds something that lives beyond them.", category: "Differentiation" },
    { id: 10, text: "Multipliers design systems that continue solving problems without them.", category: "Scaling" }
  ];

  const shareQuote = (quote, platform) => {
    const fullQuote = `"${quote}"\n— ${bookTitle}`;
    const textToCopy = `${fullQuote}\n\n${websiteUrl}`;
    const encodedUrl = encodeURIComponent(websiteUrl);

    let shareUrl = '';

    switch (platform) {
      // ✅ X (Twitter)
      case 'twitter':
        const twitterText = encodeURIComponent(`${fullQuote}\n\n${websiteUrl}`);
        shareUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
        break;

      // ✅ Facebook
      case 'facebook':
        const facebookQuote = encodeURIComponent(fullQuote);
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${facebookQuote}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
        break;

      // ✅ LinkedIn
      case 'linkedin':
        const linkedInTitle = encodeURIComponent(`${fullQuote}`);
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${linkedInTitle}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
        break;

      // ✅ Instagram (Copy only)
      case 'instagram':
        copyToClipboard(textToCopy, 'Quote copied! Paste into Instagram.');
        break;

      // ✅ Discord (Copy only)
      case 'discord':
        copyToClipboard(textToCopy, 'Quote copied! Paste into Discord.');
        break;

      // ✅ Copy Link
      case 'copy':
        copyToClipboard(textToCopy, 'Quote + link copied to clipboard!');
        break;

      default:
        break;
    }
  };

  // ✅ Universal clipboard copy with fallback
  const copyToClipboard = async (text, successMsg) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
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
      setSnackbar({ open: true, message: 'Failed to copy. Please try again.' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Infinite Enterprise Quotes
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Share a quote. Spark a legacy.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {quotes.map((quote) => (
          <Grid item xs={12} sm={6} md={4} key={quote.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
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
                <Chip label={quote.category} size="small" color="primary" variant="outlined" />
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-around', p: 2 }}>
                {/* X (Twitter) */}
                <Tooltip title="Share on X">
                  <IconButton
                    onClick={() => shareQuote(quote.text, 'twitter')}
                    sx={{ color: '#1DA1F2' }}
                  >
                    <TwitterIcon />
                  </IconButton>
                </Tooltip>

                {/* Facebook */}
                <Tooltip title="Share on Facebook">
                  <IconButton
                    onClick={() => shareQuote(quote.text, 'facebook')}
                    sx={{ color: '#4267B2' }}
                  >
                    <FacebookIcon />
                  </IconButton>
                </Tooltip>

                {/* LinkedIn */}
                <Tooltip title="Share on LinkedIn">
                  <IconButton
                    onClick={() => shareQuote(quote.text, 'linkedin')}
                    sx={{ color: '#0077B5' }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>

                {/* Instagram */}
                <Tooltip title="Copy for Instagram">
                  <IconButton
                    onClick={() => shareQuote(quote.text, 'instagram')}
                  >
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>

                {/* Discord */}
                <Tooltip title="Copy for Discord">
                  <IconButton
                    onClick={() => shareQuote(quote.text, 'discord')}
                    sx={{ color: '#5865F2' }}
                  >
                    <DiscordIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Success/Error Feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default QuotesPage;