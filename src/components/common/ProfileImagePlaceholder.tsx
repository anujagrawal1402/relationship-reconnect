import React from 'react';
import { Camera, Sparkles, User, MapPin } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

interface ProfileImagePlaceholderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showEditHint?: boolean;
}

export const ProfileImagePlaceholder: React.FC<ProfileImagePlaceholderProps> = ({
  className = '',
  size = 'lg',
  showEditHint = true,
}) => {
  const { content, setIsEditorOpen } = useContent();
  const { brand } = content;
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    setImageError(false);
  }, [brand.profileImageUrl]);

  const hasImage = Boolean(brand.profileImageUrl && brand.profileImageUrl.trim() !== '') && !imageError;

  const initials = brand.ownerName
    ? brand.ownerName
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'DS';

  const brandLastWord = brand.brandName
    ? brand.brandName.split(' ').filter(Boolean).pop() || 'Reconnect'
    : 'Reconnect';

  const dimensions = {
    sm: 'w-24 h-28',
    md: 'w-48 h-56 sm:w-60 sm:h-72',
    lg: 'w-full max-w-[340px] sm:max-w-[380px] h-[440px] sm:h-[480px]',
  }[size];

  return (
    <div className={`relative ${dimensions} ${className}`}>
      {/* Subtle organic decorative backdrops */}
      <div className="absolute -top-3 -right-3 w-full h-full rounded-[32px] bg-[#F6EDE9] border border-[#EADBCE]/80 transform rotate-1 pointer-events-none transition-transform duration-500 group-hover:rotate-2" />
      <div className="absolute -bottom-2 -left-2 w-24 h-24 rounded-full bg-[#EADBCE]/30 blur-xl pointer-events-none" />

      {/* Main Editorial Container */}
      <div
        id="profile-editorial-frame"
        className="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FAF7F2] to-[#F5EFEB] border border-[#EADBCE] shadow-sm flex flex-col justify-between p-4 sm:p-5 text-center group"
      >
        {hasImage ? (
          <>
            <div className="relative w-full h-full rounded-[20px] overflow-hidden border border-[#EADBCE]/60">
              <img
                src={brand.profileImageUrl}
                alt={brand.profileImageAlt || `${brand.ownerName} - ${brand.professionalTitle}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <button
                  onClick={() => setIsEditorOpen(true)}
                  className="text-xs text-white bg-black/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 hover:bg-black/90 transition-colors mx-auto"
                >
                  <Camera className="w-3.5 h-3.5" />
                  Change Photo URL
                </button>
              </div>
            </div>

            {/* Nameplate below photo */}
            <div className="pt-3 flex items-center justify-between text-left">
              <div>
                <p className="font-serif text-base font-medium text-[#2D2424]">{brand.ownerName}</p>
                <p className="text-[11px] text-[#6E615F] tracking-wide">{brand.professionalTitle}</p>
              </div>
              <span className="text-[11px] text-[#B96B64] font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {brand.location.split(',')[0] || brand.location}
              </span>
            </div>
          </>
        ) : (
          <>
            {/* Top editorial badge */}
            <div className="flex items-center justify-between w-full">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase text-[#B96B64] bg-[#F6EDE9] border border-[#EEDBDA]">
                <Sparkles className="w-3 h-3" />
                Portrait Placeholder
              </span>
              <span className="text-[11px] text-[#968885] font-sans flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#B96B64]" />
                {brand.location}
              </span>
            </div>

            {/* Editorial Inner Monogram & Artful Centerpiece */}
            <div className="my-auto py-4 flex flex-col items-center justify-center">
              {/* Outer decorative ring */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border border-dashed border-[#D8A79F] flex items-center justify-center mb-4">
                <div className="w-full h-full rounded-full bg-[#FAF7F2] border border-[#EADBCE] flex flex-col items-center justify-center shadow-inner">
                  <span className="font-serif text-3xl sm:text-4xl text-[#B96B64] tracking-wider font-light">
                    {initials}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#968885] mt-0.5">
                    {brandLastWord}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D2424] tracking-tight">
                {brand.ownerName}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#B96B64] font-medium mt-1 tracking-wide">
                {brand.professionalTitle}
              </p>
              <p className="text-xs text-[#6E615F] mt-2 max-w-[240px] leading-relaxed italic font-serif">
                “{brand.tagline || 'Fostering emotional wellness & intentional relationships'}”
              </p>
            </div>

            {/* Bottom edit notice / trigger */}
            {showEditHint && (
              <div className="w-full pt-3 border-t border-[#EADBCE]/70">
                <div className="bg-[#FAF7F2] rounded-xl p-3 border border-[#EADBCE] text-left">
                  <p className="text-[11px] text-[#6E615F] leading-tight">
                    <strong>Portrait Area:</strong> Real photo of {brand.ownerName} will replace this placeholder.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsEditorOpen(true)}
                    className="mt-2 text-[11px] font-medium text-[#B96B64] hover:text-[#9E534D] inline-flex items-center gap-1 transition-colors"
                  >
                    <Camera className="w-3 h-3" />
                    Set profile photo in customizer &rarr;
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

