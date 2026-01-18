# Avengh (Avengers Fist)

The official website for Avengh, built with [Astro](https://astro.build).

## 🚀 Overview

Avengh is a modern, performance-focused corporate website showcasing services, portfolio, and company information. The site is statically generated for optimal speed and SEO.

## ✨ Features

- **Modern Tech Stack**: Built with Astro 5 and TypeScript.
- **Responsive Design**: Mobile-first approach with custom CSS.
- **Performance**: Zero-JS by default (where possible) for fast page loads.
- **Components**:
    - Hero Section
    - Solutions & Services
    - Portfolio & Case Studies
    - Company Timeline
    - Team Profiles
    - FAQ & Contact Forms

## 📂 Project Structure

```text
/
├── public/             # Static assets (images, icons, etc.)
├── src/
│   ├── components/     # Reusable UI components (Hero, Team, etc.)
│   ├── config/         # Site configuration (site.ts)
│   ├── layouts/        # Page layouts (Layout.astro)
│   ├── pages/          # File-based routing (index.astro, 404.astro)
│   ├── scripts/        # Client-side JavaScript
│   ├── styles/         # Global styles (accessibility, transitions)
│   └── types/          # TypeScript type definitions
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build

Build the project for production:

```bash
npm run build
```

The output will be in the `dist/` folder.

## ⚙️ Configuration

Site configuration is managed in `src/config/site.ts`.

Environment variables are supported (prefixed with `PUBLIC_`). See `.env.example` (if available) or `src/config/site.ts` for reference.

- `PUBLIC_SITE_URL`
- `PUBLIC_SITE_NAME`
- `PUBLIC_COMPANY_NAME`
- `PUBLIC_CONTACT_EMAIL`
- `PUBLIC_CONTACT_PHONE`
- `PUBLIC_CONTACT_LOCATION`
- `PUBLIC_LINKEDIN_URL`
- `PUBLIC_GITHUB_URL`
- `PUBLIC_WHATSAPP_NUMBER`

## 📝 License

[Add License Information Here]