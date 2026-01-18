// Site configuration using environment variables
// All public environment variables are prefixed with PUBLIC_

export const siteConfig = {
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.avengh.com',
  name: import.meta.env.PUBLIC_SITE_NAME || 'Avengh',
  companyName: import.meta.env.PUBLIC_COMPANY_NAME || 'Avengh (Avengers Fist)',

  contact: {
    email: import.meta.env.PUBLIC_CONTACT_EMAIL,
    phone: import.meta.env.PUBLIC_CONTACT_PHONE,
    location: import.meta.env.PUBLIC_CONTACT_LOCATION,
  },

  social: {
    linkedin: import.meta.env.PUBLIC_LINKEDIN_URL,
    github: import.meta.env.PUBLIC_GITHUB_URL,
    whatsapp: import.meta.env.PUBLIC_WHATSAPP_NUMBER,
  },

  form: {
    action: import.meta.env.PUBLIC_FORM_ACTION,
  },

  seo: {
    defaultOGImage: import.meta.env.PUBLIC_DEFAULT_OG_IMAGE || '/assets/img/social-preview.png',
  },
} as const;

export type SiteConfig = typeof siteConfig;
