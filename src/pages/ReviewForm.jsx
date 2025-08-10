import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Button
} from '@mui/material';

export default function ReviewForm() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom>
          Share the Echo
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          If this book lit even a single candle in your mind, consider sharing it with another.
          Leave a review. Whisper a recommendation. Tell someone you care about — not for the author’s name,
          but for the fire it might light in another life.
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <img
            src="https://res.cloudinary.com/dmnmyanin/image/upload/v1754243435/frame_1_dcevan.png" // Replace with the correct relative or absolute path
            alt="Scan to review"
            style={{ width: 200, height: 200 }}
          />
        </Box>

        <Typography align="center" sx={{ mb: 2 }}>
          Or click the button below to leave a review:
        </Typography>

        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            href="https://forms.gle/your-google-form-link" // Replace with your actual Google Form link
            target="_blank"
          >
            Go to Google Form
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
