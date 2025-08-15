import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { to, subject, text, imageUrl } = req.body;

  if (!to || !subject || !text || !imageUrl) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create transporter
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email with HTML and embedded image
    let info = await transporter.sendMail({
      from: `"Book Publisher" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html: `
        <div>
          <h1>${subject}</h1>
          <p>${text}</p>
          <img src="${imageUrl}" alt="Book Cover" style="max-width:100%;height:auto;" />
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent', info });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ message: 'Error sending email', error });
  }
}
