import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import ProjectBriefNotification from '@/emails/templates/ProjectBriefNotification';
import ProjectBriefConfirmation from '@/emails/templates/ProjectBriefConfirmation';

interface ProjectBriefSubmission {
  // Contact Info
  name: string;
  email: string;
  company: string;
  phone?: string;

  // Project Details
  services: string[];
  projectGoals: string;
  targetAudience?: string;

  // Timeline & Budget
  launchDate: string;
  budgetRange: string;

  // Technical Details
  existingWebsite?: string;
  hostingPreference?: string;
  requiredIntegrations?: string;
}

const serviceLabels: Record<string, string> = {
  web: "Web Development",
  saas: "SaaS Development",
  seo: "SEO Services",
  marketing: "Digital Marketing",
  ecommerce: "E-commerce",
  branding: "Branding & Design",
};

const budgetLabels: Record<string, string> = {
  "5k-10k": "$5,000 - $10,000",
  "10k-25k": "$10,000 - $25,000",
  "25k-50k": "$25,000 - $50,000",
  "50k-100k": "$50,000 - $100,000",
  "100k+": "$100,000+",
  "not-sure": "Not sure yet",
};

const hostingLabels: Record<string, string> = {
  "need-hosting": "Need hosting recommendations",
  "have-hosting": "Have existing hosting",
  "managed": "Want fully managed hosting",
  "not-sure": "Not sure yet",
};

export async function POST(request: NextRequest) {
  try {
    const body: ProjectBriefSubmission = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.company || !body.services || body.services.length === 0 || !body.projectGoals || !body.launchDate || !body.budgetRange) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
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
      console.log('Project brief submission (development mode):', {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        company: body.company.trim(),
        phone: body.phone?.trim() || null,
        services: body.services,
        projectGoals: body.projectGoals.trim(),
        targetAudience: body.targetAudience?.trim() || null,
        launchDate: body.launchDate,
        budgetRange: body.budgetRange,
        existingWebsite: body.existingWebsite?.trim() || null,
        hostingPreference: body.hostingPreference || null,
        requiredIntegrations: body.requiredIntegrations?.trim() || null,
      });

      return NextResponse.json({
        success: true,
        message: 'Project brief submitted successfully (development mode)',
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

    // Format services list for subject
    const servicesFormatted = body.services.map(s => serviceLabels[s] || s).join(", ");

    // Render email templates
    const internalEmailHtml = await render(
      ProjectBriefNotification({
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        company: body.company.trim(),
        phone: body.phone?.trim(),
        services: body.services,
        projectGoals: body.projectGoals.trim(),
        targetAudience: body.targetAudience?.trim(),
        launchDate: body.launchDate,
        budgetRange: body.budgetRange,
        existingWebsite: body.existingWebsite?.trim(),
        hostingPreference: body.hostingPreference,
        requiredIntegrations: body.requiredIntegrations?.trim(),
        receivedAt,
      })
    );

    const confirmationEmailHtml = await render(
      ProjectBriefConfirmation({
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        company: body.company.trim(),
        phone: body.phone?.trim(),
        services: body.services,
        projectGoals: body.projectGoals.trim(),
        targetAudience: body.targetAudience?.trim(),
        launchDate: body.launchDate,
        budgetRange: body.budgetRange,
        existingWebsite: body.existingWebsite?.trim(),
        hostingPreference: body.hostingPreference,
        requiredIntegrations: body.requiredIntegrations?.trim(),
        calendlyUrl: 'https://calendly.com/ravanasolutions',
      })
    );

    // Send internal notification email
    const { data: internalData, error: internalError } = await resend.emails.send({
      from: 'Ravana Solutions <projects@ravanasolutions.com>',
      to: ['nmangubat@ravanasolutions.com'],
      replyTo: body.email.trim().toLowerCase(),
      subject: `New Project Brief from ${body.company.trim()} - ${servicesFormatted}`,
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
      from: 'Ravana Solutions <projects@ravanasolutions.com>',
      to: [body.email.trim().toLowerCase()],
      subject: 'Thank you for your project brief - Ravana Solutions',
      html: confirmationEmailHtml,
    });

    if (confirmationError) {
      console.error('Failed to send confirmation email:', confirmationError);
      // Don't fail the request if confirmation email fails
      // Internal notification was successful
    }

    return NextResponse.json({
      success: true,
      message: 'Project brief submitted successfully. We\'ll be in touch within 24-48 hours!',
      data: { id: internalData?.id }
    });

  } catch (error) {
    console.error('Project brief error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Project Brief API endpoint is working' },
    { status: 200 }
  );
}
