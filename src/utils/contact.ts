/**
 * Contact and communication utilities for Relationship Reconnect.
 * Ensures robust phone dialer links and authentic email handling without fake placeholders.
 */

/**
 * Checks whether an email string is a genuine email address
 * rather than a placeholder, instructional text, or empty value.
 */
export const isRealEmail = (email?: string | null): boolean => {
  if (!email) return false;
  const trimmed = email.trim();
  if (
    !trimmed ||
    trimmed.toLowerCase().includes('placeholder') ||
    trimmed.toLowerCase().includes('will be added') ||
    trimmed.toLowerCase().includes('to be added') ||
    trimmed.toLowerCase().includes('example.com')
  ) {
    return false;
  }
  // Standard RFC-compliant email structure verification
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
};

/**
 * Generates a clean tel: URI for phone dialers.
 * Strips formatting spaces, dashes, and parentheses while preserving the leading '+' sign.
 */
export const formatTelLink = (phone?: string | null): string => {
  if (!phone) return 'tel:+919820142678';
  const cleaned = phone.replace(/[^0-9+]/g, '');
  return `tel:${cleaned}`;
};
