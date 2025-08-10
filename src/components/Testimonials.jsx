import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // ✅ Import autoplay module
import 'swiper/css';

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'This book changed how I view purpose and leadership!',
  },
  {
    name: 'John Smith',
    text: 'Absolutely transformative. A must-read for every visionary.',
  },
  {
    name: 'Lola Akande',
    text: 'A beautifully written guide to eternal impact.',
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: '#f8f9fa' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 6, color: '#1a1a1a' }}
      >
        What Readers Are Saying
      </Typography>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                maxWidth: 700,
                mx: 'auto',
                textAlign: 'center',
                py: 6,
                px: 4,
                backgroundColor: '#ffffff',
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontStyle: 'italic',
                  color: '#333',
                  fontSize: '1.2rem',
                }}
              >
                “{t.text}”
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ mt: 3, fontWeight: 600, color: '#555' }}
              >
                — {t.name}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
