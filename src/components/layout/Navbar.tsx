import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Sliders } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

export const Navbar: React.FC = () => {
  const { content, activePage, setActivePage, setIsEditorOpen } = useContent();
  const { brand, navigation } = content;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: 'home' | 'about' | 'contact') => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADBCE] shadow-xs py-3'
          : 'bg-[#FAF7F2] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Owner Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex flex-col text-left focus:outline-none"
            aria-label="Relationship Reconnect Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#2D2424] group-hover:text-[#B96B64] transition-colors">
              {brand.brandName}
            </span>
            <span className="text-[11px] sm:text-xs font-sans tracking-wide text-[#6E615F] font-normal">
              {brand.ownerName} • {brand.professionalTitle}
            </span>
          </button>

          {/* Desktop Navigation (Home, About, Contact only) */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {navigation.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id as 'home' | 'about' | 'contact')}
                  className={`relative px-4 py-2 text-sm font-sans tracking-wide transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-[#2D2424] font-medium'
                      : 'text-[#6E615F] hover:text-[#2D2424] hover:bg-[#F4EFEB]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#B96B64] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions: Instagram & Customizer */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Instagram link */}
            <a
              id="header-instagram-link"
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#2D2424] bg-[#F6EDE9] hover:bg-[#EEDBDA] border border-[#EADBCE] transition-all duration-200 shadow-2xs"
              title="Follow Debashree on Instagram"
              aria-label="Instagram profile"
            >
              <Instagram className="w-3.5 h-3.5 text-[#B96B64]" />
              <span>Instagram</span>
            </a>

            {/* Quick Content Customizer Trigger */}
            <button
              id="header-editor-toggle"
              type="button"
              onClick={() => setIsEditorOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#6E615F] hover:text-[#2D2424] hover:bg-[#F4EFEB] transition-colors border border-transparent hover:border-[#EADBCE]"
              title="Quickly edit website content, phone, email & photo"
            >
              <Sliders className="w-3.5 h-3.5 text-[#B96B64]" />
              <span>Customize</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsEditorOpen(true)}
              className="p-2 text-[#6E615F] hover:text-[#2D2424] rounded-lg"
              title="Customize Content"
              aria-label="Customize Content"
            >
              <Sliders className="w-4 h-4 text-[#B96B64]" />
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2D2424] hover:bg-[#F4EFEB] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden border-b border-[#EADBCE] bg-[#FAF7F2] px-4 pt-3 pb-6 shadow-md transition-all animate-in fade-in duration-200"
        >
          <nav className="flex flex-col space-y-1">
            {navigation.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as 'home' | 'about' | 'contact')}
                  className={`text-left px-4 py-3 text-base rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#F6EDE9] text-[#B96B64] font-medium'
                      : 'text-[#2D2424] hover:bg-[#F4EFEB]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#EADBCE]/80 flex flex-col gap-2.5">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#F6EDE9] text-sm font-medium text-[#2D2424] border border-[#EADBCE]"
            >
              <Instagram className="w-4 h-4 text-[#B96B64]" />
              Follow on Instagram ({brand.instagramHandle})
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsEditorOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-medium text-[#6E615F] hover:text-[#2D2424]"
            >
              <Sliders className="w-3.5 h-3.5" />
              Customize Content & Placeholders
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
