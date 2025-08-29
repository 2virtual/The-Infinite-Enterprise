// src/utils/generateQuoteImage.js
export const generateQuoteImage = (quote, filename = 'ie-quote') => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1080;
    canvas.height = 1080;
  
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = 'https://res.cloudinary.com/dphiclnsc/image/upload/v1755272387/book_cover_2_fhc7x3.png';
  
    img.onload = () => {
      // Scale and center book cover
      const scale = Math.max(1080 / img.width, 1080 / img.height);
      const imgWidth = img.width * scale;
      const imgHeight = img.height * scale;
      const x = (1080 - imgWidth) / 2;
      const y = (1080 - imgHeight) / 2;
      ctx.drawImage(img, x, y, imgWidth, imgHeight);
  
      // Semi-transparent overlay for readability
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, 1080, 1080);
  
      // Reset text settings
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
  
// --- Main Quote ---
ctx.font = 'bold 60px Georgia, "Times New Roman", serif';
wrapText(ctx, `"${quote}"`, 540, 520, 900, 70);

// --- Attribution: "— The Infinite Enterprise" ---
ctx.font = 'italic 44px Georgia, serif';
ctx.fillStyle = 'white';
ctx.fillText('— The Infinite Enterprise', 540, 960);

// --- Website URL: Immediately after attribution ---
ctx.font = '300 24px Arial, sans-serif';
ctx.fillStyle = '#29B6F6'; // Bright sky blue
ctx.fillText('theinfiniteenterprise.com', 540, 1000); // Only 30px below
      // --- Trigger Download ---
      const link = document.createElement('a');
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  
    img.onerror = () => {
      alert('Failed to load book cover. Please check your connection and try again.');
    };
  };
  
  // Text wrapping helper
  function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let currentLine = 0;
  
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = context.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        context.fillText(line.trim(), x, y + (currentLine * lineHeight));
        line = words[n] + ' ';
        currentLine++;
      } else {
        line = testLine;
      }
    }
    context.fillText(line.trim(), x, y + (currentLine * lineHeight));
  }