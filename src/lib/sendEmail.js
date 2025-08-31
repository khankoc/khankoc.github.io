import nodemailer from 'nodemailer';

export async function sendEmail({ to, subject, text, html }) {
  try {
    // Gmail SMTP transporter oluştur
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Gmail adresiniz
        pass: process.env.EMAIL_PASS  // Gmail uygulama şifresi
      }
    });

    // E-posta gönder
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
      html: html
    });

    console.log('E-posta başarıyla gönderildi:', info.messageId);
    return true;
    
  } catch (error) {
    console.error('E-posta gönderimi hatası:', error);
    return false;
  }
} 