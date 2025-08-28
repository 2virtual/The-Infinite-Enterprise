// src/utils/generateQuoteImage.js
export const generateQuoteImage = (quote, filename = 'ie-quote') => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1080;
    canvas.height = 1080;
  
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Required for Cloudinary
    img.src = 'https://res.cloudinary.com/dphiclnsc/image/upload/v1755272387/book_cover_2_fhc7x3.png';
  
    img.onload = () => {
      // Scale and center image
      const scale = Math.max(1080 / img.width, 1080 / img.height);
      const imgWidth = img.width * scale;
      const imgHeight = img.height * scale;
      const x = (1080 - imgWidth) / 2;
      const y = (1080 - imgHeight) / 2;
      ctx.drawImage(img, x, y, imgWidth, imgHeight);
  
      // Dark overlay for readability
      ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
      ctx.fillRect(0, 0, 1080, 1080);
  
      // Quote Text
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      const fontSize = 60;
      ctx.font = `bold ${fontSize}px Georgia, "Times New Roman", serif`;
      wrapText(ctx, `"${quote}"`, 540, 500, 900, 70);
  
      // Attribution
      ctx.font = 'italic 40px Georgia, serif';
      ctx.fillText('— The Infinite Enterprise', 540, 620);
  
      // Website
      ctx.font = 'bold 32px Arial, sans-serif';
      ctx.fillStyle = '#1976d2';
      ctx.fillText('yourwebsite.com', 540, 1000);
  
      // Trigger Download
      const link = document.createElement('a');
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  
    img.onerror = () => {
      alert('Failed to load book cover. Check your internet or try again.');
    };
  };
  
  function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let currentLine = 0;
  
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = context.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        context.fillText(line, x, y + (currentLine * lineHeight));
        line = words[n] + ' ';
        currentLine++;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, y + (currentLine * lineHeight));
  }