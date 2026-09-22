import { SiteContent } from '../types/content';

/**
 * =========================================================================
 * RELATIONSHIP RECONNECT — CENTRAL SITE CONTENT & CONFIGURATION
 * =========================================================================
 * 
 * EDITABILITY GUIDE:
 * All website texts, contact details, social links, and placeholders
 * are maintained in this single file. You can modify any value below to update
 * the entire website immediately.
 * 
 * - Brand Details: Change name, title, phone, Instagram, and email below.
 * - Profile Photo: Provide an image URL in `brand.profileImageUrl` or keep empty
 *   to display the elegant editorial placeholder.
 * - Placeholders: Clearly marked so Debashree Sanyal can replace them anytime.
 */

export const defaultSiteContent: SiteContent = {
  brand: {
    brandName: 'Relationship Reconnect',
    ownerName: 'Debashree Sanyal',
    professionalTitle: 'Life Coach',
    tagline: 'Fostering deeper connections, emotional wellness, and transformative self-discovery.',
    location: 'Bangalore, India',
    phone: '+91 98201 42678',
    phoneDisplay: '+91 98201 42678',
    // Editable email placeholder — real email will be added manually later.
    // When a valid email is entered, the website automatically creates active mailto: links.
    email: 'Email address will be added here',
    // Only official social media platform requested
    instagramUrl: 'https://www.instagram.com/relifeshipreconnect?utm_source=qr&stkn=MW96bjRpdG1iYjJ1eg==',
    instagramHandle: '@relifeshipreconnect',
    // Leave empty or set a URL/path string when Debashree's real photo is ready
    profileImageUrl: '',
    profileImageAlt: 'Portrait of Debashree Sanyal, Life Coach at Relationship Reconnect',
  },

  navigation: [
    { id: 'home', label: 'Home', path: '#home' },
    { id: 'about', label: 'About', path: '#about' },
    { id: 'contact', label: 'Contact', path: '#contact' },
  ],

  home: {
    welcomeEyebrow: 'Relationship Reconnect • Debashree Sanyal • Life Coach',
    mainHeadline: 'Reconnect With Yourself. Build Healthier Relationships.',
    subHeadline:
      'A calm, compassionate space for personal growth, self-discovery, and emotional wellness in Bangalore, India.',
    heroSupportingParagraph:
      'Debashree Sanyal helps individuals and couples deepen self-understanding, strengthen emotional awareness, and create healthier, more meaningful relationships built on mutual respect and clarity.',
    ctaPrimaryText: 'Connect With Me',
    ctaSecondaryText: 'Know My Story',

    // Section 4: Brand Statement
    brandStatement: 'Every relationship begins with the relationship you have with yourself.',
    brandStatementSub:
      'When you foster gentle self-awareness and emotional honesty within, you unlock the natural capacity for deeper empathy, healthy boundaries, and resilient human bonds.',

    // Section 5: Three Core Pillars
    pillarsSectionEyebrow: 'Three Core Pillars',
    pillarsSectionHeading: 'Pathways to Connection and Emotional Wellbeing',
    pillarsSectionSubtitle:
      'Thoughtful, grounded areas of focus designed to bring clarity to your internal world and interpersonal connections.',
    corePillars: [
      {
        id: 'pillar-emotional-wellness',
        title: 'Emotional Wellness',
        description: 'Cultivate inner calm, understand emotional responses with compassion, and build gentle emotional resilience.',
        focusTag: 'Inner Balance',
      },
      {
        id: 'pillar-healthy-connection',
        title: 'Healthy Connection',
        description: 'Develop empathetic communication, establish healthy relational boundaries, and nurture authentic mutual trust.',
        focusTag: 'Mutual Trust',
      },
      {
        id: 'pillar-self-discovery',
        title: 'Personal Growth',
        description: 'Gain clarity on personal values, release reactive habits, and embark on purposeful self-discovery.',
        focusTag: 'Clarity',
      },
    ],

    // Section 6: Coaching Philosophy
    philosophySectionEyebrow: 'Coaching Philosophy',
    philosophyHeading: 'A Safe, Grounded Sanctuary for Self & Relational Discovery',
    philosophyParagraph:
      'Meaningful change is not about quick fixes or rigid answers. Debashree’s coaching philosophy is rooted in self-awareness, emotional understanding, and intentional personal growth. In a compassionate, non-judgmental atmosphere, we explore your unique relational patterns, cultivate honest communication, and nurture lasting personal clarity.',
    philosophyHighlights: [
      {
        title: 'Compassionate Awareness',
        description: 'Honoring your thoughts and feelings without judgment or pressure.',
      },
      {
        title: 'Conscious Communication',
        description: 'Expressing your needs clearly and listening with empathetic presence.',
      },
      {
        title: 'Grounded Growth',
        description: 'Cultivating sustainable self-worth and mindful relationship practices.',
      },
    ],

    // Section 7: Instagram Connection
    instagramSectionEyebrow: 'Continue the Conversation',
    instagramHeading: 'Reflections on Emotional Wellbeing & Connection',
    instagramDescription:
      'Follow Relationship Reconnect on Instagram for gentle reflections on relationships, self-growth, and emotional wellbeing.',
    instagramCtaText: 'Follow @relifeshipreconnect on Instagram',

    // Section 8: Final Home CTA
    finalCtaHeading: 'Sometimes, a meaningful conversation is where change begins.',
    finalCtaSubtext:
      'Take the first gentle step toward greater clarity, emotional balance, and healthier relationship connections.',
    finalCtaButtonText: "Let's Connect",
    whoIsDebashreeCtaText: 'Read Debashree’s Full Story',

    quote: {
      text: 'True reconnection begins within: understanding yourself is the foundational bridge to every meaningful relationship.',
      attribution: 'Debashree Sanyal — Life Coach',
    },
  },

  about: {
    pageTitle: 'Meet Debashree',
    pageSubtitle: 'Creating space for self-understanding, meaningful connection and personal growth.',
    brandEyebrow: 'Relationship Reconnect • Debashree Sanyal • Life Coach',
    introLabel: 'A Little About Me',
    storyHeading: 'The Heart Behind Relationship Reconnect',
    storyParagraphs: [
      'Relationships are the mirrors through which we learn the most about ourselves. As a Life Coach, my work is rooted in the conviction that meaningful connections begin with inner clarity, emotional awareness, and deep self-compassion.',
      'Based in Bangalore, I create a calm, supportive space where individuals can explore life’s emotional transitions without fear of judgment. My approach emphasizes patient listening, conscious reflection, and discovering the emotional patterns that shape how we show up in our relationships.',
      'Relationship Reconnect was founded to be more than a consultation; it is an intentional space to slow down, untangle emotional complexities, and rediscover the strength to connect genuinely with yourself and the people in your life.',
    ],

    // Coaching Approach
    approachHeading: 'My Approach',
    approachSubtitle:
      'A grounded, collaborative journey designed to cultivate self-awareness, emotional balance, and intentional connection.',
    approachPrinciples: [
      {
        id: 'principle-understand-yourself',
        title: '1. Understand Yourself',
        description:
          'Explore your inner emotional landscape with curiosity and compassion. Recognizing personal patterns and emotional triggers is the foundation of genuine growth.',
      },
      {
        id: 'principle-communicate-consciously',
        title: '2. Communicate Consciously',
        description:
          'Move past defensive habits and reactive cycles to articulate thoughts, feelings, and boundaries with calm clarity, empathy, and honest intent.',
      },
      {
        id: 'principle-build-healthier-connections',
        title: '3. Build Healthier Connections',
        description:
          'Cultivate relationships founded on mutual respect, emotional safety, and healthy interdependence, honoring individuality while fostering closeness.',
      },
      {
        id: 'principle-grow-with-intention',
        title: '4. Grow With Intention',
        description:
          'Translate emotional insights into sustainable everyday habits, nurturing a resilient mindset and steady alignment with what truly matters to you.',
      },
    ],

    // Personal Philosophy Quote
    philosophyQuote: {
      text: 'Understanding yourself is often the first step toward understanding the relationships you create.',
      attribution: 'Debashree Sanyal — Life Coach, Relationship Reconnect',
    },

    // Values Section
    valuesHeading: 'The Values Behind Relationship Reconnect',
    valuesSubtitle:
      'Core principles that anchor every session, conversation, and guiding reflection.',
    valuesList: [
      {
        id: 'val-empathy',
        title: 'Empathy',
        description:
          'Deep listening and presence that honors your lived experiences without unsolicited judgment or clinical detachment.',
      },
      {
        id: 'val-self-awareness',
        title: 'Self-Awareness',
        description:
          'Fostering mindful clarity around emotions, habitual responses, and the quiet internal narratives that influence daily choices.',
      },
      {
        id: 'val-honest-communication',
        title: 'Honest Communication',
        description:
          'Encouraging truthful, constructive, and respectful dialogues that dismantle misunderstandings and nurture trust.',
      },
      {
        id: 'val-personal-growth',
        title: 'Personal Growth',
        description:
          'Supporting continuous, gentle evolution at your own pace, grounded in sustainable self-worth and purpose.',
      },
    ],

    // Education & Credentials (Clearly marked editable placeholders — no invented facts)
    educationSectionHeading: 'Education & Credentials',
    educationSectionSubtitle:
      'Academic background, coaching credentials, and specialized training (Placeholder section ready for personalization).',
    educationPlaceholders: [
      {
        id: 'edu-placeholder-1',
        degreeOrProgram: '[Add educational background / degree here]',
        institution: '[University / College / Educational Institution]',
        yearOrDetails: '[Specialization / Year details to be added]',
        isPlaceholder: true,
      },
      {
        id: 'edu-placeholder-2',
        degreeOrProgram: '[Add coaching certification / training here]',
        institution: '[Accrediting Organization / Institute Name]',
        yearOrDetails: '[Certification details / Year to be added]',
        isPlaceholder: true,
      },
    ],

    // Experience (Professional role, no invented years or companies)
    experienceSectionHeading: 'Experience & Practice',
    experienceSectionSubtitle:
      'Professional focus, coaching practice, and background.',
    experiencePlaceholders: [
      {
        id: 'exp-current',
        role: 'Life Coach',
        focus: 'Relationship Reconnect • Bangalore, India',
        details:
          'Supporting individuals on personal clarity, emotional wellness, relational dynamics, and mindful self-discovery.',
        isPlaceholder: false,
      },
      {
        id: 'exp-placeholder',
        role: '[Add additional experience details here]',
        focus: '[Organization / Focus Area]',
        details:
          '[Additional professional background, prior counseling or career milestones to be added here]',
        isPlaceholder: true,
      },
    ],

    // Bottom About CTA
    aboutCtaHeading: 'Ready to start a meaningful conversation?',
    aboutCtaSubtitle:
      'Whether you are navigating a transition, seeking relationship clarity, or wanting to understand yourself more deeply, you are warmly invited to connect.',
    aboutCtaButtonText: "Let's Connect",
    imageCardNote:
      'A compassionate coaching space in Bangalore, India dedicated to intentional relationships, emotional balance, and personal self-discovery.',

    skillsAndFocusAreas: [
      'Self-Awareness & Mindful Reflection',
      'Relationship & Connection Patterns',
      'Empathetic & Conscious Communication',
      'Healthy Boundaries & Self-Worth',
      'Emotional Balance & Regulation',
      'Navigating Life Transitions',
    ],
  },

  contact: {
    brandEyebrow: 'Relationship Reconnect • Debashree Sanyal • Life Coach',
    pageTitle: "Let's Connect",
    pageSubtitle: 'Sometimes, a meaningful conversation is the beginning of a meaningful change.',
    directReachoutHeading: 'Direct Channels',
    directReachoutDescription:
      "Whether you have questions about coaching or want to explore working together, you're welcome to reach out through any of the channels below.",
    phoneLabel: 'Phone & Inquiries',
    phoneNote: 'Direct line for phone calls and inquiries',
    emailLabel: 'Email Address',
    emailPlaceholderText: 'Email address will be added here',
    emailNote: 'Official email address will be updated manually soon',
    locationLabel: 'Location',
    locationNote: 'Bangalore, India • In-person locally & virtual sessions',
    instagramLabel: 'Instagram',
    instagramNote: 'Reflections on relationships, awareness & personal growth',
    formHeading: 'Send a Thoughtful Note',
    formSubtitle:
      'Please share what is on your mind. Debashree treats every message with respect, care, and complete confidentiality.',
    nameLabel: 'Your Name',
    emailInputLabel: 'Email Address',
    phoneInputLabel: 'Phone Number (Optional)',
    messageLabel: 'Your Message or Question',
    submitButtonText: 'Send Message',
    responsePromise:
      'All inquiries are held in strict confidence and responded to with care within 24 to 48 business hours.',
    validationErrors: {
      nameRequired: 'Please enter your name so Debashree knows how to address you.',
      emailRequired: 'Please provide an email address where we can reach you.',
      emailInvalid: 'Please provide a valid email format (e.g. name@example.com).',
      messageRequired: 'Please share a brief note or question.',
      messageTooShort: 'Please enter at least 10 characters so we can understand your inquiry.',
    },
    submissionNotice: {
      stagedTitle: 'Thank You for Reaching Out',
      stagedDescription:
        'Your note has been validated and prepared. Debashree values your courage in taking this first step.',
      backendDisclaimer:
        'Note: This website currently operates in direct client mode without an automated mail server backend. To ensure your inquiry reaches Debashree immediately, please feel free to call directly or connect via Instagram.',
      directCallActionText: 'Call +91 98201 42678',
      instagramActionText: 'Message on Instagram (@relifeshipreconnect)',
      resetButtonText: 'Write Another Note',
    },
    personalTouch: {
      tagline: 'A Personal Invitation',
      heading: 'A little space for your thoughts.',
      description:
        "Whether you want to share what's on your mind or simply begin a conversation, you're welcome to reach out. There is no expectation or pressure—just an open, empathetic space to be heard.",
      bullets: [
        'A confidential, judgment-free space to explore what is on your mind',
        'No rigid scripts—every dialogue is personal and tailored to your pace',
        'Rooted in self-awareness, honest reflection, and intentional growth',
      ],
      privacyBadge: 'Complete Privacy & Discretion Assured',
    },
    instagramSection: {
      tagline: 'Follow along',
      heading: 'Explore Reflections on Love, Connection & Life',
      description:
        'Explore reflections on relationships, self-awareness, healthy boundaries, and personal growth shared regularly by Debashree.',
      handle: '@relifeshipreconnect',
      buttonText: 'View on Instagram',
    },
    finalStatement: {
      brandName: 'Relationship Reconnect',
      statement: 'Reconnect with yourself. Create healthier connections. Grow with intention.',
      subtext: 'Debashree Sanyal • Life Coach • Bangalore, India',
    },
  },

  footer: {
    copyrightNotice: `© ${new Date().getFullYear()} Relationship Reconnect. All rights reserved.`,
    warmClosingNote: 'Dedicated to emotional wellness, mindful communication, and healthy relationship journeys.',
  },

  theme: {
    colors: {
      primary: '#B96B64', // Muted Rose
      primaryHover: '#9E534D', // Deep Rose
      background: '#FAF7F2', // Warm Ivory
      cardBg: '#FFFFFF', // Crisp White
      surfaceBlush: '#F6EDE9', // Soft Blush
      surfaceCream: '#F4EFEB', // Warm Cream
      border: '#EADBCE', // Warm Sand Border
      textPrimary: '#2D2424', // Deep Espresso
      textMuted: '#6E615F', // Warm Charcoal
      textSubtle: '#968885', // Muted Clay
    },
    fonts: {
      heading: 'Cormorant Garamond, serif',
      body: 'Plus Jakarta Sans, sans-serif',
    },
  },
};
