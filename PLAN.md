Proposed Plan:

1. Setup: Initialize a new Astro project in this directory (or a subfolder to keep things clean initially).
2. Asset Migration: Move your images and CSS to the new structure.
3. Componentization: Break your large index.html into reusable chunks:
  * Layout.astro (Head, SEO tags, global styles).
  * Hero.astro, Solutions.astro, Portfolio.astro, etc.
4. Logic Transfer: Port your main-scripts.js (animations, mobile menu, form handling) into the relevant components.
5. Pages: Recreate privacy.html, terms.html, and 404.html as Astro pages.
6. Cleanup: Remove the old Webpack configuration and dependencies.


Key Issues & Improvements Needed

🔴 Critical Issues

1. Navigation Broken on Non-Homepage
- Footer links like #portfolio, #case-studies won't work from /privacy or /terms
- Fix: Change all anchor links to use /#section-id format

2. Hardcoded SEO Meta Tags
- Layout.astro has hardcoded title/description for all pages
- Fix: Make Layout accept props for dynamic meta tags

3. Missing Site Configuration
- astro.config.mjs is empty - no site URL configured
- Fix: Add site URL for proper canonical URLs and sitemap generation

4. Large Image File
- /team/Joseph.jpg is 1.7MB - way too large for web
- Fix: Optimize or use Astro's Image component

🟡 Important Improvements

5. No Image Optimization
- Using plain <img> tags instead of Astro's <Image> component
- Missing lazy loading, responsive images, and format optimization

6. Limited Accessibility
- Only 4 aria-label attributes in entire codebase
- Missing semantic HTML improvements

7. No View Transitions
- Could add Astro's built-in view transitions for smoother navigation

8. Footer Dead Links
- Links to # (Technology Stack, Career Opportunities) go nowhere

🟢 Nice-to-Have Enhancements

9. Component Props
- Components are static - could accept props for reusability

10. TypeScript Types
- No interface definitions for component props

11. Environment Variables
- Site URL and other config should use env vars

12. Missing sitemap/robots.txt Configuration
- Files exist in public but not configured in astro.config.mjs

Would you like me to implement these fixes? I can prioritize them as:

1. High Priority: Navigation fixes, SEO props, site config, image optimization
2. Medium Priority: Astro Image component, view transitions, accessibility
3. Low Priority: TypeScript types, component props, env vars
