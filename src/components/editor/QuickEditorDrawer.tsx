import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Copy, Check, Info, Sparkles, ExternalLink, Image as ImageIcon, Upload, Download } from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { isRealEmail } from '../../utils/contact';

export const QuickEditorDrawer: React.FC = () => {
  const { content, updateBrand, updateContent, resetToDefaults, isEditorOpen, setIsEditorOpen } = useContent();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'brand' | 'home' | 'about' | 'contact' | 'placeholders' | 'export'>('brand');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsEditorOpen(false);
      }
    };
    if (isEditorOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditorOpen, setIsEditorOpen]);

  if (!isEditorOpen) return null;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(content, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(content, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'relationship-reconnect-config.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div
      id="customizer-drawer-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsEditorOpen(false);
      }}
      className="fixed inset-0 z-50 bg-[#2D2424]/40 backdrop-blur-xs flex justify-end transition-opacity duration-300"
    >
      <div
        id="customizer-drawer-content"
        className="w-full max-w-lg bg-[#FAF7F2] h-full shadow-2xl flex flex-col border-l border-[#EADBCE] animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#EADBCE] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#F6EDE9] border border-[#EADBCE] flex items-center justify-center text-[#B96B64]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium text-[#2D2424]">
                Content Customizer
              </h3>
              <p className="text-[11px] text-[#6E615F]">
                Centralized editable architecture for Relationship Reconnect
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsEditorOpen(false)}
            className="p-2 rounded-lg text-[#6E615F] hover:text-[#2D2424] hover:bg-[#F4EFEB] transition-colors"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Banner */}
        <div className="px-5 py-3 bg-[#F6EDE9] border-b border-[#EADBCE] flex items-start gap-2.5 text-xs text-[#6E615F]">
          <Info className="w-4 h-4 text-[#B96B64] shrink-0 mt-0.5" />
          <p>
            Any change made here updates the site in real-time. Changes are also easily modified directly in{' '}
            <code className="bg-[#FAF7F2] px-1 py-0.5 rounded border border-[#EADBCE] font-mono text-[11px] text-[#2D2424]">
              src/config/siteContent.ts
            </code>
            .
          </p>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-[#EADBCE] px-5 pt-2 gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('brand')}
            className={`pb-2 px-2 transition-colors border-b-2 ${
              activeTab === 'brand'
                ? 'border-[#B96B64] text-[#B96B64]'
                : 'border-transparent text-[#6E615F] hover:text-[#2D2424]'
            }`}
          >
            Brand & Details
          </button>
          <button
            onClick={() => setActiveTab('home')}
            className={`pb-2 px-2 transition-colors border-b-2 ${
              activeTab === 'home'
                ? 'border-[#B96B64] text-[#B96B64]'
                : 'border-transparent text-[#6E615F] hover:text-[#2D2424]'
            }`}
          >
            Home Page
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-2 px-2 transition-colors border-b-2 ${
              activeTab === 'about'
                ? 'border-[#B96B64] text-[#B96B64]'
                : 'border-transparent text-[#6E615F] hover:text-[#2D2424]'
            }`}
          >
            About Page
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-2 px-2 transition-colors border-b-2 ${
              activeTab === 'contact'
                ? 'border-[#B96B64] text-[#B96B64]'
                : 'border-transparent text-[#6E615F] hover:text-[#2D2424]'
            }`}
          >
            Contact Page
          </button>
          <button
            onClick={() => setActiveTab('placeholders')}
            className={`pb-2 px-2 transition-colors border-b-2 ${
              activeTab === 'placeholders'
                ? 'border-[#B96B64] text-[#B96B64]'
                : 'border-transparent text-[#6E615F] hover:text-[#2D2424]'
            }`}
          >
            Education & Background
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`pb-2 px-2 transition-colors border-b-2 ${
              activeTab === 'export'
                ? 'border-[#B96B64] text-[#B96B64]'
                : 'border-transparent text-[#6E615F] hover:text-[#2D2424]'
            }`}
          >
            Export JSON / CMS
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {activeTab === 'brand' && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Brand Name
                </label>
                <input
                  type="text"
                  value={content.brand.brandName}
                  onChange={(e) => updateBrand({ brandName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Owner Name
                </label>
                <input
                  type="text"
                  value={content.brand.ownerName}
                  onChange={(e) => updateBrand({ ownerName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Professional Title
                </label>
                <input
                  type="text"
                  value={content.brand.professionalTitle}
                  onChange={(e) => updateBrand({ professionalTitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Tagline / Brand Statement
                </label>
                <textarea
                  rows={2}
                  value={content.brand.tagline}
                  onChange={(e) => updateBrand({ tagline: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={content.brand.location}
                  onChange={(e) => updateBrand({ location: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={content.brand.phone}
                  onChange={(e) =>
                    updateBrand({
                      phone: e.target.value,
                      phoneDisplay: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424]">
                    Email Address
                  </label>
                  {isRealEmail(content.brand.email) ? (
                    <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Active mailto: link
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase font-semibold text-[#B96B64] bg-[#F6EDE9] px-2 py-0.5 rounded border border-[#EEDBDA]">
                      Placeholder Mode
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  value={content.brand.email}
                  onChange={(e) => updateBrand({ email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
                <span className="text-[11px] text-[#968885] mt-1 block">
                  {isRealEmail(content.brand.email)
                    ? 'Valid email detected. The website has automatically enabled click-to-email links.'
                    : 'Entering a valid email address automatically activates direct email links across the site.'}
                </span>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Instagram Profile URL
                </label>
                <input
                  type="text"
                  value={content.brand.instagramUrl}
                  onChange={(e) => updateBrand({ instagramUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Profile Photo (URL or File Upload)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Paste image URL (https://...) or upload below"
                    value={content.brand.profileImageUrl}
                    onChange={(e) => updateBrand({ profileImageUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                  {content.brand.profileImageUrl && (
                    <button
                      type="button"
                      onClick={() => updateBrand({ profileImageUrl: '' })}
                      className="px-2.5 py-1 text-xs text-[#B96B64] hover:bg-[#F6EDE9] rounded-lg border border-[#EADBCE]"
                      title="Clear and return to placeholder"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="mt-2 flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#2D2424] bg-[#F6EDE9] hover:bg-[#EADBCE] transition-colors border border-[#EADBCE]">
                    <Upload className="w-3.5 h-3.5 text-[#B96B64]" />
                    <span>Upload Photo from Device</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = () => {
                            if (typeof reader.result === 'string') {
                              updateBrand({ profileImageUrl: reader.result });
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>

                <div className="mt-3">
                  <label className="block font-medium text-[11px] text-[#6E615F] mb-1">
                    Photo Accessibility Alt Text
                  </label>
                  <input
                    type="text"
                    value={content.brand.profileImageAlt}
                    onChange={(e) => updateBrand({ profileImageAlt: e.target.value })}
                    placeholder="Portrait of Debashree Sanyal, Life Coach"
                    className="w-full px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-xs text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>

                <span className="text-[11px] text-[#968885] mt-1.5 block">
                  Leave empty to display the refined monogram placeholder until Debashree’s portrait is ready.
                </span>
              </div>
            </div>
          )}

          {activeTab === 'home' && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Hero Main Headline
                </label>
                <textarea
                  rows={2}
                  value={content.home.mainHeadline}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, mainHeadline: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Hero Sub-Headline
                </label>
                <input
                  type="text"
                  value={content.home.subHeadline}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, subHeadline: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Hero Supporting Paragraph
                </label>
                <textarea
                  rows={3}
                  value={content.home.heroSupportingParagraph}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, heroSupportingParagraph: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Primary CTA Text
                  </label>
                  <input
                    type="text"
                    value={content.home.ctaPrimaryText}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        home: { ...content.home, ctaPrimaryText: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Secondary CTA Text
                  </label>
                  <input
                    type="text"
                    value={content.home.ctaSecondaryText}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        home: { ...content.home, ctaSecondaryText: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Brand Statement
                </label>
                <textarea
                  rows={2}
                  value={content.home.brandStatement}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, brandStatement: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Brand Statement Subtext
                </label>
                <textarea
                  rows={2}
                  value={content.home.brandStatementSub || ''}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, brandStatementSub: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Coaching Philosophy Heading
                </label>
                <input
                  type="text"
                  value={content.home.philosophyHeading}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, philosophyHeading: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Coaching Philosophy Paragraph
                </label>
                <textarea
                  rows={3}
                  value={content.home.philosophyParagraph}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, philosophyParagraph: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Final CTA Heading
                </label>
                <input
                  type="text"
                  value={content.home.finalCtaHeading}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, finalCtaHeading: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Final CTA Button Text
                </label>
                <input
                  type="text"
                  value={content.home.finalCtaButtonText}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, finalCtaButtonText: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Read Full Story Button Text
                </label>
                <input
                  type="text"
                  value={content.home.whoIsDebashreeCtaText || ''}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      home: { ...content.home, whoIsDebashreeCtaText: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  About Hero Heading
                </label>
                <input
                  type="text"
                  value={content.about.pageTitle}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, pageTitle: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  About Hero Supporting Text
                </label>
                <textarea
                  rows={2}
                  value={content.about.pageSubtitle}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, pageSubtitle: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Brand Eyebrow
                </label>
                <input
                  type="text"
                  value={content.about.brandEyebrow}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, brandEyebrow: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Intro Label
                  </label>
                  <input
                    type="text"
                    value={content.about.introLabel}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        about: { ...content.about, introLabel: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Story Heading
                  </label>
                  <input
                    type="text"
                    value={content.about.storyHeading}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        about: { ...content.about, storyHeading: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Coaching Approach Heading
                </label>
                <input
                  type="text"
                  value={content.about.approachHeading}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, approachHeading: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Coaching Approach Subtitle
                </label>
                <textarea
                  rows={2}
                  value={content.about.approachSubtitle}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, approachSubtitle: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Personal Philosophy Quote
                </label>
                <textarea
                  rows={2}
                  value={content.about.philosophyQuote.text}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: {
                        ...content.about,
                        philosophyQuote: {
                          ...content.about.philosophyQuote,
                          text: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Quote Attribution
                </label>
                <input
                  type="text"
                  value={content.about.philosophyQuote.attribution}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: {
                        ...content.about,
                        philosophyQuote: {
                          ...content.about.philosophyQuote,
                          attribution: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Values Section Heading
                </label>
                <input
                  type="text"
                  value={content.about.valuesHeading}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, valuesHeading: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  About CTA Heading
                </label>
                <input
                  type="text"
                  value={content.about.aboutCtaHeading}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, aboutCtaHeading: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  About CTA Subtitle
                </label>
                <textarea
                  rows={2}
                  value={content.about.aboutCtaSubtitle}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, aboutCtaSubtitle: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  About CTA Button Text
                </label>
                <input
                  type="text"
                  value={content.about.aboutCtaButtonText}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, aboutCtaButtonText: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Profile Card Note
                </label>
                <textarea
                  rows={2}
                  value={content.about.imageCardNote || ''}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      about: { ...content.about, imageCardNote: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Contact Page Title
                </label>
                <input
                  type="text"
                  value={content.contact.pageTitle}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      contact: { ...content.contact, pageTitle: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Contact Page Subtitle
                </label>
                <textarea
                  rows={2}
                  value={content.contact.pageSubtitle}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      contact: { ...content.contact, pageSubtitle: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Brand Eyebrow
                </label>
                <input
                  type="text"
                  value={content.contact.brandEyebrow}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      contact: { ...content.contact, brandEyebrow: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Phone Card Note
                  </label>
                  <input
                    type="text"
                    value={content.contact.phoneNote}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        contact: { ...content.contact, phoneNote: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Email Placeholder Text
                  </label>
                  <input
                    type="text"
                    value={content.contact.emailPlaceholderText}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        contact: { ...content.contact, emailPlaceholderText: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Location Card Note
                  </label>
                  <input
                    type="text"
                    value={content.contact.locationNote}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        contact: { ...content.contact, locationNote: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Instagram Card Note
                  </label>
                  <input
                    type="text"
                    value={content.contact.instagramNote}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        contact: { ...content.contact, instagramNote: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Form Heading
                </label>
                <input
                  type="text"
                  value={content.contact.formHeading}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      contact: { ...content.contact, formHeading: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Form Subtitle
                </label>
                <textarea
                  rows={2}
                  value={content.contact.formSubtitle}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      contact: { ...content.contact, formSubtitle: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Submit Button Text
                  </label>
                  <input
                    type="text"
                    value={content.contact.submitButtonText}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        contact: { ...content.contact, submitButtonText: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                    Response Promise Note
                  </label>
                  <input
                    type="text"
                    value={content.contact.responsePromise}
                    onChange={(e) =>
                      updateContent({
                        ...content,
                        contact: { ...content.contact, responsePromise: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Personal Touch Heading
                </label>
                <input
                  type="text"
                  value={content.contact.personalTouch.heading}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      contact: {
                        ...content.contact,
                        personalTouch: {
                          ...content.contact.personalTouch,
                          heading: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Personal Touch Description
                </label>
                <textarea
                  rows={2}
                  value={content.contact.personalTouch.description}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      contact: {
                        ...content.contact,
                        personalTouch: {
                          ...content.contact.personalTouch,
                          description: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Instagram Section Heading
                </label>
                <input
                  type="text"
                  value={content.contact.instagramSection.heading}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      contact: {
                        ...content.contact,
                        instagramSection: {
                          ...content.contact.instagramSection,
                          heading: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#2D2424] mb-1">
                  Final Brand Statement
                </label>
                <textarea
                  rows={2}
                  value={content.contact.finalStatement.statement}
                  onChange={(e) =>
                    updateContent({
                      ...content,
                      contact: {
                        ...content.contact,
                        finalStatement: {
                          ...content.contact.finalStatement,
                          statement: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#EADBCE] text-sm text-[#2D2424] focus:outline-none focus:border-[#B96B64]"
                />
              </div>
            </div>
          )}

          {activeTab === 'placeholders' && (
            <div className="space-y-5 text-xs">
              <div>
                <h4 className="font-semibold text-sm text-[#2D2424] mb-2">
                  Education & Credentials Placeholders
                </h4>
                <p className="text-[#6E615F] mb-3">
                  These placeholders adhere strictly to the rule of not inventing credentials. Debashree can customize them anytime:
                </p>
                <div className="space-y-3">
                  {content.about.educationPlaceholders.map((edu, idx) => (
                    <div key={edu.id} className="p-3 bg-white rounded-xl border border-[#EADBCE] space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#2D2424]">Item #{idx + 1}</span>
                        <label className="flex items-center gap-1.5 text-[11px] text-[#6E615F]">
                          <input
                            type="checkbox"
                            checked={edu.isPlaceholder}
                            onChange={(e) => {
                              const newEdus = [...content.about.educationPlaceholders];
                              newEdus[idx].isPlaceholder = e.target.checked;
                              updateContent({
                                ...content,
                                about: { ...content.about, educationPlaceholders: newEdus },
                              });
                            }}
                          />
                          Mark as Placeholder
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Degree / Program"
                        value={edu.degreeOrProgram}
                        onChange={(e) => {
                          const newEdus = [...content.about.educationPlaceholders];
                          newEdus[idx].degreeOrProgram = e.target.value;
                          updateContent({
                            ...content,
                            about: { ...content.about, educationPlaceholders: newEdus },
                          });
                        }}
                        className="w-full px-2.5 py-1.5 rounded bg-[#FAF7F2] border border-[#EADBCE] text-xs text-[#2D2424]"
                      />
                      <input
                        type="text"
                        placeholder="Institution / Academy"
                        value={edu.institution}
                        onChange={(e) => {
                          const newEdus = [...content.about.educationPlaceholders];
                          newEdus[idx].institution = e.target.value;
                          updateContent({
                            ...content,
                            about: { ...content.about, educationPlaceholders: newEdus },
                          });
                        }}
                        className="w-full px-2.5 py-1.5 rounded bg-[#FAF7F2] border border-[#EADBCE] text-xs text-[#2D2424]"
                      />
                      <input
                        type="text"
                        placeholder="Year / Specialization"
                        value={edu.yearOrDetails}
                        onChange={(e) => {
                          const newEdus = [...content.about.educationPlaceholders];
                          newEdus[idx].yearOrDetails = e.target.value;
                          updateContent({
                            ...content,
                            about: { ...content.about, educationPlaceholders: newEdus },
                          });
                        }}
                        className="w-full px-2.5 py-1.5 rounded bg-[#FAF7F2] border border-[#EADBCE] text-xs text-[#2D2424]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-4 text-xs">
              <p className="text-[#6E615F] leading-relaxed">
                Here is your live configuration JSON. You can copy this data and paste it into{' '}
                <code className="bg-[#FFFFFF] px-1 py-0.5 rounded border border-[#EADBCE] font-mono text-[11px] text-[#2D2424]">
                  src/config/siteContent.ts
                </code>{' '}
                to permanently bake your changes into the codebase or hook into an external CMS/Admin API.
              </p>
              <div className="relative">
                <pre className="p-3 bg-[#FFFFFF] rounded-xl border border-[#EADBCE] font-mono text-[11px] text-[#2D2424] max-h-72 overflow-y-auto leading-relaxed">
                  {JSON.stringify(content, null, 2)}
                </pre>
                <div className="absolute top-2 right-2 flex items-center gap-1.5">
                  <button
                    onClick={handleCopyJson}
                    className="px-2.5 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#EADBCE] text-xs font-medium text-[#2D2424] hover:bg-[#F6EDE9] transition-colors flex items-center gap-1 shadow-xs"
                    title="Copy configuration JSON to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#B96B64]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleDownloadJson}
                    className="px-2.5 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#EADBCE] text-xs font-medium text-[#2D2424] hover:bg-[#F6EDE9] transition-colors flex items-center gap-1 shadow-xs"
                    title="Download JSON file to your device"
                  >
                    <Download className="w-3.5 h-3.5 text-[#B96B64]" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-[#EADBCE] bg-[#FAF7F2] flex items-center justify-between">
          <button
            onClick={resetToDefaults}
            className="inline-flex items-center gap-1.5 text-xs text-[#6E615F] hover:text-[#9E534D] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Defaults
          </button>
          <button
            onClick={() => setIsEditorOpen(false)}
            className="px-4 py-2 rounded-full text-xs font-medium text-white bg-[#B96B64] hover:bg-[#9E534D] transition-colors"
          >
            Done Editing
          </button>
        </div>
      </div>
    </div>
  );
};
