import { Section, Text, Row, Column } from '@react-email/components';
import * as React from 'react';
import { EmailLayout } from '../components/EmailLayout';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { EmailButton } from '../components/EmailButton';
import { EmailCard, CardRow } from '../components/EmailCard';

interface ContactNotificationProps {
  name: string;
  email: string;
  company?: string;
  message: string;
  service?: string;
  receivedAt: string;
}

export const ContactNotification = ({
  name,
  email,
  company,
  message,
  service,
  receivedAt,
}: ContactNotificationProps) => {
  return (
    <EmailLayout preview={`New contact request from ${name}`}>
      <EmailHeader title="New Contact Request" variant="internal" />

      <Section style={content}>
        {/* Timestamp Badge */}
        <Section style={timestampSection}>
          <Text style={timestampText}>
            Received: {receivedAt}
          </Text>
        </Section>

        {/* Action Buttons */}
        <Section style={actionButtons}>
          <Row>
            <Column style={buttonColumn}>
              <EmailButton
                href={`mailto:${email}?subject=Re: Your inquiry with Ravana Solutions`}
                variant="primary"
                fullWidth
              >
                Reply
              </EmailButton>
            </Column>
            <Column style={buttonColumn}>
              <EmailButton
                href={`https://ravanasolutions.com/contact`}
                variant="secondary"
                fullWidth
              >
                View Dashboard
              </EmailButton>
            </Column>
          </Row>
        </Section>

        {/* Customer Info Card */}
        <EmailCard title="Customer Information" variant="highlight">
          <CardRow label="Name" value={name} />
          <CardRow
            label="Email"
            value={
              <a href={`mailto:${email}`} style={emailLink}>
                {email}
              </a>
            }
          />
          {company && <CardRow label="Company" value={company} />}
          {service && (
            <CardRow
              label="Service Interested In"
              value={<span style={serviceBadge}>{service}</span>}
            />
          )}
        </EmailCard>

        {/* Message Card */}
        <EmailCard title="Message">
          <Text style={messageText}>{message}</Text>
        </EmailCard>

        {/* Quick Actions */}
        <Section style={quickActionsSection}>
          <Text style={quickActionsTitle}>Quick Actions</Text>
          <Text style={quickActionsList}>
            • Add to CRM<br />
            • Schedule follow-up call<br />
            • Send proposal template<br />
            • Book discovery meeting
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

const serviceBadge = {
  backgroundColor: '#FFD700',
  color: '#0A0A0A',
  padding: '6px 12px',
  borderRadius: '4px',
  fontSize: '13px',
  fontWeight: '600',
  display: 'inline-block',
};

const messageText = {
  fontSize: '15px',
  color: '#0A0A0A',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const quickActionsSection = {
  backgroundColor: '#FFFEF5',
  padding: '20px',
  borderRadius: '6px',
  marginTop: '20px',
  border: '1px solid #FFD700',
};

const quickActionsTitle = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 10px 0',
};

const quickActionsList = {
  fontSize: '14px',
  color: '#404040',
  margin: '0',
  lineHeight: '1.8',
};

export default ContactNotification;
