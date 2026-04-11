# 🚀 Dev Portfolio — Open Source, Config-Driven Portfolio Template

A modern, performant, and fully customizable **developer portfolio** built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Motion**. Clone it, edit a few config files, and deploy your own stunning portfolio in minutes — **zero component code changes required**.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Features

- ⚡ **Next.js 16** with App Router and React 19
- 🎨 **Tailwind CSS v4** for responsive, modern styling
- 🧩 **100% config-driven** — all personal data lives in `src/config/`
- 🔍 **SEO-ready** — auto-generated metadata, Open Graph, Twitter Cards, and canonical URLs
- 🎬 **Smooth animations** via Motion
- 📱 **Fully responsive** — mobile, tablet, and desktop
- 🌙 **Dark mode** support
- 📊 **Analytics-ready** with Vercel Analytics

---

## 🛠️ Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm run dev

# 4. Build for production
pnpm run build
```

---

## 📝 Configuration

All your personal data lives in **`src/config/`**. Edit these files and the portfolio updates automatically — no need to touch any component code.

| # | Config File | What It Does |
|---|-------------|-------------|
| 1 | `About.config.tsx` | Your name, profile photo, roles, and email |
| 2 | `BasicInformation.config.tsx` | Hero tagline and short bio |
| 3 | `Experience.config.tsx` | Work experience entries (company, role, dates, description, tech stack) |
| 4 | `Project.config.tsx` | Projects with screenshots, descriptions, GitHub & live links |
| 5 | `Technology.config.tsx` | Your skills and tech stack displayed on the homepage |
| 6 | `SocialLinks.config.tsx` | Social media links (X, LinkedIn, GitHub, Instagram, email) |
| 7 | `Contact.config.tsx` | Contact form labels, placeholders, and messages |
| 8 | `Resume.config.tsx` | Link to your hosted resume (Google Drive, etc.) |
| 9 | `Book.config.tsx` | Favourite books grouped by category |
| 10 | `Movies.config.tsx` | Favourite movies with IMDb links |
| 11 | `Gear.config.tsx` | Devices and tools you use daily |
| 12 | `Craft.config.tsx` | Craft section links (Gears, Books, Movies pages) |
| 13 | `Navbar.config.tsx` | Navigation bar items and routes |
| 14 | `Footer.config.tsx` | Footer navigation links and social icons |
| 15 | `Meta.config.tsx` | SEO metadata, Open Graph, and Twitter Cards for every page |

> All config types are defined in `src/types/config.ts` — your editor will auto-complete every field.

---

## 🖼️ Images

Place all images in the **`/public`** directory and reference them with a leading `/`:

- `public/About/` — Profile photo
- `public/logos/` — Company logos
- `public/project/` — Project screenshots
- `public/meta/` — Open Graph images

---

## 🌐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_URL=https://your-domain.com
```

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Motion |
| UI | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Analytics | Vercel Analytics |
| Theming | next-themes |

---

## 🤝 Contributing

1. **Fork** this repository
2. Create a feature branch: `git checkout -b feature/my-improvement`
3. Commit your changes: `git commit -m "feat: add new section"`
4. Push and open a **Pull Request**

All contributions are welcome!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**⭐ If you found this helpful, please give it a star!**
