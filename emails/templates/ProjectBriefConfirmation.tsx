import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { EmailLayout } from '../components/EmailLayout';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { EmailButton } from '../components/EmailButton';
import { EmailCard, CardRow } from '../components/EmailCard';

interface ProjectBriefConfirmationProps {
  name: string;
  email: string;
  company: string;
  phone?: string;
  services: string[];
  projectGoals: string;
  targetAudience?: string;
  launchDate: string;
  budgetRange: string;
  existingWebsite?: string;
  hostingPreference?: string;
  requiredIntegrations?: string;
  calendlyUrl?: string;
}

export const ProjectBriefConfirmation = ({
  name,
  email,
  company,
  phone,
  services,
  projectGoals,
  targetAudience,
  launchDate,
  budgetRange,
  existingWebsite,
  hostingPreference,
  requiredIntegrations,
  calendlyUrl = 'https://calendly.com/nmangubat-ravanasolutions/30min',
}: ProjectBriefConfirmationProps) => {
  const firstName = name.split(' ')[0];

  // Format services for display
  const serviceLabels: { [key: string]: string } = {
    saas: 'SaaS Development',
    web: 'Web Development',
    marketing: 'Digital Marketing',
    seo: 'SEO Services',
  };

  const formattedServices = services.map((s) => serviceLabels[s] || s).join(', ');

  // Format budget for display
  const budgetLabels: { [key: string]: string } = {
    'under-5k': 'Under $5,000',
    '5k-10k': '$5,000 - $10,000',
    '10k-25k': '$10,000 - $25,000',
    '25k-50k': '$25,000 - $50,000',
    '50k-plus': '$50,000+',
  };

  const formattedBudget = budgetLabels[budgetRange] || budgetRange;

  return (
    <EmailLayout preview={`Thank you for your project brief, ${firstName}!`}>
      <EmailHeader
        title={`Thank You for Your Project Brief, ${firstName}! 🚀`}
        variant="customer"
      />

      <Section style={content}>
        {/* Welcome Message */}
        <Text style={welcomeText}>
          Your project brief has been successfully submitted!
        </Text>

        <Text style={bodyText}>
          We're thrilled that <strong>{company}</strong> is considering Ravana
          Solutions for your digital transformation. We've received your detailed
          project brief and our team is already reviewing it to prepare for our
          upcoming conversation.
        </Text>

        {/* Project Summary */}
        <Section style={summarySection}>
          <Text style={summaryTitle}>📋 Your Project Summary</Text>
        </Section>

        <EmailCard title="Contact Information" variant="default">
          <CardRow label="Name" value={name} />
          <CardRow label="Email" value={email} />
          <CardRow label="Company" value={company} />
          {phone && <CardRow label="Phone" value={phone} />}
        </EmailCard>

        <EmailCard title="Project Details" variant="default">
          <CardRow label="Services Requested" value={formattedServices} />
          <CardRow label="Project Goals" value={projectGoals} />
          {targetAudience && (
            <CardRow label="Target Audience" value={targetAudience} />
          )}
        </EmailCard>

        <EmailCard title="Timeline & Budget" variant="default">
          <CardRow label="Desired Launch Date" value={launchDate} />
          <CardRow label="Budget Range" value={formattedBudget} />
        </EmailCard>

        {(existingWebsite || hostingPreference || requiredIntegrations) && (
          <EmailCard title="Technical Details" variant="default">
            {existingWebsite && (
              <CardRow label="Existing Website" value={existingWebsite} />
            )}
            {hostingPreference && (
              <CardRow label="Hosting Preference" value={hostingPreference} />
            )}
            {requiredIntegrations && (
              <CardRow label="Required Integrations" value={requiredIntegrations} />
            )}
          </EmailCard>
        )}

        {/* What's Next */}
        <Section style={nextStepsSection}>
          <Text style={sectionTitle}>🎯 What Happens Next?</Text>

          <Section style={timelineSection}>
            <Text style={timelineItem}>
              <strong>Within 24 Hours</strong>
              <br />
              Our team will review your project brief in detail and prepare preliminary
              questions and insights.
            </Text>

            <Text style={timelineItem}>
              <strong>Discovery Call</strong>
              <br />
              We'll reach out to schedule a comprehensive discovery call to dive deeper
              into your requirements and vision.
            </Text>

            <Text style={timelineItem}>
              <strong>Proposal & Timeline</strong>
              <br />
              After our discussion, we'll prepare a detailed proposal including scope,
              timeline, and investment breakdown.
            </Text>

            <Text style={timelineItem}>
              <strong>Project Kickoff</strong>
              <br />
              Once approved, we'll schedule your project kickoff and begin bringing your
              vision to life!
            </Text>
          </Section>
        </Section>

        {/* CTA Section */}
        <Section style={ctaSection}>
          <Text style={ctaTitle}>🗓️ Ready to Move Faster?</Text>
          <Text style={ctaText}>
            Don't wait for us to reach out - schedule your discovery call now and let's
            start transforming your ideas into reality.
          </Text>
          <Section style={buttonContainer}>
            <EmailButton href={calendlyUrl} variant="primary" fullWidth>
              Schedule Your Discovery Call Now
            </EmailButton>
          </Section>
        </Section>

        {/* Our Process */}
        <Section style={processSection}>
          <Text style={processTitle}>💎 The Ravana Solutions Advantage</Text>

          <Text style={processItem}>
            <strong>🎨 Strategic Discovery</strong>
            <br />
            We don't just build - we strategize. Our discovery process ensures every
            decision aligns with your business goals.
          </Text>

          <Text style={processItem}>
            <strong>⚡ Agile Development</strong>
            <br />
            Stay involved throughout the process with regular updates, demos, and
            feedback sessions.
          </Text>

          <Text style={processItem}>
            <strong>🚀 Launch & Beyond</strong>
            <br />
            Our partnership doesn't end at launch. We provide ongoing support,
            optimization, and growth strategies.
          </Text>

          <Text style={processItem}>
            <strong>📊 Measurable Results</strong>
            <br />
            Every project is built with analytics and performance tracking from day one.
          </Text>
        </Section>

        {/* Questions Section */}
        <Section style={questionsSection}>
          <Text style={questionsTitle}>Have Questions?</Text>
          <Text style={questionsText}>
            We're here to help! Feel free to reply to this email or give us a call at
            (757) 685-7209. Our team is ready to answer any questions you might have
            about your project.
          </Text>
        </Section>

        {/* Closing */}
        <Text style={closingText}>
          Thank you for choosing Ravana Solutions. We're excited to partner with you and
          create something truly extraordinary for <strong>{company}</strong>.
        </Text>

        <Text style={signatureText}>
          Best regards,
          <br />
          <strong>The Ravana Solutions Team</strong>
          <br />
          <em>Crafting Digital Experiences That Drive Results</em>
        </Text>
      </Section>

      <EmailFooter variant="customer" />
    </EmailLayout>
  );
};

