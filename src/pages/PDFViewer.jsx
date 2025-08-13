import React from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const PDFViewer = () => {
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
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(linkedInShareUrl)}`, // UPDATED LINKEDIN URL
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
      <Box sx={{ flexGrow: 1 }}>
        <iframe
          src="/chapter1.pdf"
          title="Read the Book"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </Box>

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
//   const shareUrl = "https://the-infinite-enterprise.vercel.app/read";

//   const shareLinks = {
//     whatsapp: `https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`,
//     telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${shareText}`,
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
//     twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`,
//     email: `mailto:?subject=${encodeURIComponent("Check out this book preview: The Infinite Enterprise")}&body=${shareText}%0A${encodeURIComponent(shareUrl)}`,
//     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
//   };

//   const openSharePopup = (url, width = 600, height = 600) => {
//     const left = window.innerWidth / 2 - width / 2;
//     const top = window.innerHeight / 2 - height / 2;
//     window.open(url, "_blank", `width=${width},height=${height},top=${top},left=${left}`);
//   };

//   const handleLinkedInShare = () => {
//     // Optional: send tracking event (Google Analytics example)
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
//     // LinkedIn will have a special handler for popup
//     { icon: <LinkedInIcon fontSize="large" />, color: '#0077b5', onClick: handleLinkedInShare, label: 'LinkedIn' },
//   ];

//   return (
//     <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
//       {/* PDF Viewer */}
//       <Box sx={{ flexGrow: 1 }}>
//         <iframe
//           src="/chapter1.pdf"
//           title="Read the Book"
//           width="100%"
//           height="100%"
//           style={{ border: 'none' }}
//         />
//       </Box>

//       {/* Share Bar */}
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
//   const shareUrl = "https://the-infinite-enterprise.vercel.app/read";

//   const shareLinks = {
//     whatsapp: `https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`,
//     telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${shareText}`,
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
//     twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`,
//     email: `mailto:?subject=${encodeURIComponent("Check out this book preview: The Infinite Enterprise")}&body=${shareText}%0A${encodeURIComponent(shareUrl)}`,
//     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
//   };

//   const icons = [
//     { icon: <WhatsAppIcon fontSize="large" />, color: '#25D366', link: shareLinks.whatsapp, label: 'WhatsApp' },
//     { icon: <TelegramIcon fontSize="large" />, color: '#0088cc', link: shareLinks.telegram, label: 'Telegram' },
//     { icon: <FacebookIcon fontSize="large" />, color: '#1877F2', link: shareLinks.facebook, label: 'Facebook' },
//     { icon: <TwitterIcon fontSize="large" />, color: '#1DA1F2', link: shareLinks.twitter, label: 'Twitter' },
//     { icon: <EmailIcon fontSize="large" />, color: '#D44638', link: shareLinks.email, label: 'Email' },
//     { icon: <LinkedInIcon fontSize="large" />, color: '#0077b5', link: shareLinks.linkedin, label: 'LinkedIn' },
//   ];

//   return (
//     <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
//       {/* PDF Viewer */}
//       <Box sx={{ flexGrow: 1 }}>
//         <iframe
//           src="/chapter1.pdf"
//           title="Read the Book"
//           width="100%"
//           height="100%"
//           style={{ border: 'none' }}
//         />
//       </Box>

//       {/* Floating Share Bar */}
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
//                 component="a"
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
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
//   const shareUrl = "https://the-infinite-enterprise.vercel.app/read"; // Replace with your actual preview page URL

//   // Sharing URLs for different platforms
//   const whatsappLink = `https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`;
//   const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${shareText}`;
//   const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
//   const twitterLink = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`;
//   const emailLink = `mailto:?subject=${encodeURIComponent("Check out this book preview: The Infinite Enterprise")}&body=${shareText}%0A${encodeURIComponent(shareUrl)}`;
//   const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

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

//       {/* Share Prompt */}
//       <Box
//         sx={{
//           backgroundColor: '#fff',
//           p: 3,
//           borderRadius: 2,
//           maxWidth: 700,
//           mx: 'auto',
//           mt: 2,
//           mb: 4,
//           boxShadow: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 2,
//         }}
//       >
//         <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#000', textAlign: 'center' }}>
//           Share this glimpse of <i>The Infinite Enterprise</i> with someone who needs to see it.
//         </Typography>

//         <Box sx={{ display: 'flex', gap: 3 }}>
//           <Tooltip title="Share on WhatsApp">
//             <IconButton
//               component="a"
//               href={whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: '#25D366' }}
//               aria-label="Share on WhatsApp"
//             >
//               <WhatsAppIcon fontSize="large" />
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Share on Telegram">
//             <IconButton
//               component="a"
//               href={telegramLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: '#0088cc' }}
//               aria-label="Share on Telegram"
//             >
//               <TelegramIcon fontSize="large" />
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Share on Facebook">
//             <IconButton
//               component="a"
//               href={facebookLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: '#1877F2' }}
//               aria-label="Share on Facebook"
//             >
//               <FacebookIcon fontSize="large" />
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Share on Twitter">
//             <IconButton
//               component="a"
//               href={twitterLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: '#1DA1F2' }}
//               aria-label="Share on Twitter"
//             >
//               <TwitterIcon fontSize="large" />
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Share via Email">
//             <IconButton
//               component="a"
//               href={emailLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: '#D44638' }}
//               aria-label="Share via Email"
//             >
//               <EmailIcon fontSize="large" />
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Share on LinkedIn">
//             <IconButton
//               component="a"
//               href={linkedinLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: '#0077b5' }}
//               aria-label="Share on LinkedIn"
//             >
//               <LinkedInIcon fontSize="large" />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default PDFViewer;




// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// const PDFViewer = () => {
//   const shareText = encodeURIComponent(
//     "If these words moved you, share this preview of The Infinite Enterprise with your friends."
//   );
//   const shareUrl = "https://yourwebsite.com/read"; // Replace with your actual preview page URL
//   const whatsappLink = `https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`;

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

//       {/* Share Prompt */}
//       <Box
//         component="a"
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         sx={{
//           backgroundColor: '#fff',
//           p: 3,
//           borderRadius: 2,
//           display: 'flex',
//           alignItems: 'center',
//           gap: 2,
//           maxWidth: 700,
//           mx: 'auto',
//           mt: 2,
//           mb: 4,
//           textDecoration: 'none',
//           cursor: 'pointer',
//           boxShadow: 2,
//         }}
//       >
//         <WhatsAppIcon sx={{ color: '#25D366', fontSize: 40 }} />
//         <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#000' }}>
//         Share this glimpse of The Infinite Enterprise with someone who needs to see it.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default PDFViewer;




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
