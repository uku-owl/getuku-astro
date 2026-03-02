# Uku Website Migration Status

**From:** WordPress (getuku.com)  
**To:** Astro + Vercel  
**Started:** March 1, 2026  
**Last Updated:** March 2, 2026  

---

## 🎯 Project Goal

Migrate getuku.com from WordPress to Astro.build for:
- ⚡ Maximum performance (static site generation)
- 🌍 Multi-language support (EN, ET, DA)
- 🎨 Modern design with AI-first approach
- 📈 SEO preservation (301 redirects, exact URLs)

---

## ✅ What's Done

### 1. Foundation
- [x] Galaxy theme installed (Astro 5.14.5 + Tailwind CSS 4.1.14)
- [x] i18n configured (English default, Estonian, Danish)
- [x] Keystatic CMS removed (static generation preferred)
- [x] Git repository initialized with proper commits
- [x] Dev server running at http://localhost:4321

### 2. Branding
- [x] **Colors:**
  - Primary: `#251D35` (dark purple)
  - Secondary: `#5B5DE4` (blue-purple)
  - Accent: `#FFCC00` (yellow)
- [x] **Logo:** Uku SVG (`public/images/logo.svg`)
- [x] **Favicon:** Uku brand
- [x] **Typography:** Clean hierarchy
- [x] **Dark mode:** Full support with proper contrast

### 3. Homepage (Complete - 12 sections)

#### Hero Section
- H1: "Get work done on time, billed & paid"
- Subheadline with stats (12 hours saved, 23.5% profit increase)
- Social proof badges (G2 4.7, Capterra 4.8, GetApp 4.8) with yellow stars
- CTA buttons: "Try for FREE" (yellow) + "Book a Demo" (blue)
- Video link: "See how Uku works" (YouTube)
- Hero dashboard image (sharp, no play button overlay)
- Glow effect background (no grid)

#### Logo Cloud
- 8 client logos (uniform size, colorful)
- Leinonen, Baker Tilly, Sandgrav, Grow, Numeri, CHK, Robby & Bobby, 1office

