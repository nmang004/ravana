import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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

    // Format services list
    const servicesFormatted = body.services.map(s => serviceLabels[s] || s).join(", ");

    // Format budget
    const budgetFormatted = budgetLabels[body.budgetRange] || body.budgetRange;

    // Format hosting
    const hostingFormatted = body.hostingPreference ? (hostingLabels[body.hostingPreference] || body.hostingPreference) : "Not specified";

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: 'Ravana Project Brief <onboarding@resend.dev>', // Change to your verified domain later
      to: ['nmangubat@ravanasolutions.com'],
      replyTo: body.email.trim(),
      subject: `New Project Brief from ${body.company} - ${servicesFormatted}`,
      html: `
        <h2>New Project Brief Submission</h2>

        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${body.name.trim()}</p>
        <p><strong>Email:</strong> ${body.email.trim()}</p>
        <p><strong>Company:</strong> ${body.company.trim()}</p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone.trim()}</p>` : ''}

        <h3>Project Details</h3>
        <p><strong>Services Requested:</strong> ${servicesFormatted}</p>
        <p><strong>Project Goals:</strong></p>
        <p>${body.projectGoals.trim().replace(/\n/g, '<br>')}</p>
        ${body.targetAudience ? `<p><strong>Target Audience:</strong> ${body.targetAudience.trim()}</p>` : ''}

        <h3>Timeline & Budget</h3>
        <p><strong>Desired Launch Date:</strong> ${body.launchDate}</p>
        <p><strong>Budget Range:</strong> ${budgetFormatted}</p>

        <h3>Technical Details</h3>
        ${body.existingWebsite ? `<p><strong>Existing Website:</strong> <a href="${body.existingWebsite.trim()}">${body.existingWebsite.trim()}</a></p>` : '<p><strong>Existing Website:</strong> None specified</p>'}
        <p><strong>Hosting Preference:</strong> ${hostingFormatted}</p>
        ${body.requiredIntegrations ? `<p><strong>Required Integrations:</strong></p><p>${body.requiredIntegrations.trim().replace(/\n/g, '<br>')}</p>` : ''}

        <hr>
        <p><small>Submitted from ravana.agency project brief form</small></p>
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
      message: 'Project brief submitted successfully. We\'ll be in touch within 24-48 hours!',
      data: { id: data?.id }
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
