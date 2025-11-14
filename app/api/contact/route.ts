import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import ContactNotification from '@/emails/templates/ContactNotification';
import ContactConfirmation from '@/emails/templates/ContactConfirmation';

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

    const receivedAt = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
    });

    // Render email templates
    const internalEmailHtml = await render(
      ContactNotification({
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        company: body.company?.trim(),
        message: body.message.trim(),
        service: body.service,
        receivedAt,
      })
    );

    const confirmationEmailHtml = await render(
      ContactConfirmation({
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        company: body.company?.trim(),
        message: body.message.trim(),
        service: body.service,
        calendlyUrl: 'https://calendly.com/ravanasolutions',
      })
    );

    // Send internal notification email
    const { data: internalData, error: internalError } = await resend.emails.send({
      from: 'Ravana Solutions <contact@ravanasolutions.com>',
      to: ['nmangubat@ravanasolutions.com'],
      replyTo: body.email.trim().toLowerCase(),
      subject: `New Contact Request${body.service ? ` - ${body.service}` : ''}`,
      html: internalEmailHtml,
    });

    if (internalError) {
      console.error('Failed to send internal notification:', internalError);
      return NextResponse.json(
        { success: false, error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const { error: confirmationError } = await resend.emails.send({
      from: 'Ravana Solutions <contact@ravanasolutions.com>',
      to: [body.email.trim().toLowerCase()],
      subject: 'Thank you for contacting Ravana Solutions',
      html: confirmationEmailHtml,
    });

    if (confirmationError) {
      console.error('Failed to send confirmation email:', confirmationError);
      // Don't fail the request if confirmation email fails
      // Internal notification was successful
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully. We\'ll be in touch soon!',
      data: { id: internalData?.id }
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