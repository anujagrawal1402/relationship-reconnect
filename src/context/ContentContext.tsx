import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent } from '../types/content';
import { defaultSiteContent } from '../config/siteContent';

interface ContentContextValue {
  content: SiteContent;
  updateBrand: (partial: Partial<SiteContent['brand']>) => void;
  updateContent: (newContent: SiteContent) => void;
  resetToDefaults: () => void;
  activePage: 'home' | 'about' | 'contact';
  setActivePage: (page: 'home' | 'about' | 'contact') => void;
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'relationship_reconnect_content_v1';

const ContentContext = createContext<ContentContextValue | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with default to ensure no missing keys if schema evolves
        return {
          ...defaultSiteContent,
          ...parsed,
          brand: { ...defaultSiteContent.brand, ...(parsed.brand || {}) },
          home: { ...defaultSiteContent.home, ...(parsed.home || {}) },
          about: { ...defaultSiteContent.about, ...(parsed.about || {}) },
          contact: { ...defaultSiteContent.contact, ...(parsed.contact || {}) },
          footer: { ...defaultSiteContent.footer, ...(parsed.footer || {}) },
        };
      }
    } catch {
      // Fallback to default
    }
    return defaultSiteContent;
  });

  const [activePage, setActivePage] = useState<'home' | 'about' | 'contact'>('home');
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  // Synchronize changes to localStorage so modifications survive refreshes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [content]);

  const updateBrand = (partial: Partial<SiteContent['brand']>) => {
    setContent((prev) => ({
      ...prev,
      brand: {
        ...prev.brand,
        ...partial,
      },
    }));
  };

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
  };

  const resetToDefaults = () => {
    setContent(defaultSiteContent);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        updateBrand,
        updateContent,
        resetToDefaults,
        activePage,
        setActivePage,
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextValue => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
