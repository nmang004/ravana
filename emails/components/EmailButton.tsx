import { Button } from '@react-email/components';
import * as React from 'react';

interface EmailButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const EmailButton = ({
  href,
  children,
  variant = 'primary',
  fullWidth = false,
}: EmailButtonProps) => {
  const getButtonStyle = () => {
    const baseStyle = {
      fontSize: '16px',
      fontWeight: '600',
      padding: '14px 28px',
      borderRadius: '6px',
      textDecoration: 'none',
      display: fullWidth ? 'block' : 'inline-block',
      textAlign: 'center' as const,
      width: fullWidth ? '100%' : 'auto',
      boxSizing: 'border-box' as const,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: '#FFD700',
          color: '#0A0A0A',
        };
      case 'secondary':
        return {
          ...baseStyle,
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
        };
      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          color: '#FFD700',
          border: '2px solid #FFD700',
        };
      default:
        return baseStyle;
    }
  };

  return (
    <Button href={href} style={getButtonStyle()}>
      {children}
    </Button>
  );
};

export default EmailButton;
