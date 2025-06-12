import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      parentName,
      email,
      phone,
      childName,
      childAge,
      preferredStartDate,
      tourDate,
      tourTime,
      message,
      to,
      subject
    } = body;

    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: `
        <h2>New Enrollment Application</h2>
        <p><strong>Parent/Guardian Name:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Child's Name:</strong> ${childName}</p>
        <p><strong>Child's Age:</strong> ${childAge}</p>
        <p><strong>Preferred Start Date:</strong> ${preferredStartDate}</p>
        <p><strong>Tour Date:</strong> ${tourDate}</p>
        <p><strong>Preferred Tour Time:</strong> ${tourTime}</p>
        ${message ? `<p><strong>Additional Information:</strong> ${message}</p>` : ''}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 