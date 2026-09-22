import React from 'react';
import { Phone, Mail, MapPin, Instagram, Heart, Sliders } from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { isRealEmail, formatTelLink } from '../../utils/contact';

export const Footer: React.FC = () => {
  const { content, setActivePage, setIsEditorOpen } = useContent();
  const { brand, footer, navigation } = content;
  const hasRealEmail = isRealEmail(brand.email);

  return (
    <footer id="site-footer" className="bg-[#F4EFEB] border-t border-[#EADBCE] text-[#2D2424] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-normal tracking-tight text-[#2D2424]">
                {brand.brandName}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#B96B64] font-medium mt-1">
                {brand.ownerName} • {brand.professionalTitle}
              </p>
            </div>
            <p className="text-sm text-[#6E615F] leading-relaxed max-w-sm">
              {brand.tagline}
            </p>
            <p className="text-xs text-[#968885] italic">
              {footer.warmClosingNote}
            </p>
          </div>

          {/* Quick Navigation (Home, About, Contact only) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-normal text-[#2D2424]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActivePage(item.id as 'home' | 'about' | 'contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm text-[#6E615F] hover:text-[#B96B64] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-normal text-[#2D2424]">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6E615F]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B96B64] shrink-0 mt-0.5" />
                <span>{brand.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B96B64] shrink-0" />
                <a
                  href={formatTelLink(brand.phone)}
                  className="hover:text-[#B96B64] transition-colors underline-offset-4 hover:underline"
                >
                  {brand.phoneDisplay || brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B96B64] shrink-0" />
                {hasRealEmail ? (
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-sm hover:text-[#B96B64] transition-colors underline-offset-4 hover:underline"
                  >
                    {brand.email}
                  </a>
                ) : (
                  <span className="text-xs text-[#6E615F] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EADBCE]">
                    {brand.email || 'Email address to be added'} <span className="text-[10px] text-[#968885]">(editable placeholder)</span>
                  </span>
                )}
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <Instagram className="w-4 h-4 text-[#B96B64] shrink-0" />
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#B96B64] hover:text-[#9E534D] transition-colors flex items-center gap-1"
                >
                  {brand.instagramHandle}
                  <span className="text-[11px] text-[#6E615F]">(Instagram)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-6 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between text-xs text-[#968885] gap-4">
          <p>{footer.copyrightNotice}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsEditorOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-[#6E615F] hover:text-[#B96B64] transition-colors"
            >
              <Sliders className="w-3.5 h-3.5" />
              Customize Content / Admin Config
            </button>
            <span className="inline-flex items-center gap-1 text-[#968885]">
              Curated with <Heart className="w-3 h-3 text-[#B96B64] fill-current" /> in Bangalore
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
