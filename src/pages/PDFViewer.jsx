import React from 'react';
import { Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PDFViewer = () => {
  const shareText = encodeURIComponent(
    "If these words moved you, share this preview of The Infinite Enterprise with your friends."
  );
  const shareUrl = "https://yourwebsite.com/read"; // Replace with your actual preview page URL
  const whatsappLink = `https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`;

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1 }}>
        <iframe
          src="/chapter1.pdf"
          title="Read the Book"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </Box>

      {/* Share Prompt */}
      <Box
        component="a"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: '#fff',
          p: 3,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          maxWidth: 700,
          mx: 'auto',
          mt: 2,
          mb: 4,
          textDecoration: 'none',
          cursor: 'pointer',
          boxShadow: 2,
        }}
      >
        <WhatsAppIcon sx={{ color: '#25D366', fontSize: 40 }} />
        <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#000' }}>
        Share this glimpse of The Infinite Enterprise with someone who needs to see it.
        </Typography>
      </Box>
    </Box>
  );
};

export default PDFViewer;




// import { Box } from '@mui/material';

// const PDFViewer = () => {
//   return (
//     <Box sx={{ width: '100%', height: '100vh' }}>
//       <iframe
//         src="/chapter1.pdf"
//         title="Read the Book"
//         width="100%"
//         height="100%"
//         style={{ border: 'none' }}
//       />
//     </Box>
//   );
// };

// export default PDFViewer;
