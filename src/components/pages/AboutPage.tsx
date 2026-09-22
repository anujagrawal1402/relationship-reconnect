import React from 'react';
import {
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Compass,
  Heart,
  MessageCircle,
  Sprout,
  Link2,
  ArrowRight,
  Phone,
  MapPin,
  Edit3,
  Quote,
} from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { ProfileImagePlaceholder } from '../common/ProfileImagePlaceholder';
import { Button } from '../common/Button';
import { formatTelLink } from '../../utils/contact';

export const AboutPage: React.FC = () => {
  const { content, setActivePage, setIsEditorOpen } = useContent();
  const { brand, about } = content;

  const handleNavigateToContact = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Minimal, meaningful line icons for the 4 Coaching Approach Principles
  const getApproachIcon = (id: string) => {
    switch (id) {
      case 'principle-understand-yourself':
        return <Sprout className="w-5 h-5 text-[#B96B64]" />;
      case 'principle-communicate-consciously':
        return <MessageCircle className="w-5 h-5 text-[#B96B64]" />;
      case 'principle-build-healthier-connections':
        return <Link2 className="w-5 h-5 text-[#B96B64]" />;
      case 'principle-grow-with-intention':
      default:
        return <Compass className="w-5 h-5 text-[#B96B64]" />;
    }
  };

  // Minimal line icons for the 4 Core Values
  const getValueIcon = (id: string) => {
    switch (id) {
      case 'val-empathy':
        return <Heart className="w-5 h-5 text-[#B96B64]" />;
      case 'val-self-awareness':
        return <Compass className="w-5 h-5 text-[#B96B64]" />;
      case 'val-honest-communication':
        return <MessageCircle className="w-5 h-5 text-[#B96B64]" />;
      case 'val-personal-growth':
      default:
        return <Sprout className="w-5 h-5 text-[#B96B64]" />;
    }
  };

  return (
    <div id="about-page" className="space-y-20 sm:space-y-28 lg:space-y-32">
      {/* ====================================================
          1. PAGE HERO
          ==================================================== */}
      <section id="about-hero" className="pt-4 sm:pt-8 lg:pt-10">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Identity Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#B96B64] bg-[#F6EDE9] border border-[#EADBCE]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>{about.brandEyebrow}</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.15] text-[#2D2424] tracking-tight">
            {about.pageTitle}
          </h1>

          {/* Supporting Statement */}
          <p className="text-lg sm:text-xl font-serif italic text-[#6E615F] leading-relaxed max-w-2xl mx-auto">
            {about.pageSubtitle}
          </p>

          {/* Subtle Editorial Decorative Divider */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-[#D8A79F]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#B96B64]" />
            <span className="w-12 h-px bg-[#D8A79F]/60" />
          </div>
        </div>
      </section>

      {/* ====================================================
          2. INTRODUCTION SECTION (Two-Column Editorial Layout)
          ==================================================== */}
      <section id="about-introduction" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Centralized Profile Image & Editorial Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-4">
            <div className="sticky top-24 w-full flex flex-col items-center">
              <ProfileImagePlaceholder size="lg" />

              {/* Brand Label Under Image */}
              <div className="mt-4 p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] shadow-2xs max-w-[340px] sm:max-w-[380px] w-full text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2D2424]">
                  <HeartHandshake className="w-4 h-4 text-[#B96B64] shrink-0" />
                  <span>{brand.brandName}</span>
                </div>
                <p className="text-[11px] text-[#6E615F] mt-1 leading-relaxed">
                  {about.imageCardNote || brand.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block">
                {about.introLabel}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2424] leading-tight">
                {about.storyHeading}
              </h2>
            </div>

            {/* Introductory Paragraphs (Authentic, Warm, Non-corporate) */}
            <div className="space-y-4 text-base sm:text-lg text-[#6E615F] leading-relaxed font-sans">
              {about.storyParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Focus & Specializations */}
            {about.skillsAndFocusAreas && about.skillsAndFocusAreas.length > 0 && (
              <div className="pt-4 border-t border-[#EADBCE]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2D2424] mb-3">
                  Areas of Relational & Emotional Focus
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {about.skillsAndFocusAreas.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#2D2424] bg-[#FFFFFF] border border-[#EADBCE] shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B96B64] shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Consultation Prompt */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={handleNavigateToContact}
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Reach Out to {brand.ownerName.split(' ')[0] || brand.ownerName}
              </Button>
              <a
                href={formatTelLink(brand.phone)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#2D2424] bg-[#FFFFFF] hover:bg-[#FAF7F2] border border-[#EADBCE] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B96B64]" />
                <span>Direct: {brand.phoneDisplay || brand.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          3. COACHING APPROACH SECTION
          ==================================================== */}
      <section id="about-approach" className="space-y-10">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block">
            Philosophy in Action
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2424] tracking-tight">
            {about.approachHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#6E615F] leading-relaxed">
            {about.approachSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.approachPrinciples.map((principle, index) => (
            <div
              key={principle.id}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] shadow-2xs hover:border-[#D8A79F] hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center mb-5">
                  {getApproachIcon(principle.id)}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2D2424] mb-2.5">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E615F] leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EADBCE]/50 flex items-center justify-between text-[11px] text-[#968885]">
                <span className="font-serif italic">Step 0{index + 1}</span>
                <span className="text-[#B96B64] font-medium">Growth Focus</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          4. PERSONAL PHILOSOPHY QUOTE
          ==================================================== */}
      <section
        id="about-quote"
        className="relative py-12 sm:py-16 px-6 sm:px-14 rounded-3xl bg-gradient-to-b from-[#FFFFFF] via-[#FAF7F2] to-[#F5EFEB] border border-[#EADBCE] shadow-xs text-center overflow-hidden"
      >
        {/* Subtle decorative concentric arc */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full border border-[#EADBCE]/40 pointer-events-none -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full border border-dashed border-[#D8A79F]/30 pointer-events-none -translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-5">
          <Quote className="w-8 h-8 text-[#B96B64] mx-auto opacity-70" />

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal leading-[1.3] text-[#2D2424] tracking-tight">
            “{about.philosophyQuote.text}”
          </h2>

          <div className="pt-2 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#D8A79F]" />
            <p className="text-xs sm:text-sm font-sans text-[#6E615F] font-medium tracking-wide">
              {about.philosophyQuote.attribution}
            </p>
            <span className="w-8 h-px bg-[#D8A79F]" />
          </div>
        </div>
      </section>

      {/* ====================================================
          5. VALUES SECTION
          ==================================================== */}
      <section id="about-values" className="space-y-10">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block">
            Core Foundations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2424] tracking-tight">
            {about.valuesHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#6E615F] leading-relaxed">
            {about.valuesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.valuesList.map((val) => (
            <div
              key={val.id}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] shadow-2xs hover:border-[#D8A79F] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center mb-4">
                  {getValueIcon(val.id)}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2D2424] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E615F] leading-relaxed font-sans">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          6. EDUCATION & EXPERIENCE (Honest, Uninvented, Editable)
          ==================================================== */}
      <section id="about-credentials" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] pb-5">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block mb-1">
              Background & Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2424]">
              Education & Experience
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsEditorOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B96B64] hover:text-[#9E534D] transition-colors bg-[#F6EDE9] px-3.5 py-1.5 rounded-full border border-[#EADBCE] self-start sm:self-auto"
          >
            <Edit3 className="w-3.5 h-3.5" />
            Edit Background in Customizer
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column A: Education (Editable Placeholders - No invented facts) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#2D2424]">
                <GraduationCap className="w-4 h-4 text-[#B96B64]" />
                <span>{about.educationSectionHeading}</span>
              </div>
              <span className="text-[11px] text-[#968885] italic font-sans">
                Editable Placeholders
              </span>
            </div>

            <div className="space-y-3.5">
              {about.educationPlaceholders.map((edu) => (
                <div
                  key={edu.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    edu.isPlaceholder
                      ? 'bg-[#FAF7F2] border-dashed border-[#D8A79F] hover:bg-[#F6EDE9]/40'
                      : 'bg-[#FFFFFF] border-[#EADBCE]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-lg font-medium text-[#2D2424]">
                      {edu.degreeOrProgram}
                    </h4>
                    {edu.isPlaceholder && (
                      <span className="shrink-0 text-[10px] uppercase tracking-wider font-semibold text-[#B96B64] bg-[#F6EDE9] px-2 py-0.5 rounded border border-[#EEDBDA]">
                        Placeholder
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E615F] mt-1">{edu.institution}</p>
                  <p className="text-xs text-[#968885] mt-1 italic">{edu.yearOrDetails}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#968885] italic leading-relaxed">
              * Note: Educational background and certifications can be populated when ready from{' '}
              <code className="bg-[#FAF7F2] px-1 py-0.5 rounded text-[11px] text-[#B96B64]">
                src/config/siteContent.ts
              </code>{' '}
              or via the live customizer without modifying layout code.
            </p>
          </div>

          {/* Column B: Professional Experience (Current Role & Placeholder) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#2D2424]">
                <Briefcase className="w-4 h-4 text-[#B96B64]" />
                <span>{about.experienceSectionHeading}</span>
              </div>
              <span className="text-[11px] text-[#968885] italic font-sans">
                Practice Focus
              </span>
            </div>

            <div className="space-y-3.5">
              {about.experiencePlaceholders.map((exp) => (
                <div
                  key={exp.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    exp.isPlaceholder
                      ? 'bg-[#FAF7F2] border-dashed border-[#D8A79F] hover:bg-[#F6EDE9]/40'
                      : 'bg-[#FFFFFF] border-[#EADBCE]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-lg font-medium text-[#2D2424]">
                      {exp.role}
                    </h4>
                    {exp.isPlaceholder ? (
                      <span className="shrink-0 text-[10px] uppercase tracking-wider font-semibold text-[#B96B64] bg-[#F6EDE9] px-2 py-0.5 rounded border border-[#EEDBDA]">
                        Placeholder
                      </span>
                    ) : (
                      <span className="shrink-0 text-[10px] uppercase tracking-wider font-semibold text-[#2D2424] bg-[#F6EDE9] px-2 py-0.5 rounded border border-[#EADBCE]">
                        Current Role
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#B96B64] mt-0.5">{exp.focus}</p>
                  <p className="text-xs sm:text-sm text-[#6E615F] mt-2 leading-relaxed">{exp.details}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#968885] italic leading-relaxed">
              * Note: Specific years of experience and prior milestones remain intentionally uninvented and can be safely entered when confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          7. BOTTOM CONTACT CTA
          ==================================================== */}
      <section
        id="about-cta"
        className="rounded-3xl bg-gradient-to-b from-[#F6EDE9] to-[#FAF7F2] border border-[#EADBCE] p-8 sm:p-14 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] flex items-center justify-center mx-auto text-[#B96B64] shadow-2xs">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#2D2424]">
            {about.aboutCtaHeading}
          </h2>

          <p className="text-base sm:text-lg text-[#6E615F] font-sans max-w-xl mx-auto leading-relaxed">
            {about.aboutCtaSubtitle}
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleNavigateToContact}
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              {about.aboutCtaButtonText}
            </Button>
            <a
              href={formatTelLink(brand.phone)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#2D2424] bg-[#FFFFFF] hover:bg-[#FAF7F2] border border-[#EADBCE] shadow-2xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B96B64]" />
              <span>Call: {brand.phoneDisplay || brand.phone}</span>
            </a>
          </div>

          <div className="pt-3 flex items-center justify-center gap-2 text-xs text-[#968885]">
            <MapPin className="w-3.5 h-3.5 text-[#B96B64]" />
            <span>{brand.location} • Confidential & Empathetic Consultations</span>
          </div>
        </div>
      </section>
    </div>
  );
};
