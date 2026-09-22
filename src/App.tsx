import React, { useEffect } from 'react';
import { ContentProvider, useContent } from './context/ContentContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { QuickEditorDrawer } from './components/editor/QuickEditorDrawer';

const AppContent: React.FC = () => {
  const { content, activePage } = useContent();
  const { brand } = content;

  // Dynamic SEO page title update
  useEffect(() => {
    let title = `${brand.brandName} — ${brand.ownerName} | ${brand.professionalTitle}`;
    if (activePage === 'about') {
      title = `About ${brand.ownerName} — ${brand.brandName}`;
    } else if (activePage === 'contact') {
      title = `Let’s Connect — ${brand.brandName}`;
    }
    document.title = title;
  }, [activePage, brand.brandName, brand.ownerName, brand.professionalTitle]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2424] font-sans selection:bg-[#EADBCE]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {activePage === 'home' && <HomePage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Content Customizer Drawer */}
      <QuickEditorDrawer />
    </div>
  );
};

export default function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}
