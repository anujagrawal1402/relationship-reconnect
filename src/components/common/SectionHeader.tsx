import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-medium uppercase tracking-widest text-[#B96B64] mb-2.5">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.2] text-[#2D2424] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg font-sans text-[#6E615F] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
