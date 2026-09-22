/**
 * Central TypeScript types for Relationship Reconnect website content.
 * All fields are structured for effortless customization and future CMS/Admin panel connectivity.
 */

export interface BrandInfo {
  brandName: string;
  ownerName: string;
  professionalTitle: string;
  tagline: string;
  location: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  instagramUrl: string;
  instagramHandle: string;
  profileImageUrl: string;
  profileImageAlt: string;
}

export interface NavItem {
  id: 'home' | 'about' | 'contact';
  label: string;
  path: string;
}

export interface HomeContent {
  welcomeEyebrow: string;
  mainHeadline: string;
  subHeadline: string;
  heroSupportingParagraph: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  brandStatement: string;
  brandStatementSub?: string;
  pillarsSectionEyebrow: string;
  pillarsSectionHeading: string;
  pillarsSectionSubtitle: string;
  corePillars: Array<{
    id: string;
    title: string;
    description: string;
    focusTag?: string;
  }>;
  philosophySectionEyebrow: string;
  philosophyHeading: string;
  philosophyParagraph: string;
  philosophyHighlights: Array<{
    title: string;
    description: string;
  }>;
  instagramSectionEyebrow: string;
  instagramHeading: string;
  instagramDescription: string;
  instagramCtaText: string;
  finalCtaHeading: string;
  finalCtaSubtext: string;
  finalCtaButtonText: string;
  whoIsDebashreeCtaText?: string;
  quote?: {
    text: string;
    attribution: string;
  };
}

export interface AboutContent {
  pageTitle: string;
  pageSubtitle: string;
  brandEyebrow: string;
  introLabel: string;
  storyHeading: string;
  storyParagraphs: string[];
  approachHeading: string;
  approachSubtitle: string;
  approachPrinciples: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  philosophyQuote: {
    text: string;
    attribution: string;
  };
  valuesHeading: string;
  valuesSubtitle: string;
  valuesList: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  // Clearly identifiable editable placeholders (no invented facts)
  educationSectionHeading: string;
  educationSectionSubtitle: string;
  educationPlaceholders: Array<{
    id: string;
    degreeOrProgram: string;
    institution: string;
    yearOrDetails: string;
    isPlaceholder: boolean;
  }>;
  experienceSectionHeading: string;
  experienceSectionSubtitle: string;
  experiencePlaceholders: Array<{
    id: string;
    role: string;
    focus: string;
    details: string;
    isPlaceholder: boolean;
  }>;
  aboutCtaHeading: string;
  aboutCtaSubtitle: string;
  aboutCtaButtonText: string;
  imageCardNote?: string;
  skillsAndFocusAreas?: string[];
}

export interface ContactContent {
  brandEyebrow: string;
  pageTitle: string;
  pageSubtitle: string;
  directReachoutHeading: string;
  directReachoutDescription: string;
  phoneLabel: string;
  phoneNote: string;
  emailLabel: string;
  emailPlaceholderText: string;
  emailNote: string;
  locationLabel: string;
  locationNote: string;
  instagramLabel: string;
  instagramNote: string;
  formHeading: string;
  formSubtitle: string;
  nameLabel: string;
  emailInputLabel: string;
  phoneInputLabel: string;
  messageLabel: string;
  submitButtonText: string;
  responsePromise: string;
  validationErrors: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    messageTooShort: string;
  };
  submissionNotice: {
    stagedTitle: string;
    stagedDescription: string;
    backendDisclaimer: string;
    directCallActionText: string;
    instagramActionText: string;
    resetButtonText: string;
  };
  personalTouch: {
    tagline: string;
    heading: string;
    description: string;
    bullets: string[];
    privacyBadge: string;
  };
  instagramSection: {
    tagline: string;
    heading: string;
    description: string;
    handle: string;
    buttonText: string;
  };
  finalStatement: {
    brandName: string;
    statement: string;
    subtext: string;
  };
}

export interface FooterContent {
  copyrightNotice: string;
  warmClosingNote: string;
}

export interface ThemeColors {
  primary: string; // Muted Rose (#B96B64)
  primaryHover: string; // Deep Rose (#9E534D)
  background: string; // Warm Ivory (#FAF7F2)
  cardBg: string; // Crisp White (#FFFFFF)
  surfaceBlush: string; // Soft Blush (#F6EDE9)
  surfaceCream: string; // Warm Cream (#F4EFEB)
  border: string; // Warm Sand Border (#EADBCE)
  textPrimary: string; // Deep Espresso (#2D2424)
  textMuted: string; // Warm Charcoal (#6E615F)
  textSubtle: string; // Muted Clay (#968885)
}

export interface SiteTheme {
  colors: ThemeColors;
  fonts: {
    heading: string;
    body: string;
  };
}

export interface SiteContent {
  brand: BrandInfo;
  navigation: NavItem[];
  home: HomeContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
  theme?: SiteTheme;
}
