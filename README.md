# Atharv Dev Singh - Developer Portfolio

A modern, highly-interactive developer portfolio and personal website built with Next.js, React 19, and Tailwind CSS. The portfolio is designed to be highly configurable, entirely data-driven, and optimized for performance and SEO.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router & Server Components)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** Custom CSS Animations and Framer Motion
- **Deployment:** [Vercel](https://vercel.com/)

## ✨ Key Features

- **Config-Driven Architecture:** All application data (metadata, socials, work experience, projects, gears) is modularized inside the `src/config/` directory. You can update the content without digging through dozens of React components.
- **Dynamic SEO & Sitemap:** Automatically generates optimal Metadata, Open Graph tags, Twitter cards, and a dynamic `sitemap.xml` for maximum discoverability.
- **Haptic Feedback:** Features native device vibration (Haptic Feedback) for supported mobile devices on button interactions.
- **Server and Client Components:** Strictly adheres to Next.js data-fetching and separation of concerns utilizing SSR/SSG.
- **Theme Toggling:** Built-in Dark/Light mode using `next-themes`.

## 📂 Project Structure

```bash
├── src/
│   ├── app/            # Next.js App Router (pages, layouts, sitemap, robots)
│   ├── components/     # Reusable UI components (Hero, Cards, Footer, Navbar)
│   ├── config/         # Centralized configuration data for the whole site
│   ├── hooks/          # Custom React hooks (e.g., use-haptic-feedback)
│   ├── types/          # Global TypeScript interfaces
│   └── lib/            # Utility functions
├── public/             # Static assets, Open Graph images
└── package.json
```

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js and a package manager like `npm`, `yarn`, or `pnpm` installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/atharvdsingh/atharv.git
   cd atharv
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or npm install / yarn install
   ```

3. **Set up Environment Variables (Optional)**
   Create a `.env.local` file in the root directory and add the following variable for accurate metadata generation locally (it automatically uses Vercel's URLs in production):
   ```env
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

4. **Run the Development Server**
   ```bash
   pnpm run dev
   # or npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Customization

To personalize the portfolio, navigate to `src/config/` and update the relevant configuration files:
* `Meta.config.tsx`: Global SEO and site metadata properties
* `About.config.tsx`: Name, profile image, email, short bio
* `SocialLinks.config.tsx`: URLs for GitHub, LinkedIn, X, email, etc.
* `Experience.config.tsx`: Your professional timeline
* `Project.config.tsx`: Your portfolio list
* `Gear.config.tsx`: Your hardware, software, and daily drivers

## 📄 License

This project is open-source and available to use for creating your personal portfolios. Feel free to fork!
