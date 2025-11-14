import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { EmailLayout } from '../components/EmailLayout';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { EmailButton } from '../components/EmailButton';
import { EmailCard, CardRow } from '../components/EmailCard';

interface ContactConfirmationProps {
  name: string;
  email: string;
  company?: string;
  message: string;
  service?: string;
  calendlyUrl?: string;
}

export const ContactConfirmation = ({
  name,
  email,
  company,
  message,
  service,
  calendlyUrl = 'https://calendly.com/nmangubat-ravanasolutions/30min',
}: ContactConfirmationProps) => {
  const firstName = name.split(' ')[0];

  return (
    <EmailLayout preview={`Thank you for contacting Ravana Solutions, ${firstName}!`}>
      <EmailHeader title={`Thank You, ${firstName}! 🎉`} variant="customer" />

      <Section style={content}>
        {/* Welcome Message */}
        <Text style={welcomeText}>
          We've received your message and are excited to connect with you!
        </Text>

        <Text style={bodyText}>
          Our team at Ravana Solutions is committed to delivering exceptional digital
          experiences, and we appreciate you reaching out to us. We'll review your
          inquiry and get back to you shortly.
        </Text>

        {/* Submission Summary */}
        <EmailCard title="📝 Your Submission Summary" variant="highlight">
          <CardRow label="Name" value={name} />
          <CardRow label="Email" value={email} />
          {company && <CardRow label="Company" value={company} />}
          {service && <CardRow label="Service Interest" value={service} />}
          <CardRow label="Your Message" value={message} />
        </EmailCard>

        {/* What's Next */}
        <Section style={nextStepsSection}>
          <Text style={sectionTitle}>🚀 What Happens Next?</Text>
          <Text style={stepsList}>
            <strong>1. Review</strong> - We'll carefully review your inquiry and assess
            how we can best help you achieve your goals.
            <br />
            <br />
            <strong>2. Response</strong> - Expect to hear from us within 24-48 business
            hours with next steps.
            <br />
            <br />
            <strong>3. Discovery</strong> - We'll schedule a call to discuss your
            project in detail and explore the possibilities.
          </Text>
        </Section>

        {/* CTA Section */}
        <Section style={ctaSection}>
          <Text style={ctaTitle}>Want to skip the wait?</Text>
          <Text style={ctaText}>
            Book a free 30-minute consultation directly with our team to discuss your
            project goals, timeline, and how we can help bring your vision to life.
          </Text>
          <Section style={buttonContainer}>
            <EmailButton href={calendlyUrl} variant="primary" fullWidth>
              📅 Schedule Your Free Consultation
            </EmailButton>
          </Section>
        </Section>

        {/* Why Ravana */}
        <Section style={whySection}>
          <Text style={whyTitle}>Why Choose Ravana Solutions?</Text>
          <Section style={benefitsList}>
            <Text style={benefitItem}>
              ✨ <strong>Premium Quality</strong> - We craft unforgettable digital
              experiences
            </Text>
            <Text style={benefitItem}>
              🎯 <strong>Results-Driven</strong> - Every project is built to drive
              measurable results
            </Text>
            <Text style={benefitItem}>
              🚀 <strong>Technical Excellence</strong> - Cutting-edge solutions powered
              by expertise
            </Text>
            <Text style={benefitItem}>
              💼 <strong>Client-Focused</strong> - Your success is our success
            </Text>
          </Section>
        </Section>

        {/* Closing */}
        <Text style={closingText}>
          We look forward to partnering with you to create something extraordinary.
        </Text>

        <Text style={signatureText}>
          Best regards,
          <br />
          <strong>The Ravana Solutions Team</strong>
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
  fontSize: '18px',
  fontWeight: '600',
  color: '#0A0A0A',
  margin: '0 0 15px 0',
  lineHeight: '1.5',
};

const bodyText = {
  fontSize: '15px',
  color: '#404040',
  lineHeight: '1.6',
  margin: '0 0 25px 0',
};

const nextStepsSection = {
  marginTop: '25px',
  marginBottom: '25px',
};

const sectionTitle = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 15px 0',
};

const stepsList = {
  fontSize: '15px',
  color: '#404040',
  lineHeight: '1.8',
  margin: '0',
};

const ctaSection = {
  backgroundColor: '#FFFEF5',
  padding: '25px',
  borderRadius: '8px',
  marginTop: '25px',
  marginBottom: '25px',
  border: '2px solid #FFD700',
  textAlign: 'center' as const,
};

const ctaTitle = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 10px 0',
};

const ctaText = {
  fontSize: '15px',
  color: '#404040',
  lineHeight: '1.6',
  margin: '0 0 20px 0',
};

const buttonContainer = {
  marginTop: '20px',
};

const whySection = {
  marginTop: '30px',
  marginBottom: '30px',
};

const whyTitle = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 15px 0',
  textAlign: 'center' as const,
};

const benefitsList = {
  marginTop: '15px',
};

const benefitItem = {
  fontSize: '14px',
  color: '#404040',
  lineHeight: '1.8',
  margin: '8px 0',
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

export default ContactConfirmation;
