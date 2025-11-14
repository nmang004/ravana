import { Section, Text } from '@react-email/components';
import * as React from 'react';

interface EmailCardProps {
  title?: string;
  icon?: string;
  children: React.ReactNode;
  variant?: 'default' | 'highlight' | 'muted';
}

export const EmailCard = ({
  title,
  icon,
  children,
  variant = 'default',
}: EmailCardProps) => {
  const getCardStyle = () => {
    const baseStyle = {
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '15px',
      border: '1px solid #e0e0e0',
    };

    switch (variant) {
      case 'highlight':
        return {
          ...baseStyle,
          border: '2px solid #FFD700',
          backgroundColor: '#FFFEF5',
        };
      case 'muted':
        return {
          ...baseStyle,
          backgroundColor: '#f9f9f9',
        };
      default:
        return baseStyle;
    }
  };

  return (
    <Section style={getCardStyle()}>
      {title && (
        <Text style={cardTitle}>
          {icon && <span style={iconStyle}>{icon}</span>}
          {title}
        </Text>
      )}
      <Section style={cardContent}>{children}</Section>
    </Section>
  );
};

export const CardRow = ({
  label,
  value,
  valueStyle,
}: {
  label: string;
  value: string | React.ReactNode;
  valueStyle?: React.CSSProperties;
}) => {
  return (
    <Section style={rowContainer}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={{ ...valueStyleDefault, ...valueStyle }}>{value}</Text>
    </Section>
  );
};

const cardTitle = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#0A0A0A',
  margin: '0 0 15px 0',
  paddingBottom: '10px',
  borderBottom: '2px solid #FFD700',
};

const iconStyle = {
  marginRight: '8px',
  fontSize: '18px',
};

const cardContent = {
  margin: '0',
};

const rowContainer = {
  marginBottom: '12px',
};

const labelStyle = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#666666',
  margin: '0 0 4px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const valueStyleDefault = {
  fontSize: '15px',
  fontWeight: '400',
  color: '#0A0A0A',
  margin: '0',
  lineHeight: '1.5',
};

export default EmailCard;
