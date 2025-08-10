import { Box } from '@mui/material';

const PDFViewer = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/chapter1.pdf"
        title="Read the Book"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </Box>
  );
};

export default PDFViewer;
