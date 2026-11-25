import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';

interface AppointmentButtonProps {
  label?: string;
  variant?: 'whatsapp' | 'primary' | 'secondary';
  className?: string;
  showIcon?: boolean;
  destination?: string;
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
  onClick?: () => void;
}

export const AppointmentButton: React.FC<AppointmentButtonProps> = ({
  label,
  variant = 'whatsapp',
  className = '',
  showIcon = true,
  destination,
  size = 'md',
  ariaLabel,
  onClick
}) => {
  const sizeClasses = {
    sm: 'text-xs min-h-[38px] px-3.5',
    md: 'text-sm sm:text-base min-h-[46px] px-5',
    lg: 'text-base sm:text-lg min-h-[52px] px-7'
  }[size];

  if (variant === 'whatsapp') {
    const defaultLabel = label || 'Book on WhatsApp';
    const targetUrl = destination || businessConfig.whatsappUrl;
    
    if (onClick) {
      return (
        <button
          type="button"
          onClick={onClick}
          className={`inline-flex items-center justify-center gap-2 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 cursor-pointer ${sizeClasses} ${className}`}
          aria-label={ariaLabel || defaultLabel}
        >
          {showIcon && <MessageSquare className="w-4 h-4 fill-current shrink-0" />}
          <span>{defaultLabel}</span>
        </button>
      );
    }

    return (
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 cursor-pointer ${sizeClasses} ${className}`}
        aria-label={ariaLabel || defaultLabel}
      >
        {showIcon && <MessageSquare className="w-4 h-4 fill-current shrink-0" />}
        <span>{defaultLabel}</span>
      </a>
    );
  }

  const defaultLabel = label || `Call Clinic (${businessConfig.phone})`;
  const targetUrl = destination || businessConfig.callUrl;
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <a
      href={targetUrl}
      className={`${variantClass} ${sizeClasses} ${className}`}
      aria-label={ariaLabel || defaultLabel}
    >
      {showIcon && <Phone className="w-4 h-4 shrink-0 text-[#BE8C1D]" />}
      <span>{defaultLabel}</span>
    </a>
  );
};
