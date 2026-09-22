import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B96B64] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#B96B64] hover:bg-[#9E534D] text-[#FFFFFF] shadow-sm hover:shadow border border-[#B96B64]',
    secondary:
      'bg-[#F6EDE9] hover:bg-[#EEDBDA] text-[#2D2424] border border-[#EADBCE]',
    outline:
      'bg-transparent hover:bg-[#F6EDE9] text-[#2D2424] border border-[#D8A79F]',
    ghost:
      'bg-transparent hover:bg-[#F4EFEB] text-[#6E615F] hover:text-[#2D2424]',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
        {icon && <span className="transition-transform duration-300">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="transition-transform duration-300">{icon}</span>}
    </button>
  );
};
