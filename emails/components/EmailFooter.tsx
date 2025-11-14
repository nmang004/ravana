import { Section, Text, Link, Hr } from '@react-email/components';
import * as React from 'react';

interface EmailFooterProps {
  variant?: 'internal' | 'customer';
}

export const EmailFooter = ({ variant = 'customer' }: EmailFooterProps) => {
  return (
    <Section style={footer}>
      <Hr style={divider} />
      <Text style={contactHeading}>Contact Us</Text>
      <Text style={contactInfo}>
        <strong>Email:</strong>{' '}
        <Link href="mailto:contact@ravanasolutions.com" style={link}>
          contact@ravanasolutions.com
        </Link>
      </Text>
      <Text style={contactInfo}>
        <strong>Phone:</strong> (757) 685-7209
      </Text>
      <Text style={contactInfo}>
        <strong>Website:</strong>{' '}
        <Link href="https://ravanasolutions.com" style={link}>
          ravanasolutions.com
        </Link>
      </Text>

      <Section style={socialSection}>
        <Text style={followText}>Follow us on social media</Text>
      </Section>

      <Text style={copyright}>
        © {new Date().getFullYear()} Ravana Solutions. All rights reserved.
      </Text>
      <Text style={taglineFooter}>Crafting Digital Experiences That Drive Results</Text>
    </Section>
  );
};

const footer = {
  backgroundColor: '#f9f9f9',
  padding: '30px',
  borderRadius: '0 0 8px 8px',
};

const divider = {
  borderColor: '#e0e0e0',
  margin: '20px 0',
};

const contactHeading = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 15px 0',
};

const contactInfo = {
  fontSize: '14px',
  color: '#404040',
  margin: '8px 0',
  lineHeight: '1.5',
};

const link = {
  color: '#FFD700',
  textDecoration: 'none',
  fontWeight: '500',
};

const socialSection = {
  marginTop: '20px',
  marginBottom: '20px',
};

const followText = {
  fontSize: '12px',
  color: '#666666',
  textAlign: 'center' as const,
  margin: '10px 0',
};

const copyright = {
  fontSize: '12px',
  color: '#666666',
  textAlign: 'center' as const,
  margin: '20px 0 5px 0',
};

const taglineFooter = {
  fontSize: '11px',
  color: '#999999',
  textAlign: 'center' as const,
  fontStyle: 'italic',
  margin: '0',
};

export default EmailFooter;
