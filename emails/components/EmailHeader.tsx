import { Section, Text, Img } from '@react-email/components';
import * as React from 'react';

interface EmailHeaderProps {
  title: string;
  variant?: 'internal' | 'customer';
}

export const EmailHeader = ({ title, variant = 'customer' }: EmailHeaderProps) => {
  const isInternal = variant === 'internal';

  return (
    <Section style={header}>
      <Section style={logoSection}>
        <Text style={logoText}>RAVANA</Text>
        <Text style={tagline}>SOLUTIONS</Text>
      </Section>
      <Text style={isInternal ? titleInternal : titleCustomer}>{title}</Text>
    </Section>
  );
};

const header = {
  backgroundColor: '#0A0A0A',
  padding: '40px 30px',
  borderRadius: '8px 8px 0 0',
};

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '20px',
};

const logoText = {
  color: '#FFD700',
  fontSize: '32px',
  fontWeight: '700',
  margin: '0',
  letterSpacing: '2px',
};

const tagline = {
  color: '#FFFFFF',
  fontSize: '12px',
  fontWeight: '400',
  margin: '0',
  letterSpacing: '4px',
};

const titleCustomer = {
  color: '#FFFFFF',
  fontSize: '24px',
  fontWeight: '600',
  margin: '20px 0 0 0',
  textAlign: 'center' as const,
  lineHeight: '1.4',
};

const titleInternal = {
  color: '#FFD700',
  fontSize: '20px',
  fontWeight: '700',
  margin: '20px 0 0 0',
  textAlign: 'center' as const,
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
};

export default EmailHeader;
