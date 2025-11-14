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
        <Img
          src="https://ravanasolutions.com/images/ravana-logo.png"
          alt="Ravana Solutions"
          width="120"
          height="120"
          style={logoImage}
        />
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

const logoImage = {
  display: 'block',
  margin: '0 auto',
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