#### Testimonials (First section)
- 3 testimonials with real photos
- Thomas M. (Sandgrav Solutions)
- Annika R. (Aaron's Accounting Services)
- Jaanus K. (Leinonen Estonia)

#### Why Uku
- 4 feature blocks with real screenshots
- Task management, Billing, Automation, Analytics

#### Feature Grid
- 9 features (minimalist design, bullet points)
- CRM, Time-tracking, Communication, Analysis, Automation, Projects, Billing, Client Portal, Integrations
- Mission statement: "Freedom to do less" with gradient

#### Benefits
- 6 benefits with round icons
- Setup, Import/Export, Customization, Onboarding, Workload overview, Profit optimization

#### Languages
- 12 languages with flag emojis
- EN, DE, ES, DK, SE, FI, PL, BG, UA, LT, LV, EE

#### Onboarding Steps
- 5 numbered steps (Book demo → Setup → Add team → Import → Start work)

#### Support Testimonial
- Mart Nõmper (Rödl & Partner) with photo

#### G2 Showcase
- 4 platform logos with star ratings
- G2, Capterra, GetApp, Crowd

#### G2 Ratings (in Testimonials section)
- 9.5 Ease of Use
- 9.7 Quality of Support
- 8.9 Ease of Setup

#### Case Studies
- 3 case studies with people images
- Baltic Assist, Alpaca Office, Entro

#### CTA Final
- Rain's founder quote with photo
- "Let's create a dream..."

#### Footer
- All sections: Product, Services, Resources, About, Contact
- Trust badges: SOC 2 logo + 256-bit encryption
- Copyright notice

### 4. Assets Downloaded (20+ files)

#### Images (`public/images/`)
- `logo.svg` - Uku logo
- `hero-dashboard.png` - Main hero image (1800px, quality 100)

#### Client Logos (`public/images/clients/`)
- leinonen.png
- bakertilly.png
- sandgrav.png
- grow.svg
- numeri.svg
- chk.svg
- robby-bobby.png
- 1office.svg

#### Feature Screenshots (`public/images/features/`)
- task-management.png
- billing.png
- automation.png
- analytics.png

#### Testimonials (`public/images/testimonials/`)
- thomas.png
- annika.jpg
- jaanus.png

#### Case Studies (`public/images/case-studies/`)
- baltic-assist.png
- alpaca.png
- entro.png
- sandgrav.png

#### Misc (`public/images/misc/`)
- mart-nomper.jpg
- rain-founder.jpg
- soc2-logo.svg

#### G2 Badges (`public/images/g2/`)
- g2-logo.svg
- capterra.svg
- getapp.svg
- crowd-logo.svg

### 5. Navigation
- Compact left-aligned menu
- 3-column Product megamenu (Features | Features | Integrations)
- Separated right-side CTAs
- Hover effects with #5B5DE4
- Whitespace-nowrap (no menu wrapping)

### 6. Blog Setup
- Structure: `src/data/blog/[locale]/[slug]/index.mdx`
- Sample article: "How to Price Accounting Services" (`/blog/how-to-price-accounting-services`)
- Categories: Accountancy Firm Management, Guides
- heroImage.png support

### 7. Technical Configuration
- **astro.config.mjs:** Site URL set to https://getuku.com
- **i18n:** EN (default), ET, DA with proper routing
- **Tailwind:** Custom color scheme applied
- **Buttons:** Accent (yellow + black text), Secondary (blue + white text)
- **Dark mode:** Darker background (oklch), proper card contrast

---

## 🚧 In Progress / TODO

### High Priority
1. **Sticky "Try for FREE" CTA in header** - Primary CTA needs to be always visible
2. **G2/Capterra visual treatment** - Yellow stars + logos + text (not just cards)
3. **Visual consistency** - Light and dark mode should feel similar
4. **Deployment to Vercel** - Currently using Cloudflare Tunnel for preview

### Medium Priority
5. **Feature pages** (9 pages):
   - /client-management
   - /time-tracking
   - /automated-billing
   - /workflow-automation
   - /accounting-project-management
   - /team-collaboration
   - /business-analytics
   - /client-portal
   - /integrations

6. **Pricing page** (/pricing)
7. **Case studies pages** (3 pages):
   - Baltic Assist
   - Alpaca Office
   - Entro
8. **Services pages** (TBD from WordPress)
9. **Remaining blog articles** (~150-200 from WordPress)

### Low Priority
10. **Webinars migration** (~40 webinars)
11. **Templates migration** (~11 templates)
12. **301 Redirects** (WordPress → Astro URLs)
13. **Sitemap & robots.txt**
14. **Performance optimization** (image lazy loading, code splitting)

---

## 📊 Migration Stats

- **Total pages:** ~280-330 estimated
  - Blog articles: 150-200
  - Static pages: ~40
  - Case studies: ~40
  - Webinars: ~40
  - Templates: ~11
- **Completed:** Homepage (1 page) + 1 blog article
- **Progress:** ~1% complete

---

## 🎨 Design Tokens

### Colors
```css
--color-primary-900: #251D35;  /* Dark purple */
--color-secondary-500: #5B5DE4; /* Blue-purple */
--color-accent: #FFCC00;        /* Yellow */
```

### Typography
- **H1:** text-4xl md:text-5xl lg:text-6xl (Hero)
- **H2:** text-3xl md:text-4xl (Section titles)
- **H3:** text-xl md:text-2xl (Sub-sections)
- **Body:** text-base md:text-lg
- **Small:** text-sm

### Spacing
- **Sections:** py-24 md:py-32
- **Containers:** site-container (max-w-7xl)
- **Gaps:** gap-8 (standard), gap-12 (large)

### Components
- **Buttons:** Rounded, bold, with hover effects
- **Cards:** Rounded-xl, subtle borders, shadow on hover
- **Images:** Rounded-2xl for features, rounded-full for avatars

---

## 🛠 Tech Stack

- **Framework:** Astro 5.14.5
- **Styling:** Tailwind CSS 4.1.14
- **Icons:** Tabler Icons (59 icons available)
- **i18n:** Built-in Astro i18n
- **Hosting:** Vercel (planned)
- **Domain:** getuku.com

---

## 📂 File Structure

```
getuku-astro/
├── public/
│   ├── images/
│   │   ├── clients/         # 8 client logos
│   │   ├── features/        # 4 feature screenshots
│   │   ├── testimonials/    # 3 testimonial photos
│   │   ├── case-studies/    # 4 case study images
│   │   ├── misc/            # Misc images (founder, SOC 2, etc.)
│   │   └── g2/              # G2 platform badges
│   ├── logo.svg
│   └── favicon/
├── src/
│   ├── components/
│   │   ├── Hero/            # HeroUkuMain.astro
│   │   ├── LogoCloud/       # LogoCloudClients.astro
│   │   ├── Testimonials/    # TestimonialsUku, SupportTestimonial, G2Showcase
│   │   ├── Feature/         # WhyUku, FeatureGridUku, Benefits, Languages, OnboardingSteps
│   │   ├── CaseStudies/     # CaseStudiesGrid.astro
│   │   ├── Cta/             # CtaUku.astro
│   │   ├── Footer/          # FooterUku.astro
│   │   ├── Nav/             # Nav.astro (with megamenu)
│   │   └── Button/          # Button.astro
│   ├── pages/
│   │   └── index.astro      # Homepage
│   ├── data/
│   │   └── blog/
│   │       └── en/
│   │           └── how-to-price-accounting-services/
│   ├── config/
│   │   └── en/
│   │       ├── siteData.json.ts
│   │       └── navData.json.ts
│   ├── styles/
│   │   ├── global.css       # Dark mode config
│   │   ├── buttons.css      # Button variants
│   │   └── tailwind-theme.css # Color tokens
│   └── assets/
│       └── images/
│           └── hero-dashboard.png
└── astro.config.mjs
```

---

## 🔗 URLs

- **Live site (WordPress):** https://getuku.com
- **Staging (Cloudflare Tunnel):** https://lion-circles-chosen-words.trycloudflare.com
- **Local dev:** http://localhost:4321
- **GitHub:** https://github.com/uku-owl/getuku-astro

---

## 🐛 Known Issues

1. **Dark mode glow effect** - Needs to be softer (currently fixed)
2. **Client logos dark mode** - Using brightness/contrast instead of invert
3. **404 errors** - Feature pages linked but not created yet
4. **API cost spike** - Session hit 50€ limit (needs investigation)

---

## 👤 Team

- **Project Lead:** Rain Allikvee (Uku CEO & Founder)
- **Original Developer:** Agent-1 (OpenClaw)
- **Handoff Date:** March 2, 2026
- **Communication:** Slack (#agent-1-m1pro32)

---

## 📝 Rain's Key Feedback

### What Rain Values:
- **Visual impact over technical correctness** - Design must evoke emotion
- **Primary CTA prominence** - "Try for FREE" must be visible everywhere
- **Consistency** - Light and dark mode should feel similar
- **Authenticity** - Real images, real testimonials, no stock photos
- **Speed** - Ship first, iterate later

### Design Philosophy:
- **Basecamp-inspired:** Direct, honest, no hype
- **Grade 5-7 reading level:** Simple words, clear ideas
- **No fluff:** Short sentences, no corporate speak
- **Bold opinions:** Confident, not salesy

---

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📞 Contact

- **Email:** hello@getuku.com
- **Phone:** +372 56 717 215
- **Company:** Artify OÜ
- **Website:** getuku.com

---

**Last commit:** `d55c55c - Fix dark mode: darker background, better card contrast, visible buttons`  
**Total commits:** 6 (all Uku-specific work)  
**Time invested:** ~12 hours (March 1-2, 2026)
