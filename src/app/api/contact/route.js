import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';

const { SITE_CONFIG } = require('@/config/site.config');

export async function POST(request) {
  try {
    // Form verilerini al
    const body = await request.json();
    const { name, email, message } = body;
    
    // Basit validasyon
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'İsim, e-posta ve mesaj alanları zorunludur' },
        { status: 400 }
      );
    }
    
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      );
    }
    
    // E-posta gönderimi
    const emailSent = await sendEmail({
      to: SITE_CONFIG.personal.contacts.email,
      subject: `Portfolio İletişim Formu: ${name}`,
      text: `
        İsim: ${name}
        E-posta: ${email}
        
        Mesaj:
        ${message}
      `,
      html: `
        <h2>Portfolio İletişim Formu</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <h3>Mesaj:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });
    
    if (!emailSent) {
      return NextResponse.json(
        { error: 'E-posta gönderilirken bir hata oluştu' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla gönderildi' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('İletişim formu hatası:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu, lütfen daha sonra tekrar deneyin' },
      { status: 500 }
    );
  }
} 