const content = {
  backgroundColor: '#FFFFFF',
  padding: '30px',
};

const welcomeText = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 15px 0',
  lineHeight: '1.4',
};

const bodyText = {
  fontSize: '15px',
  color: '#404040',
  lineHeight: '1.6',
  margin: '0 0 30px 0',
};

const summarySection = {
  marginBottom: '20px',
};

const summaryTitle = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0',
  textAlign: 'center' as const,
};

const nextStepsSection = {
  marginTop: '30px',
  marginBottom: '30px',
};

const sectionTitle = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 20px 0',
  textAlign: 'center' as const,
};

const timelineSection = {
  marginTop: '20px',
};

const timelineItem = {
  fontSize: '15px',
  color: '#404040',
  lineHeight: '1.6',
  margin: '0 0 20px 0',
  paddingLeft: '20px',
  borderLeft: '3px solid #FFD700',
  paddingBottom: '10px',
};

const ctaSection = {
  backgroundColor: '#0A0A0A',
  padding: '30px',
  borderRadius: '8px',
  marginTop: '30px',
  marginBottom: '30px',
  textAlign: 'center' as const,
};

const ctaTitle = {
  fontSize: '22px',
  fontWeight: '700',
  color: '#FFD700',
  margin: '0 0 15px 0',
};

const ctaText = {
  fontSize: '15px',
  color: '#FFFFFF',
  lineHeight: '1.6',
  margin: '0 0 25px 0',
};

const buttonContainer = {
  marginTop: '20px',
};

const processSection = {
  backgroundColor: '#f9f9f9',
  padding: '25px',
  borderRadius: '8px',
  marginTop: '30px',
  marginBottom: '30px',
};

const processTitle = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 20px 0',
  textAlign: 'center' as const,
};

const processItem = {
  fontSize: '14px',
  color: '#404040',
  lineHeight: '1.7',
  margin: '0 0 18px 0',
};

const questionsSection = {
  backgroundColor: '#FFFEF5',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #FFD700',
  marginTop: '30px',
  marginBottom: '30px',
};

const questionsTitle = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 10px 0',
};

const questionsText = {
  fontSize: '14px',
  color: '#404040',
  lineHeight: '1.6',
  margin: '0',
};

const closingText = {
  fontSize: '15px',
  color: '#404040',
  lineHeight: '1.6',
  margin: '30px 0 20px 0',
};

const signatureText = {
  fontSize: '15px',
  color: '#0A0A0A',
  lineHeight: '1.6',
  margin: '0',
};

export default ProjectBriefConfirmation;
