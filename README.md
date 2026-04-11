# Portfolio Project

This repository is an open‑source portfolio template. Anyone can fork or clone it and customize it to showcase their own work.

## How to Edit the Portfolio

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```
2. **Install dependencies** (using `pnpm` as the project uses it)
   ```bash
   pnpm install
   ```
3. **Run the development server**
   ```bash
   pnpm run dev
   ```
   The site will be available at `http://localhost:3000`.
4. **Edit content**
   - **Projects** – modify `src/components/pages/Project/ProjectsCard.tsx` and related config files.
   - **Experience** – edit `src/components/pages/Experience/ExperienceHero.tsx`.
   - **Work** – update `src/components/pages/work/WorkCard.tsx`.
   - **Other sections** – look for components under `src/components/pages/`.
5. **Add your own sections**
   - Create a new page component in `src/pages/`.
   - Add navigation links in the `src/components/common/NavBar.tsx` (or similar) component.
   - Update the TypeScript types in `src/types/` if needed.
6. **Deploy**
   - The project can be deployed to any static‑site host (Vercel, Netlify, etc.).
   - Build the production bundle:
     ```bash
     pnpm run build
     ```
   - Follow the host’s instructions to deploy the `dist/` folder.

## Creating Your Own Portfolio

- **Fork** this repository on GitHub.
- Follow the steps above to customize the content and styling.
- Push your changes to your fork and optionally open a pull request to contribute back.

## Contributing

Feel free to open issues or submit pull requests if you find bugs or want to improve the template.

---

*This README was generated to help contributors quickly get started with customizing the portfolio.*
