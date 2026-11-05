import nodemailer from 'nodemailer';

export async function sendContactNotification({ name, email, service, budget, timeline, subject, message }) {
  const emailUser = process.env.EMAIL_USER || process.env.SMTP_USER;
  const emailPass = process.env.EMAIL_PASS || process.env.SMTP_PASS;

  if (!emailUser || !emailPass) {
    console.warn('EMAIL_USER or EMAIL_PASS not configured. Skipping email dispatch.');
    return { skipped: true, reason: 'Email credentials not set' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"Portfolio Client Inquiry" <${emailUser}>`,
    to: emailUser, // Send directly to Nabil's inbox
    replyTo: email,
    subject: subject || `⚡ New Client Inquiry: ${name} (${service || 'MERN Project'})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0b0a1a 0%, #151228 100%); padding: 24px; text-align: center; border-bottom: 3px solid #c9a15f;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Client Project Inquiry</h2>
          <p style="color: #c9a15f; margin: 4px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Nabil Ahmad Portfolio</p>
        </div>
        
        <div style="padding: 24px; color: #334155;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${email}" style="color: #0a66c2; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Requested Service:</strong></td>
              <td style="padding: 8px 0; color: #c9a15f; font-size: 14px; font-weight: bold;">${service || 'Custom MERN App'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Budget:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${budget || 'Flexible'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;"><strong>Timeline:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${timeline || 'Flexible'}</td>
            </tr>
          </table>

          <div style="background: #f8fafc; border-left: 4px solid #c9a15f; padding: 16px; border-radius: 4px; margin-top: 10px;">
            <p style="margin: 0 0 6px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold;">Client Message:</p>
            <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject || 'Your Project Inquiry')}" 
               style="background: #c9a15f; color: #0b0a1a; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 13px; display: inline-block;">
               Reply to Client
            </a>
          </div>
        </div>

        <div style="background: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8;">
          Sent automatically from <a href="https://nabil-tech.vercel.app" style="color: #64748b; text-decoration: none;">nabil-tech.vercel.app</a>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

