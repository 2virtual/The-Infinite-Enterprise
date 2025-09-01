import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* ---------- Styled pieces (compact & sleek) ---------- */
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f9fa 0%, #eceff1 100%)',
  padding: theme.spacing(6, 2),
  textAlign: 'center',
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 1.5,
  boxShadow: theme.shadows[1],
  transition: 'transform 0.22s ease, box-shadow 0.22s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[3],
  },
}));

const EngagementCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

/* ---------- Component ---------- */
const CommunityPage = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Stewards, Not Just Leaders',
      text:
        'We’re here to build beyond ourselves — not for fame, but for lasting impact. This is a space for those who lead not to be seen, but to be succeeded.',
    },
    {
      icon: '🤝',
      title: 'Mentorship in Action',
      text:
        "Share your journey, ask bold questions, and become a guiding light for someone else. Real growth happens through connection — not isolation.",
    },
    {
      icon: '🔥',
      title: 'Soul Care for Builders',
      text:
        'Burnout ends here. This is a space to restore, reflect, and return stronger — because you cannot pour from an empty cup.',
    },
  ];

  const engagements = [
    {
      title: "Join the Builder’s Circle",
      text:
        'A private, invite-based community for monthly calls, peer accountability, and deep conversations about stewardship, succession, and shaping the future together.',
      label: 'Request Access →',
      href: '/community/join',
    },
    {
      title: 'Share Your Story',
      text:
        'Your journey can inspire others. We feature real builders every month — from first-time mentors to seasoned stewards.',
      label: 'Submit Your Reflection →',
      href: '/community/submit',
    },
    {
      title: 'Find a Mentor or Mentee',
      text:
        'Looking to grow or give? Tell us your stage and goals — we’ll help you connect across generations.',
      label: 'Express Interest →',
      href: '/community/mentorship',
    },
    {
      title: 'Host a Local Gathering',
      text:
        'Gather a few others in your city to study a module together. We’ll send you a free toolkit with discussion guides and prompts.',
      label: 'Get the Toolkit →',
      href: '/community/toolkit',
    },
  ];

  const stories = [
    {
      quote:
        "This community reminds me that creativity has no borders. Every conversation feels like a window into another culture, another possibility.",
      name: "Maya, Designer – India",
    },
    {
      quote:
        "As a startup founder, I found more than advice here — I found collaborators from across the world who share the same vision for impact.",
      name: "Lucas, Entrepreneur – Brazil",
    },
    {
      quote:
        "Being part of this network showed me that leadership isn’t tied to geography. Whether in Lagos, London, or Los Angeles, we face the same challenges and support each other.",
      name: "Amara, Community Organizer – Nigeria",
    },
    {
      quote:
        "I used to see my art as personal expression. This community helped me realize it can also be a force for social change and innovation.",
      name: "Elena, Visual Artist – Spain",
    },
    {
      quote:
        "Here I discovered that entrepreneurship is not a lonely journey. It’s a global movement, and we rise faster when we rise together.",
      name: "Kenji, Tech Founder – Japan",
    },
  ];
  

  return (
    <Box sx={{ bgcolor: '#fafafa' }}>
      {/* Hero */}
      <HeroSection>
        <Container maxWidth="sm">
        <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
  <Typography
    variant="h2"
    gutterBottom
    sx={{
      fontWeight: 500,          // lighter, elegant
      lineHeight: 1.3,
      px: 2,
      wordBreak: "break-word",  // prevent clipping
      fontSize: {
        xs: "1.6rem",  // phones
        sm: "2.2rem",  // tablets
        md: "2.8rem",  // desktops
        lg: "3rem",    // large screens
      },
    }}
  >
    Join the Infinite Builders
  </Typography>
</Container>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}
          >
            Connect with a circle of stewards, mentors, and purpose-driven leaders who believe in legacy over likes.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => (window.location.href = '/community/join')}
            >
              Join the Circle
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => (document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' }))}
            >
              Read Member Stories
            </Button>
          </Box>
        </Container>
      </HeroSection>

      {/* Features */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h5" align="center" fontWeight={700} gutterBottom>
          This Is More Than a Network
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((f, i) => (
            <Grid item xs={12} md={4} key={i}>
              <FeatureCard elevation={0}>
                <Box sx={{ fontSize: '2rem', mb: 1 }}>{f.icon}</Box>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  {f.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {f.text}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Ways to Engage */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" fontWeight={700} gutterBottom>
            How You Can Participate
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {engagements.map((e, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <EngagementCard>
                  <Box>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {e.title}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {e.text}
                    </Typography>
                  </Box>

                  <Box>
                    <Button
                      color="primary"
                      onClick={() => (window.location.href = e.href)}
                      sx={{ textTransform: 'none' }}
                    >
                      {e.label}
                    </Button>
                  </Box>
                </EngagementCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Member Stories */}
      <Container maxWidth="md" sx={{ py: 6 }} id="stories">
        <Typography variant="h5" align="center" fontWeight={700} gutterBottom>
          From the Builders
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {stories.map((s, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Paper variant="outlined" sx={{ p: 3, bgcolor: '#f8f9fa' }}>
                <Typography fontStyle="italic" sx={{ mb: 2 }}>
                  “{s.quote}”
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  — {s.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Final CTA */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Ready to Build Together?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            The Infinite Enterprise grows not in isolation, but in connection.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              fontWeight: 600,
              px: 4,
              '&:hover': { bgcolor: 'grey.100' },
            }}
            onClick={() => (window.location.href = '/community/join')}
          >
            Join the Community
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default CommunityPage;
