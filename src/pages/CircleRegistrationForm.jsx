// src/pages/CircleRegistrationForm.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  Alert,
  Snackbar,
  Grid,
  Divider,
  Link
} from '@mui/material';

const CircleRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    roleOther: '',
    experience: '',
    whyJoin: '',
    howHeard: '',
    newsletter: true,
    communityGuidelines: false
  });

  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return "Valid email is required.";
    if (!formData.role) return "Please select your primary role.";
    if (!formData.experience) return "Please share your experience level.";
    if (!formData.whyJoin.trim()) return "Please tell us why you want to join.";
    if (!formData.communityGuidelines) return "You must agree to the Community Guidelines.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setSubmitStatus({ type: 'error', message: error });
      setOpenSnackbar(true);
      return;
    }

    // ✅ In production, send to backend (e.g., Firebase, Formspree, etc.)
    console.log("Form submitted:", formData);

    setSubmitStatus({
      type: 'success',
      message: 'Thank you for applying! We’ll review your application and contact you within 3 business days.'
    });
    setOpenSnackbar(true);

    // Reset form (except newsletter & guidelines)
    setFormData(prev => ({
      ...prev,
      name: '',
      email: '',
      role: '',
      roleOther: '',
      experience: '',
      whyJoin: '',
      howHeard: '',
      communityGuidelines: false
    }));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Paper
          elevation={0}
          sx={{
            textAlign: 'center',
            p: 4,
            mb: 5,
            bgcolor: 'primary.main',
            color: '#fff',
            borderRadius: 2
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            Join The Builder’s Circle
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '700px', mx: 'auto' }}>
            A private community for leaders, mentors, and stewards committed to building ideas that outlive them.
          </Typography>
        </Paper>

        {/* Form */}
        <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom fontWeight="600">
              Your Information
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom fontWeight="600">
              Your Role & Experience
            </Typography>

            <FormControl component="fieldset" margin="normal" required>
              <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>
                What best describes your primary role?
              </FormLabel>
              <RadioGroup name="role" value={formData.role} onChange={handleChange}>
                <FormControlLabel value="founder" control={<Radio />} label="Founder / Entrepreneur" />
                <FormControlLabel value="leader" control={<Radio />} label="Organizational Leader" />
                <FormControlLabel value="mentor" control={<Radio />} label="Mentor / Educator" />
                <FormControlLabel value="nonprofit" control={<Radio />} label="Nonprofit / Ministry Leader" />
                <FormControlLabel value="creator" control={<Radio />} label="Creator / Artist" />
                <FormControlLabel value="student" control={<Radio />} label="Student / Emerging Leader" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            {formData.role === 'other' && (
              <TextField
                fullWidth
                label="Please specify"
                name="roleOther"
                value={formData.roleOther}
                onChange={handleChange}
                margin="normal"
                size="small"
              />
            )}

            <FormControl component="fieldset" margin="normal" required>
              <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>
                How would you describe your experience in building systems or leading teams?
              </FormLabel>
              <RadioGroup name="experience" value={formData.experience} onChange={handleChange}>
                <FormControlLabel value="beginner" control={<Radio />} label="Just starting" />
                <FormControlLabel value="growing" control={<Radio />} label="Growing my impact" />
                <FormControlLabel value="established" control={<Radio />} label="Established, but seeking deeper legacy" />
                <FormControlLabel value="steward" control={<Radio />} label="Focused on succession & stewardship" />
              </RadioGroup>
            </FormControl>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom fontWeight="600">
              Why You’re Joining
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={5}
              label="Why do you want to join The Builder’s Circle?"
              name="whyJoin"
              value={formData.whyJoin}
              onChange={handleChange}
              margin="normal"
              required
              helperText="Tell us about your vision, what you hope to gain, and what you’d love to contribute."
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              label="How did you hear about The Infinite Enterprise?"
              name="howHeard"
              value={formData.howHeard}
              onChange={handleChange}
              margin="normal"
              helperText="e.g., Book, Website, Godly Seed Camp, Social Media, Friend"
            />

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom fontWeight="600">
              Community Commitment
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.newsletter}
                  onChange={handleChange}
                  name="newsletter"
                  color="primary"
                />
              }
              label="Yes, I’d like to receive updates, reflections, and invitations from The Infinite Enterprise."
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.communityGuidelines}
                  onChange={handleChange}
                  name="communityGuidelines"
                  color="primary"
                />
              }
              label={
                <span>
                  I agree to uphold the values of integrity, respect, and stewardship in all community interactions.{' '}
                  <Link href="/community-guidelines" color="primary" target="_blank" sx={{ textDecoration: 'underline' }}>
                    Read Community Guidelines
                  </Link>
                </span>
              }
            />

            <Box sx={{ mt: 4, textAlign: 'right' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'primary.main',
                  color: '#fff',
                  fontWeight: 600,
                  px: 5,
                  py: 1.5,
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
              >
                Submit Application
              </Button>
            </Box>
          </form>
        </Paper>

        {/* Success/Error Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={submitStatus?.type}
            sx={{ width: '100%' }}
          >
            {submitStatus?.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default CircleRegistrationForm;