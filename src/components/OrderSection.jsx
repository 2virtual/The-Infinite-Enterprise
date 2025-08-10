import React, { useRef, useState } from 'react';
import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material';
import emailjs from 'emailjs-com';

const OrderSection = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    emailjs
      .sendForm('your_service_id', 'your_template_id', form.current, 'your_user_id')
      .then(
        () => {
          setSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setError('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <Box id="order" sx={{ backgroundColor: '#f9f9f9', py: 10 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom align="center">
          Order The Book
        </Typography>

        <Typography variant="body1" align="center" mb={4}>
          Fill in your details to get notified or place a pre-order.
        </Typography>

        {submitted && <Alert severity="success">Your message has been sent!</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        <form ref={form} onSubmit={sendEmail}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            fullWidth
            required
            multiline
            rows={4}
            margin="normal"
          />
          <Box textAlign="center" mt={3}>
            <Button variant="contained" type="submit" size="large">
              Send
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default OrderSection;
