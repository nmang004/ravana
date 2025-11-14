import { Section, Text, Row, Column } from '@react-email/components';
import * as React from 'react';
import { EmailLayout } from '../components/EmailLayout';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { EmailButton } from '../components/EmailButton';
import { EmailCard, CardRow } from '../components/EmailCard';

interface ProjectBriefNotificationProps {
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
  receivedAt: string;
}

export const ProjectBriefNotification = ({
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
  receivedAt,
}: ProjectBriefNotificationProps) => {
  // Format services for display
  const serviceLabels: { [key: string]: string } = {
    saas: 'SaaS Development',
    web: 'Web Development',
    marketing: 'Digital Marketing',
    seo: 'SEO Services',
  };

  const formattedServices = services.map((s) => serviceLabels[s] || s);

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
    <EmailLayout preview={`New project brief from ${company}`}>
      <EmailHeader title="🎯 New Project Brief Submission" variant="internal" />

      <Section style={content}>
        {/* Timestamp Badge */}
        <Section style={timestampSection}>
          <Text style={timestampText}>
            📅 Received: {receivedAt}
          </Text>
        </Section>

        {/* Action Buttons */}
        <Section style={actionButtons}>
          <Row>
            <Column style={buttonColumn}>
              <EmailButton
                href={`mailto:${email}?subject=Re: Project Brief - ${company}`}
                variant="primary"
                fullWidth
              >
                ✉️ Reply
              </EmailButton>
            </Column>
            {phone && (
              <Column style={buttonColumn}>
                <EmailButton href={`tel:${phone}`} variant="secondary" fullWidth>
                  📞 Call
                </EmailButton>
              </Column>
            )}
          </Row>
        </Section>

        {/* Client Info Card */}
        <EmailCard title="👤 Client Information" variant="highlight">
          <CardRow label="Name" value={name} />
          <CardRow
            label="Email"
            value={
              <a href={`mailto:${email}`} style={emailLink}>
                {email}
              </a>
            }
          />
          <CardRow label="Company" value={company} />
          {phone && (
            <CardRow
              label="Phone"
              value={
                <a href={`tel:${phone}`} style={phoneLink}>
                  {phone}
                </a>
              }
            />
          )}
        </EmailCard>

        {/* Project Details Card */}
        <EmailCard title="🚀 Project Details">
          <CardRow
            label="Services Requested"
            value={
              <Section style={servicesContainer}>
                {formattedServices.map((service, index) => (
                  <span key={index} style={serviceBadge}>
                    {service}
                  </span>
                ))}
              </Section>
            }
          />
          <CardRow label="Project Goals" value={projectGoals} />
          {targetAudience && (
            <CardRow label="Target Audience" value={targetAudience} />
          )}
        </EmailCard>

        {/* Timeline & Budget Card */}
        <EmailCard title="📊 Timeline & Budget">
          <CardRow label="Desired Launch Date" value={launchDate} />
          <CardRow
            label="Budget Range"
            value={<span style={budgetBadge}>{formattedBudget}</span>}
          />
        </EmailCard>

        {/* Technical Details Card (if provided) */}
        {(existingWebsite || hostingPreference || requiredIntegrations) && (
          <EmailCard title="⚙️ Technical Details">
            {existingWebsite && (
              <CardRow
                label="Existing Website"
                value={
                  existingWebsite.startsWith('http') ? (
                    <a href={existingWebsite} style={linkStyle}>
                      {existingWebsite}
                    </a>
                  ) : (
                    existingWebsite
                  )
                }
              />
            )}
            {hostingPreference && (
              <CardRow label="Hosting Preference" value={hostingPreference} />
            )}
            {requiredIntegrations && (
              <CardRow
                label="Required Integrations"
                value={requiredIntegrations}
              />
            )}
          </EmailCard>
        )}

        {/* Next Steps */}
        <Section style={nextStepsSection}>
          <Text style={nextStepsTitle}>📋 Recommended Next Steps</Text>
          <Text style={nextStepsList}>
            1. Review project scope and budget alignment<br />
            2. Schedule discovery call within 24-48 hours<br />
            3. Prepare initial proposal outline<br />
            4. Send calendar invite with agenda<br />
            5. Add to CRM and project pipeline
          </Text>
        </Section>
      </Section>

      <EmailFooter variant="internal" />
    </EmailLayout>
  );
};

const content = {
  backgroundColor: '#FFFFFF',
  padding: '30px',
};

const timestampSection = {
  backgroundColor: '#f9f9f9',
  padding: '12px 20px',
  borderRadius: '6px',
  marginBottom: '20px',
  borderLeft: '4px solid #FFD700',
};

const timestampText = {
  fontSize: '14px',
  color: '#404040',
  margin: '0',
  fontWeight: '500',
};

const actionButtons = {
  marginBottom: '25px',
};

const buttonColumn = {
  padding: '0 5px',
};

const emailLink = {
  color: '#FFD700',
  textDecoration: 'none',
  fontWeight: '500',
};

const phoneLink = {
  color: '#FFD700',
  textDecoration: 'none',
  fontWeight: '500',
};

const linkStyle = {
  color: '#FFD700',
  textDecoration: 'none',
  fontWeight: '500',
};

const servicesContainer = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '8px',
};

const serviceBadge = {
  backgroundColor: '#FFD700',
  color: '#0A0A0A',
  padding: '6px 12px',
  borderRadius: '4px',
  fontSize: '13px',
  fontWeight: '600',
  display: 'inline-block',
  marginRight: '8px',
  marginBottom: '8px',
};

const budgetBadge = {
  backgroundColor: '#0A0A0A',
  color: '#FFD700',
  padding: '8px 16px',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: '700',
  display: 'inline-block',
};

const nextStepsSection = {
  backgroundColor: '#FFFEF5',
  padding: '20px',
  borderRadius: '6px',
  marginTop: '20px',
  border: '2px solid #FFD700',
};

const nextStepsTitle = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 12px 0',
};

const nextStepsList = {
  fontSize: '14px',
  color: '#404040',
  margin: '0',
  lineHeight: '2',
};

export default ProjectBriefNotification;
