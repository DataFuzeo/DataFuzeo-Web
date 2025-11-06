import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, interest } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    console.log('Attempting to send email with:', {
      user: process.env.GMAIL_USER,
      hasPassword: !!process.env.GMAIL_APP_PASSWORD,
      passwordLength: process.env.GMAIL_APP_PASSWORD?.length
    });

    // Send email to yourself
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${interest ? `<p><strong>Interest:</strong> ${interest}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
              ${message}
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to:', process.env.GMAIL_USER);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    // Send auto-reply to client
    const clientMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Data Fuzeo - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0066cc 0%, #004499 100%); padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Data Fuzeo</h1>
            <p style="color: #e6f3ff; margin: 10px 0 0 0;">AI, Data Science & Intelligent Automation</p>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #333; margin: 0 0 20px 0;">Hi ${name},</h2>
            
            <p style="color: #555; line-height: 1.6;">
              Thank you for reaching out to <strong>Data Fuzeo</strong>! We've received your message and are excited to learn about your project.
            </p>
            
            <div style="background: #f8f9ff; border-left: 4px solid #0066cc; padding: 20px; margin: 25px 0;">
              <h3 style="color: #0066cc; margin: 0 0 10px 0;">What happens next?</h3>
              <ul style="color: #555; margin: 0; padding-left: 20px;">
                <li><strong>Within 2-4 hours:</strong> Our team will review your requirements</li>
                <li><strong>Within 24 hours:</strong> You'll receive a personalized response</li>
                <li><strong>Next steps:</strong> We'll schedule a discovery call</li>
              </ul>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              Best regards,<br>
              <strong style="color: #0066cc;">The Data Fuzeo Team</strong>
            </p>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(clientMailOptions);
      console.log('Auto-reply sent successfully to:', email);
    } catch (emailError) {
      console.error('Auto-reply failed:', emailError);
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
