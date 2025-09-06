import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material';

// Kobo Logo (official)
const koboLogo = "https://kobowritinglife.zendesk.com/hc/en-us/article_attachments/360091438051";

const PaymentPage = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 5 }, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}
      >
        Purchase Your Book
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Kobo only */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              component="img"
              src={koboLogo}
              alt="Kobo logo"
              sx={{ height: 80, objectFit: 'contain', mt: 3, mx: 'auto' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}
              >
                Kobo
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', textAlign: 'center' }}
              >
                Get your copy securely on Kobo’s eBook store.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', mb: 2 }}>
              <Button
                variant="contained"
                color="primary"
                href="https://www.kobo.com/ww/en/ebook/the-infinite-enterprise?sId=ea22cea4-613b-4830-af55-a0de2920f3da&ssId=ZSYu4dq2e7hwo04-8iVBr&cPos=1" // <-- replace with your Kobo URL
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontWeight: 700 }}
              >
                Buy on Kobo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentPage;
