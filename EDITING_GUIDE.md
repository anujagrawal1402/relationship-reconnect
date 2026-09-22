# Relationship Reconnect — Website Editing Guide
**Owner:** Debashree Sanyal | **Brand:** Relationship Reconnect — Life Coach

Welcome to your website! This guide explains how to easily customize every part of your website without needing to touch complex code.

---

## 1. The Single Source of Truth: `src/config/siteContent.ts`

All the visible text, phone numbers, links, credentials, and image paths on this website are managed in one centralized configuration file:

📁 **`src/config/siteContent.ts`**

Whenever you want to make permanent edits, simply open this file and update the values.

---

## 2. Quick Reference: Where to Change Key Content

### 1. Where to change the Owner Name, Title, and Brand
Open `src/config/siteContent.ts` and locate the `brand` block:
```typescript
brand: {
  brandName: 'Relationship Reconnect',
  ownerName: 'Debashree Sanyal',
  professionalTitle: 'Life Coach',
  tagline: 'Fostering deeper connections, emotional wellness, and transformative self-discovery.',
  location: 'Bangalore, India',
}
```
*Changing these automatically updates the Header, Home, About, Contact, and Footer pages.*

### 2. Where to change Phone Number
In `src/config/siteContent.ts` under `brand`:
```typescript
phone: '+91 98201 42678',
phoneDisplay: '+91 98201 42678',
```
*Both the visible numbers and the click-to-call (`tel:`) dialer links will update automatically across all pages.*

### 3. Where to add Email Address
In `src/config/siteContent.ts` under `brand`:
```typescript
email: 'your-email@domain.com',
```
- **Placeholder Mode:** If left as placeholder text, the site displays a clean `[Placeholder]` badge and does not create broken links.
- **Active Mode:** As soon as you enter a valid email address (e.g. `debashree@gmail.com`), the website automatically activates direct `mailto:` links across the Contact Cards and Footer.

### 4. Where to change Location
In `src/config/siteContent.ts` under `brand`:
```typescript
location: 'Bangalore, India',
```
*Changing this updates the City and Location badges across the Header, Hero, About, Contact cards, and Footer.*

### 5. Where to change Instagram Link & Handle
In `src/config/siteContent.ts` under `brand`:
```typescript
instagramUrl: 'https://www.instagram.com/relifeshipreconnect?igsh=MWJub3Nud2tzbmM0MA==',
instagramHandle: '@relifeshipreconnect',
```
*This updates the Instagram links in the Navigation bar, Home page, Contact page, and Footer.*

### 6. Where to replace Profile Photo
In `src/config/siteContent.ts` under `brand`:
```typescript
profileImageUrl: 'https://your-domain.com/photo.jpg',
profileImageAlt: 'Portrait of Debashree Sanyal, Life Coach',
```
- **Artistic Monogram Placeholder:** When `profileImageUrl` is empty `""`, an artistic monogram frame with your initials is shown.
- **Your Photo:** Set a URL or local image path (e.g. `/debashree.jpg` placed in the `public/` folder).
- **Interactive Preview:** You can also click **Customize** in the top navigation and click **"Upload Photo from Device"** to immediately preview a photo.

### 7. Where to edit Home Page Content
In `src/config/siteContent.ts` under `home`:
- `mainHeadline`: Hero title
- `subHeadline`: Subtitle text
- `corePillars`: The 3 core pathways (Emotional Wellness, Healthy Connection, Personal Growth)
- `philosophyParagraph`: Debashree's coaching philosophy
- `finalCtaHeading`: Bottom call-to-action

### 8. Where to edit About Page Content
In `src/config/siteContent.ts` under `about`:
- `whoIsDebashreeStory`: Debashree's narrative and background
- `approachPrinciples`: The 3 pillars of her approach (Non-Judgmental Listening, Pattern Recognition, Sustainable Growth)
- `coreValues`: The 4 values (Self-Awareness, Emotional Honesty, Empathetic Communication, Relational Growth)

### 9. Where to edit Education & Background Placeholders
In `src/config/siteContent.ts` under `about.educationPlaceholders`:
```typescript
educationPlaceholders: [
  {
    id: 'edu-placeholder-1',
    degreeOrProgram: '[Degree / Certification Program Name]',
    institution: '[University / Coaching Academy Name]',
    yearOrDetails: '[Year completed or specialized coaching credential]',
    isPlaceholder: true,
  },
]
```
*Update these entries with real degrees or certifications whenever confirmed, or mark `isPlaceholder: false`.*

### 10. Where to edit Professional Experience
In `src/config/siteContent.ts` under `about.experiencePlaceholders`:
```typescript
experiencePlaceholders: [
  {
    id: 'exp-current',
    role: 'Founder & Life Coach',
    focus: 'Relationship Reconnect',
    details: 'Guiding individuals and partners through relational clarity and emotional self-discovery in Bangalore & virtually.',
    isPlaceholder: false,
  },
]
```
*Add new roles, prior milestones, or practice focuses as needed.*

### 11. Where to edit Contact Page Content
In `src/config/siteContent.ts` under `contact`:
- `pageTitle` & `pageSubtitle`: Hero text
- `directReachoutHeading`: Section title
- `formHeading` & `responsePromise`: Contact form labels and 24–48 hour response commitment
- `confidentialityNotice`: Privacy and reassurance notes

---

## 3. How to Use the Live "Customize" Panel

You can test content changes interactively right in the browser:
1. Click the **"Customize"** button in the top navigation bar or the footer.
2. A drawer opens on the right side of the screen with tabs for **Brand & Contact**, **Home Page**, **About Page**, **Contact Page**, and **Education & Background**.
3. Type any changes. The page updates **instantly in real time** so you can see how it looks.
4. Changes are safely saved in your browser's local memory so they persist across refreshes.

---

## 4. How to Export Your Changes

When you are happy with the changes you made in the Customize panel:
1. Open the **Customize** drawer.
2. Click the **"Export JSON / CMS"** tab.
3. Click **"Copy Config to Clipboard"** or **"Download JSON Backup"**.
4. You can paste these updated values directly into `src/config/siteContent.ts` to make them permanent.
