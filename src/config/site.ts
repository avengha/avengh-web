// Site configuration using environment variables
// All public environment variables are prefixed with PUBLIC_

export const siteConfig = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.avengh.com',
  name: import.meta.env.PUBLIC_SITE_NAME || 'Avengh',
  companyName: import.meta.env.PUBLIC_COMPANY_NAME || 'Avengh (Avengers Fist)',

  contact: {
    email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'info@avengh.com',
    phone: import.meta.env.PUBLIC_CONTACT_PHONE || '+233 0000 00000',
    location: import.meta.env.PUBLIC_CONTACT_LOCATION || '',
  },

  social: {
    linkedin: import.meta.env.PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/avengh',
    github: import.meta.env.PUBLIC_GITHUB_URL || 'https://github.com/avengha',
    whatsapp: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '000000000000',
  },

  form: {
    action: import.meta.env.PUBLIC_FORM_ACTION || 'https://formspree.io/f/mjkejvny',
  },

  seo: {
    defaultOGImage: import.meta.env.PUBLIC_DEFAULT_OG_IMAGE || '/assets/img/social-preview.png',
  },
} as const;

export type SiteConfig = typeof siteConfig;
