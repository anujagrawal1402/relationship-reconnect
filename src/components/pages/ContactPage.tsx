import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Sparkles,
  Send,
  HeartHandshake,
  ShieldCheck,
  Clock,
  ExternalLink,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Feather,
  RotateCcw,
} from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { Button } from '../common/Button';
import { isRealEmail, formatTelLink } from '../../utils/contact';

export const ContactPage: React.FC = () => {
  const { content } = useContent();
  const { brand, contact } = content;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isStagedSubmitted, setIsStagedSubmitted] = useState(false);

  // Validate email format
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleInputChange = (field: 'name' | 'email' | 'phone' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on edit
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errors.name = contact.validationErrors.nameRequired;
    }

    if (!formData.email.trim()) {
      errors.email = contact.validationErrors.emailRequired;
    } else if (!isValidEmail(formData.email)) {
      errors.email = contact.validationErrors.emailInvalid;
    }

    if (!formData.message.trim()) {
      errors.message = contact.validationErrors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      errors.message = contact.validationErrors.messageTooShort;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Valid frontend state: transition to clear, staged state without claiming backend delivery
    setIsStagedSubmitted(true);
  };

  const handleResetForm = () => {
    setIsStagedSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setFormErrors({});
  };

  // Check if real email is available using strict utility verification
  const hasRealEmail = isRealEmail(brand.email);

  return (
    <div id="contact-page" className="space-y-20 sm:space-y-28 lg:space-y-32">
      {/* ====================================================
          1. CONTACT PAGE HERO
          ==================================================== */}
      <section id="contact-hero" className="pt-4 sm:pt-8 lg:pt-10">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          {/* Brand Identity Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#B96B64] bg-[#F6EDE9] border border-[#EADBCE]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>{contact.brandEyebrow}</span>
          </div>

          {/* Page Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.15] text-[#2D2424] tracking-tight">
            {contact.pageTitle}
          </h1>

          {/* Supporting Statement */}
          <p className="text-lg sm:text-xl font-serif italic text-[#6E615F] leading-relaxed max-w-2xl mx-auto">
            {contact.pageSubtitle}
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
          2. CONTACT INFORMATION CARDS (4 Cards: Phone, Email, Location, Instagram)
          ==================================================== */}
      <section id="contact-channels" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block">
            Ways to Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2424]">
            {contact.directReachoutHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#6E615F] leading-relaxed">
            {contact.directReachoutDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Phone */}
          <a
            id="contact-card-phone"
            href={formatTelLink(brand.phone)}
            className="group p-6 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] shadow-2xs hover:border-[#D8A79F] hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center text-[#B96B64] mb-4 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E615F] block">
                {contact.phoneLabel}
              </span>
              <p className="font-serif text-lg sm:text-xl font-medium text-[#2D2424] mt-1 group-hover:text-[#B96B64] transition-colors">
                {brand.phoneDisplay}
              </p>
              <p className="text-xs text-[#968885] mt-1.5 leading-relaxed font-sans">
                {contact.phoneNote}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EADBCE]/60 flex items-center text-xs font-medium text-[#B96B64]">
              <span>Click to Call</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: Email (Clear placeholder, no fake mailto unless real email added) */}
          <div
            id="contact-card-email"
            className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] shadow-2xs flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center text-[#B96B64] mb-4">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6E615F]">
                  {contact.emailLabel}
                </span>
                {!hasRealEmail && (
                  <span className="text-[10px] uppercase font-semibold text-[#B96B64] bg-[#F6EDE9] px-2 py-0.5 rounded border border-[#EEDBDA]">
                    Placeholder
                  </span>
                )}
              </div>

              {hasRealEmail ? (
                <a
                  href={`mailto:${brand.email}`}
                  className="font-serif text-lg font-medium text-[#2D2424] hover:text-[#B96B64] transition-colors block mt-1"
                >
                  {brand.email}
                </a>
              ) : (
                <p className="font-serif text-base text-[#6E615F] italic mt-1">
                  {contact.emailPlaceholderText}
                </p>
              )}

              <p className="text-xs text-[#968885] mt-1.5 leading-relaxed font-sans">
                {contact.emailNote}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#EADBCE]/60 text-xs text-[#968885] font-sans">
              {hasRealEmail ? (
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center text-[#B96B64] font-medium hover:underline"
                >
                  <span>Send Email</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              ) : (
                <span className="italic">Editable in siteContent.ts</span>
              )}
            </div>
          </div>

          {/* Card 3: Location */}
          <div
            id="contact-card-location"
            className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] shadow-2xs flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center text-[#B96B64] mb-4">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E615F] block">
                {contact.locationLabel}
              </span>
              <p className="font-serif text-lg sm:text-xl font-medium text-[#2D2424] mt-1">
                {brand.location}
              </p>
              <p className="text-xs text-[#968885] mt-1.5 leading-relaxed font-sans">
                {contact.locationNote}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EADBCE]/60 text-xs text-[#968885] font-sans">
              <span>{brand.location}</span>
            </div>
          </div>

          {/* Card 4: Instagram */}
          <a
            id="contact-card-instagram"
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] shadow-2xs hover:border-[#D8A79F] hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center text-[#B96B64] mb-4 group-hover:scale-105 transition-transform">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E615F] block">
                {contact.instagramLabel}
              </span>
              <p className="font-serif text-lg sm:text-xl font-medium text-[#B96B64] mt-1 group-hover:text-[#9E534D] transition-colors">
                {brand.instagramHandle}
              </p>
              <p className="text-xs text-[#968885] mt-1.5 leading-relaxed font-sans">
                {contact.instagramNote}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EADBCE]/60 flex items-center text-xs font-medium text-[#B96B64]">
              <span>Open Profile</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </div>
          </a>
        </div>
      </section>

      {/* ====================================================
          3. CONTACT FORM + PERSONAL TOUCH SECTION (Two-Column Editorial)
          ==================================================== */}
      <section id="contact-form-section" className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Personal Touch Editorial Message */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#FAF7F2] to-[#F6EDE9] border border-[#EADBCE] shadow-2xs space-y-6">
              <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#EADBCE] flex items-center justify-center text-[#B96B64]">
                <Feather className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block">
                  {contact.personalTouch.tagline}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D2424] leading-tight">
                  {contact.personalTouch.heading}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#6E615F] leading-relaxed font-sans">
                {contact.personalTouch.description}
              </p>

              <div className="space-y-3 pt-2">
                {contact.personalTouch.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2D2424]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B96B64] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#EADBCE] flex items-center gap-2 text-xs font-medium text-[#6E615F]">
                <ShieldCheck className="w-4 h-4 text-[#B96B64] shrink-0" />
                <span>{contact.personalTouch.privacyBadge}</span>
              </div>
            </div>

            {/* Quick Call Direct Banner */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center text-[#B96B64]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#6E615F]">Need an immediate answer?</p>
                  <p className="font-serif font-medium text-[#2D2424] text-sm sm:text-base">{brand.phoneDisplay || brand.phone}</p>
                </div>
              </div>
              <a
                href={formatTelLink(brand.phone)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#B96B64] bg-[#F6EDE9] hover:bg-[#FAF7F2] border border-[#EADBCE] transition-colors"
              >
                Call
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] rounded-3xl p-7 sm:p-10 border border-[#EADBCE] shadow-xs">
              {isStagedSubmitted ? (
                /* Staged Submission State (Authentic, transparent, no fake backend) */
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-[#F6EDE9] border border-[#EADBCE] text-[#B96B64] rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D2424]">
                      {contact.submissionNotice.stagedTitle}, {formData.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6E615F] leading-relaxed">
                      {contact.submissionNotice.stagedDescription}
                    </p>
                  </div>

                  {/* Summary of Staged Information */}
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] space-y-2 text-xs text-[#6E615F]">
                    <p>
                      <strong className="text-[#2D2424]">Name:</strong> {formData.name}
                    </p>
                    <p>
                      <strong className="text-[#2D2424]">Email:</strong> {formData.email}
                    </p>
                    {formData.phone && (
                      <p>
                        <strong className="text-[#2D2424]">Phone:</strong> {formData.phone}
                      </p>
                    )}
                    <p>
                      <strong className="text-[#2D2424]">Message preview:</strong>{' '}
                      <span className="italic">
                        {formData.message.length > 90
                          ? `${formData.message.slice(0, 90)}...`
                          : formData.message}
                      </span>
                    </p>
                  </div>

                  {/* Transparent Backend Notice */}
                  <div className="p-4 rounded-xl bg-[#F6EDE9]/60 border border-[#D8A79F]/60 flex items-start gap-3 text-xs text-[#6E615F] leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-[#B96B64] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#2D2424] mb-1">Direct Connection Notice</p>
                      <p>{contact.submissionNotice.backendDisclaimer}</p>
                    </div>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={formatTelLink(brand.phone)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-[#FFFFFF] bg-[#B96B64] hover:bg-[#9E534D] transition-colors shadow-2xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {brand.phoneDisplay || brand.phone}</span>
                    </a>
                    <a
                      href={brand.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-[#2D2424] bg-[#FFFFFF] hover:bg-[#FAF7F2] border border-[#EADBCE] transition-colors shadow-2xs"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#B96B64]" />
                      <span>Message on Instagram ({brand.instagramHandle})</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium text-[#6E615F] hover:text-[#2D2424] transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{contact.submissionNotice.resetButtonText}</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* The Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D2424]">
                      {contact.formHeading}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6E615F] leading-relaxed">
                      {contact.formSubtitle}
                    </p>
                  </div>

                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424]"
                    >
                      {contact.nameLabel} <span className="text-[#B96B64]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="e.g. Priyadarshini Rao"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm text-[#2D2424] placeholder:text-[#968885] focus:outline-none transition-colors ${
                        formErrors.name
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#EADBCE] focus:border-[#B96B64]'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424]"
                      >
                        {contact.emailInputLabel} <span className="text-[#B96B64]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="e.g. yourname@domain.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm text-[#2D2424] placeholder:text-[#968885] focus:outline-none transition-colors ${
                          formErrors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#EADBCE] focus:border-[#B96B64]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Field (Optional) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424]"
                      >
                        {contact.phoneInputLabel}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="e.g. +91 98201 00000"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-sm text-[#2D2424] placeholder:text-[#968885] focus:outline-none focus:border-[#B96B64] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2D2424]"
                    >
                      {contact.messageLabel} <span className="text-[#B96B64]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Feel free to share what you are navigating or what questions you have about coaching..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm text-[#2D2424] placeholder:text-[#968885] focus:outline-none transition-colors ${
                        formErrors.message
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#EADBCE] focus:border-[#B96B64]'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Bottom Form Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#968885]">
                      <Clock className="w-3.5 h-3.5 text-[#B96B64] shrink-0" />
                      <span>{contact.responsePromise}</span>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={<Send className="w-4 h-4 ml-1" />}
                    >
                      {contact.submitButtonText}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          4. INSTAGRAM SECTION (Refined Follow Along)
          ==================================================== */}
      <section
        id="contact-instagram"
        className="rounded-3xl bg-gradient-to-r from-[#FAF7F2] via-[#F6EDE9] to-[#FAF7F2] border border-[#EADBCE] p-8 sm:p-12 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#EADBCE] flex items-center justify-center text-[#B96B64] mx-auto shadow-2xs">
            <Instagram className="w-6 h-6" />
          </div>

          <span className="text-xs font-medium uppercase tracking-widest text-[#B96B64] block">
            {contact.instagramSection.tagline}
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2D2424]">
            {contact.instagramSection.heading}
          </h2>

          <p className="text-sm sm:text-base text-[#6E615F] leading-relaxed max-w-xl mx-auto">
            {contact.instagramSection.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-[#FFFFFF] bg-[#B96B64] hover:bg-[#9E534D] transition-colors shadow-2xs"
            >
              <Instagram className="w-4 h-4" />
              <span>{contact.instagramSection.handle} • {contact.instagramSection.buttonText}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================
          5. FINAL VISUAL BRAND STATEMENT (Subtle, Not Oversized)
          ==================================================== */}
      <section id="contact-final-statement" className="py-6 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E615F]">
            <HeartHandshake className="w-4 h-4 text-[#B96B64]" />
            <span>{brand.brandName || contact.finalStatement.brandName}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D2424] leading-snug">
            “{contact.finalStatement.statement}”
          </h3>

          <p className="text-xs text-[#968885] tracking-wide font-sans">
            {contact.finalStatement.subtext}
          </p>
        </div>
      </section>
    </div>
  );
};
