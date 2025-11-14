import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
  service?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactSubmission = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      // Development mode - just log the submission
      console.log('Contact form submission (development mode):', {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        company: body.company?.trim() || null,
        message: body.message.trim(),
        service: body.service || null,
      });

      return NextResponse.json({
        success: true,
        message: 'Contact form submitted successfully (development mode)',
        data: { id: 'dev-' + Date.now() }
      });
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email notification to you
    const { data, error } = await resend.emails.send({
      from: 'Ravana Solutions <contact@ravanasolutions.com>',
      to: ['nmangubat@ravanasolutions.com'],
      replyTo: body.email.trim(),
      subject: `New Contact Form Submission${body.service ? ` - ${body.service}` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name.trim()}</p>
        <p><strong>Email:</strong> ${body.email.trim()}</p>
        ${body.company ? `<p><strong>Company:</strong> ${body.company.trim()}</p>` : ''}
        ${body.service ? `<p><strong>Service Interest:</strong> ${body.service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${body.message.trim().replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from ravanasolutions.com contact form</small></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully. We\'ll be in touch soon!',
      data: { id: data?.id }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}