import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

const AboutAuthor = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fafafa',
        py: { xs: 8, md: 12 },
        px: 2,
        minHeight: '80vh',
      }}
    >
      <Container maxWidth="md">
        <FadeInSection>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 4,
              color: '#111',
            }}
          >
            📘 About the Author
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <Typography
            variant="h6"
            sx={{
              fontStyle: 'italic',
              textAlign: 'center',
              mb: 4,
              color: '#555',
            }}
          >
            “Some build for attention. Others build for eternity.”
            <br />— Olami Carter
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Divider sx={{ mb: 4 }} />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#444', mb: 3 }}>
            <strong>Olami Carter</strong> is the visionary mind behind <em>The Infinite Enterprise</em> — a framework for building timeless ideas, organizations, and systems that scale beyond their founder.
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#444', mb: 3 }}>
            With a background that bridges business strategy, creative architecture, and timeless wisdom, Olami writes for leaders who aren’t chasing likes — they’re chasing legacy.
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#444', mb: 3 }}>
            He believes:
            <ul style={{ marginTop: 8, marginBottom: 8, paddingLeft: 24 }}>
              <li>Influence should outlive personality.</li>
              <li>Vision should scale without ego.</li>
              <li>What you build should carry your essence into rooms you'll never enter.</li>
            </ul>
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.6}>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
            While his roots remain intentionally understated, his impact is growing globally — through content, coaching, and tools that help others scale purpose with structure.
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.7}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              color: '#666',
              fontStyle: 'italic',
              textAlign: 'center',
            }}
          >
            You may never know his face — but you’ll know his framework.
          </Typography>
        </FadeInSection>
      </Container>
    </Box>
  );
};

export default AboutAuthor;

