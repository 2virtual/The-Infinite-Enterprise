import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material';

// Logos URLs or import your own
const logos = {
  seller: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // example icon
  gumroad: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Gumroad_Logo.svg/2560px-Gumroad_Logo.svg.png',
  amazon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  digitaltoprint: 'https://digitaltoprint.co/wp-content/uploads/2022/10/cropped-dtp-logo-1-1.png',
  paystack: 'https://paystack.com/assets/paystack-logo@2x.png',
};

const paymentPlatforms = [
  {
    name: 'Seller',
    logo: logos.seller,
    description: 'Purchase directly from our Seller platform with secure checkout.',
    link: 'https://yoursellerplatform.com/book', // replace with your URL
  },
  {
    name: 'Gumroad',
    logo: logos.gumroad,
    description: 'Buy the book easily on Gumroad with worldwide delivery.',
    link: 'https://gumroad.com/yourproduct', // replace with your URL
  },
  {
    name: 'Amazon',
    logo: logos.amazon,
    description: 'Available on Amazon for fast shipping and trusted service.',
    link: 'https://amazon.com/yourbook', // replace with your URL
  },
  {
    name: 'DigitalToPrint',
    logo: logos.digitaltoprint,
    description: 'Order physical prints directly through DigitalToPrint service.',
    link: 'https://digitaltoprint.co/yourbook', // replace with your URL
  },
];

const PAYSTACK_PUBLIC_KEY = 'pk_test_xxxxxxxxxxxxxxxxxxxxx'; // replace with your Paystack public key

const PaymentPage = () => {
  // Paystack payment handler
  const handlePaystackPayment = () => {
    if (!window.PaystackPop) {
      alert('Paystack SDK not loaded');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: 'customer@example.com',  // Ideally get from logged in user or input
      amount: 2500 * 100, // amount in kobo (e.g., ₦2500)
      currency: 'NGN',
      ref: '' + Math.floor(Math.random() * 1000000000 + 1), // unique ref
      onClose: () => alert('Payment cancelled'),
      callback: function (response) {
        alert('Payment successful. Transaction reference: ' + response.reference);
        // Add your post-payment logic here
      },
    });

    handler.openIframe();
  };

  return (
    <Box sx={{ p: { xs: 2, md: 5 }, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
        Purchase Your Book
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Other platforms */}
        {paymentPlatforms.map(({ name, logo, description, link }) => (
          <Grid key={name} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box
                component="img"
                src={logo}
                alt={`${name} logo`}
                sx={{ height: 80, objectFit: 'contain', mt: 3, mx: 'auto' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
                  {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  {description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', mb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontWeight: 700 }}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {/* Paystack Direct Payment Card */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              component="img"
              src={logos.paystack}
              alt="Paystack logo"
              sx={{ height: 80, objectFit: 'contain', mt: 3, mx: 'auto' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
                Pay Directly (Paystack)
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                Secure payment via Paystack from our website.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', mb: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handlePaystackPayment}
                sx={{ fontWeight: 700 }}
              >
                Pay Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentPage;
