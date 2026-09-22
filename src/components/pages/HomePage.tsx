import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Compass,
  Instagram,
  Phone,
  Feather,
  Link2,
  Sprout,
  CheckCircle2,
  MapPin,
  HeartHandshake
} from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { ProfileImagePlaceholder } from '../common/ProfileImagePlaceholder';
import { Button } from '../common/Button';
import { formatTelLink } from '../../utils/contact';

export const HomePage: React.FC = () => {
  const { content, setActivePage } = useContent();
  const { brand, home } = content;

  // Tasteful minimal line icons for the 3 Core Pillars (avoiding cheesy clichés)
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'pillar-emotional-wellness':
        return <Feather className="w-5 h-5 text-[#B96B64]" />;
      case 'pillar-healthy-connection':
        return <Link2 className="w-5 h-5 text-[#B96B64]" />;
      case 'pillar-self-discovery':
      default:
        return <Sprout className="w-5 h-5 text-[#B96B64]" />;
    }
  };

  const handleNavigate = (page: 'home' | 'about' | 'contact') => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page" className="space-y-20 sm:space-y-28 lg:space-y-32">
      {/* ====================================================
          1. HERO SECTION
          ==================================================== */}
      <section id="hero-section" className="pt-4 sm:pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#B96B64] bg-[#F6EDE9] border border-[#EADBCE]">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{home.welcomeEyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.15] text-[#2D2424] tracking-tight">
              {home.mainHeadline}
            </h1>

            {/* Sub-Headline / City Context */}
            <p className="text-lg sm:text-xl font-serif italic text-[#6E615F] leading-relaxed max-w-2xl">
              {home.subHeadline}
            </p>

            {/* Warm, Non-exaggerated Supporting Paragraph */}
            <p className="text-base text-[#6E615F] leading-relaxed max-w-2xl font-sans">
              {home.heroSupportingParagraph}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleNavigate('contact')}
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                {home.ctaPrimaryText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigate('about')}
              >
                {home.ctaSecondaryText}
              </Button>
            </div>

            {/* Trust & Location Strip */}
            <div className="pt-6 border-t border-[#EADBCE] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#6E615F]">
              <div>
                <p className="font-semibold text-[#2D2424]">{brand.ownerName}</p>
                <p className="text-[#968885]">{brand.professionalTitle}</p>
              </div>
              <div>
                <p className="font-semibold text-[#2D2424] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#B96B64]" />
                  Location
                </p>
                <p className="text-[#968885]">{brand.location}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold text-[#2D2424]">Direct Line</p>
                <a
                  href={formatTelLink(brand.phone)}
                  className="text-[#B96B64] hover:underline"
                >
                  {brand.phoneDisplay || brand.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Profile Photo Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileImagePlaceholder size="lg" />
          </div>
        </div>
      </section>

      {/* ====================================================
          4. BRAND STATEMENT SECTION
          ==================================================== */}
      <section
        id="brand-statement-section"
        className="relative py-10 sm:py-14 px-6 sm:px-12 rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#FAF7F2] border border-[#EADBCE] shadow-xs text-center overflow-hidden"
      >
        {/* Subtle decorative concentric arc background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[#EADBCE]/40 pointer-events-none -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-[#D8A79F]/30 pointer-events-none -translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#B96B64]">
            Core Philosophy
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.3] text-[#2D2424] tracking-tight">
            “{home.brandStatement}”
          </h2>

          {home.brandStatementSub && (
            <p className="text-sm sm:text-base text-[#6E615F] font-sans max-w-2xl mx-auto leading-relaxed pt-2">
              {home.brandStatementSub}
            </p>
          )}

          <div className="pt-2 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#D8A79F]" />
            <span className="text-xs font-serif italic text-[#B96B64]">{brand.brandName}</span>
            <span className="w-8 h-px bg-[#D8A79F]" />
          </div>
        </div>
      </section>

      {/* ====================================================
          5. THREE CORE PILLARS SECTION
          ==================================================== */}
      <section id="pillars-section" className="space-y-10">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block">
            {home.pillarsSectionEyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2424] tracking-tight">
            {home.pillarsSectionHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#6E615F] leading-relaxed">
            {home.pillarsSectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {home.corePillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="group p-7 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] shadow-2xs hover:border-[#D8A79F] hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-serif italic text-[#968885]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#2D2424] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6E615F] leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EADBCE]/50 flex items-center justify-between text-xs text-[#B96B64] font-medium">
                <span>Guided Focus</span>
                <span className="text-[11px] text-[#968885] font-sans">
                  {pillar.focusTag || (index === 0 ? 'Inner Balance' : index === 1 ? 'Mutual Trust' : 'Clarity')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          6. COACHING PHILOSOPHY SECTION (Split Layout)
          ==================================================== */}
      <section
        id="coaching-philosophy-section"
        className="rounded-3xl bg-[#FAF7F2] border border-[#EADBCE] p-8 sm:p-12 lg:p-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Statement & Organic Emblem */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block">
              {home.philosophySectionEyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2424] leading-tight">
              {home.philosophyHeading}
            </h2>

            {/* Subtle decorative visual element fitting the brand */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B96B64]">
                <HeartHandshake className="w-4 h-4" />
                <span>The {brand.brandName} Approach</span>
              </div>
              <p className="text-xs text-[#6E615F] leading-relaxed italic font-serif">
                “{home.quote ? home.quote.text : 'When we step back from judgment, we create space for understanding. Reconnecting with yourself is the first step toward reconnecting with everyone else.'}”
              </p>
              <p className="text-[11px] text-[#968885] pt-1">
                — {home.quote ? home.quote.attribution : `${brand.ownerName}, ${brand.professionalTitle}`}
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Key Principles */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-[#6E615F] leading-relaxed font-sans">
              {home.philosophyParagraph}
            </p>

            <div className="space-y-3.5 pt-2">
              {home.philosophyHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FFFFFF] border border-[#EADBCE]/80 flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#B96B64] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2D2424]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6E615F] mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={() => handleNavigate('about')}
              >
                {home.whoIsDebashreeCtaText || 'Read Debashree’s Full Story'} &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          7. INSTAGRAM CONNECTION SECTION
          ==================================================== */}
      <section
        id="instagram-section"
        className="rounded-3xl bg-[#FFFFFF] border border-[#EADBCE] p-8 sm:p-12 text-center shadow-xs"
      >
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center mx-auto text-[#B96B64]">
            <Instagram className="w-6 h-6" />
          </div>

          <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block">
            {home.instagramSectionEyebrow}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2424]">
            {home.instagramHeading}
          </h2>

          <p className="text-sm sm:text-base text-[#6E615F] leading-relaxed max-w-xl mx-auto">
            {home.instagramDescription}
          </p>

          <div className="pt-3">
            <a
              id="home-instagram-cta"
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#2D2424] bg-[#F6EDE9] hover:bg-[#EEDBDA] border border-[#EADBCE] shadow-2xs hover:shadow-xs transition-all duration-300"
            >
              <Instagram className="w-4 h-4 text-[#B96B64]" />
              <span>{home.instagramCtaText}</span>
            </a>
          </div>

          <p className="text-[11px] text-[#968885] mt-2">
            Official Instagram channel for {brand.brandName} • {brand.location}
          </p>
        </div>
      </section>

      {/* ====================================================
          8. FINAL HOME CTA
          ==================================================== */}
      <section
        id="final-home-cta"
        className="rounded-3xl bg-gradient-to-b from-[#F6EDE9] to-[#FAF7F2] border border-[#EADBCE] p-8 sm:p-14 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#2D2424]">
            {home.finalCtaHeading}
          </h2>

          <p className="text-base sm:text-lg text-[#6E615F] font-sans max-w-xl mx-auto leading-relaxed">
            {home.finalCtaSubtext}
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleNavigate('contact')}
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              {home.finalCtaButtonText}
            </Button>
            <a
              href={formatTelLink(brand.phone)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#2D2424] bg-[#FFFFFF] hover:bg-[#FAF7F2] border border-[#EADBCE] shadow-2xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B96B64]" />
              <span>Call: {brand.phoneDisplay || brand.phone}</span>
            </a>
          </div>

          <p className="text-xs text-[#968885] italic pt-2">
            All conversations are held with utmost warmth, confidentiality, and respect.
          </p>
        </div>
      </section>
    </div>
  );
};
