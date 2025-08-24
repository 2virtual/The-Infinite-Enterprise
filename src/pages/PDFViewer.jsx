import React, { useState, useEffect } from 'react';
import { 
  Box, Typography, IconButton, Tooltip, Dialog, DialogTitle, 
  DialogContent, DialogActions, Button, TextField 
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const PDFViewer = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  // ⏱ Show popup after 1 min 30 sec (90,000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenPopup(true);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error when typing
  };

  // Email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle submit
  const handleSubmit = () => {
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // ✅ Here you would send formData to your backend / EmailJS
    console.log("User details:", formData);

    setOpenPopup(false); // close popup once valid
  };

  // ----- Share Logic -----
  const shareText = encodeURIComponent(
    "Just finished a sneak peek of this powerful book on timeless principles for building businesses that thrive in an AI-driven world. Thought you’d find it inspiring — take a look!"
  );
  const baseShareUrl = "https://the-infinite-enterprise.vercel.app/read";
  const linkedInShareUrl = "https://the-infinite-enterprise.vercel.app/linkedin-preview.html";

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${shareText}%20${encodeURIComponent(baseShareUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(baseShareUrl)}&text=${shareText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseShareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(baseShareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent("Check out this book preview: The Infinite Enterprise")}&body=${shareText}%0A${encodeURIComponent(baseShareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(linkedInShareUrl)}`,
  };

  const openSharePopup = (url, width = 600, height = 600) => {
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    window.open(url, "_blank", `width=${width},height=${height},top=${top},left=${left}`);
  };

  const handleLinkedInShare = () => {
    if (window.gtag) {
      window.gtag('event', 'share', {
        method: 'LinkedIn',
        content_type: 'book',
        item_id: 'The Infinite Enterprise'
      });
    }
    openSharePopup(shareLinks.linkedin);
  };

  const icons = [
    { icon: <WhatsAppIcon fontSize="large" />, color: '#25D366', link: shareLinks.whatsapp, label: 'WhatsApp' },
    { icon: <TelegramIcon fontSize="large" />, color: '#0088cc', link: shareLinks.telegram, label: 'Telegram' },
    { icon: <FacebookIcon fontSize="large" />, color: '#1877F2', link: shareLinks.facebook, label: 'Facebook' },
    { icon: <TwitterIcon fontSize="large" />, color: '#1DA1F2', link: shareLinks.twitter, label: 'Twitter' },
    { icon: <EmailIcon fontSize="large" />, color: '#D44638', link: shareLinks.email, label: 'Email' },
    { icon: <LinkedInIcon fontSize="large" />, color: '#0077b5', onClick: handleLinkedInShare, label: 'LinkedIn' },
  ];

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* PDF Reader */}
      <Box sx={{ flexGrow: 1 }}>
        <iframe
          src="/chapter1.pdf"
          title="Read the Book"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </Box>

      {/* Share Bar */}
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          background: '#fff',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 600,
            mb: 1,
            textAlign: 'center',
            color: '#000',
          }}
        >
          📢 Share this glimpse of <i>The Infinite Enterprise</i>
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          {icons.map((item, index) => (
            <Tooltip title={`Share on ${item.label}`} key={index}>
              <IconButton
                component={item.link ? 'a' : 'button'}
                href={item.link || undefined}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                onClick={item.onClick || undefined}
                sx={{
                  color: item.color,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    boxShadow: `0 4px 10px ${item.color}55`,
                  },
                }}
                aria-label={`Share on ${item.label}`}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>

      {/* Mandatory Subscription Popup */}
      <Dialog open={openPopup}>
        <DialogTitle sx={{ fontWeight: 600 }}>
          Join the Readers’ Circle
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 2, color: "text.secondary" }}>
            We’d love to keep you updated with exclusive insights, upcoming events, 
            and new releases related to <i>The Infinite Enterprise</i>.  
            Please enter your details below to continue reading.
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Your Email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={!!error}
            helperText={error}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleSubmit} 
            variant="contained" 
            fullWidth
            sx={{ bgcolor: "#000", "&:hover": { bgcolor: "#333" } }}
          >
            Continue Reading
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PDFViewer;




// import React from 'react';
// import { Box, Typography, IconButton, Tooltip } from '@mui/material';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// const PDFViewer = () => {
//   const shareText = encodeURIComponent(
//     "Just finished a sneak peek of this powerful book on timeless principles for building businesses that thrive in an AI-driven world. Thought you’d find it inspiring — take a look!"
//   );
//   const baseShareUrl = "https://the-infinite-enterprise.vercel.app/read";
//   const linkedInShareUrl = "https://the-infinite-enterprise.vercel.app/linkedin-preview.html";

//   const shareLinks = {
//     whatsapp: `https://wa.me/?text=${shareText}%20${encodeURIComponent(baseShareUrl)}`,
//     telegram: `https://t.me/share/url?url=${encodeURIComponent(baseShareUrl)}&text=${shareText}`,
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseShareUrl)}`,
//     twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(baseShareUrl)}`,
//     email: `mailto:?subject=${encodeURIComponent("Check out this book preview: The Infinite Enterprise")}&body=${shareText}%0A${encodeURIComponent(baseShareUrl)}`,
//     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(linkedInShareUrl)}`, // UPDATED LINKEDIN URL
//   };

//   const openSharePopup = (url, width = 600, height = 600) => {
//     const left = window.innerWidth / 2 - width / 2;
//     const top = window.innerHeight / 2 - height / 2;
//     window.open(url, "_blank", `width=${width},height=${height},top=${top},left=${left}`);
//   };

//   const handleLinkedInShare = () => {
//     if (window.gtag) {
//       window.gtag('event', 'share', {
//         method: 'LinkedIn',
//         content_type: 'book',
//         item_id: 'The Infinite Enterprise'
//       });
//     }
//     openSharePopup(shareLinks.linkedin);
//   };

//   const icons = [
//     { icon: <WhatsAppIcon fontSize="large" />, color: '#25D366', link: shareLinks.whatsapp, label: 'WhatsApp' },
//     { icon: <TelegramIcon fontSize="large" />, color: '#0088cc', link: shareLinks.telegram, label: 'Telegram' },
//     { icon: <FacebookIcon fontSize="large" />, color: '#1877F2', link: shareLinks.facebook, label: 'Facebook' },
//     { icon: <TwitterIcon fontSize="large" />, color: '#1DA1F2', link: shareLinks.twitter, label: 'Twitter' },
//     { icon: <EmailIcon fontSize="large" />, color: '#D44638', link: shareLinks.email, label: 'Email' },
//     { icon: <LinkedInIcon fontSize="large" />, color: '#0077b5', onClick: handleLinkedInShare, label: 'LinkedIn' },
//   ];

//   return (
//     <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <Box sx={{ flexGrow: 1 }}>
//         <iframe
//           src="/chapter1.pdf"
//           title="Read the Book"
//           width="100%"
//           height="100%"
//           style={{ border: 'none' }}
//         />
//       </Box>

//       <Box
//         sx={{
//           position: 'sticky',
//           bottom: 0,
//           background: '#fff',
//           boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
//           p: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           borderTopLeftRadius: '12px',
//           borderTopRightRadius: '12px',
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: '1.1rem',
//             fontWeight: 600,
//             mb: 1,
//             textAlign: 'center',
//             color: '#000',
//           }}
//         >
//           📢 Share this glimpse of <i>The Infinite Enterprise</i>
//         </Typography>

//         <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
//           {icons.map((item, index) => (
//             <Tooltip title={`Share on ${item.label}`} key={index}>
//               <IconButton
//                 component={item.link ? 'a' : 'button'}
//                 href={item.link || undefined}
//                 target={item.link ? "_blank" : undefined}
//                 rel={item.link ? "noopener noreferrer" : undefined}
//                 onClick={item.onClick || undefined}
//                 sx={{
//                   color: item.color,
//                   transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//                   '&:hover': {
//                     transform: 'scale(1.2)',
//                     boxShadow: `0 4px 10px ${item.color}55`,
//                   },
//                 }}
//                 aria-label={`Share on ${item.label}`}
//               >
//                 {item.icon}
//               </IconButton>
//             </Tooltip>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default PDFViewer;



