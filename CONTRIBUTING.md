# 🤝 Contributing

Thanks for your interest in contributing to this project! Whether it's a bug fix, new feature, or documentation improvement — all contributions are welcome.

---

## 🚀 Getting Started

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
3. **Install dependencies:**
   ```bash
   pnpm install
   ```
4. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Start the dev server:**
   ```bash
   pnpm run dev
   ```

---

## 📂 Project Structure

```
src/
├── app/            # Next.js App Router pages
├── components/     # Reusable UI components
├── config/         # Config files (personal data goes here)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── types/          # TypeScript interfaces
```

---

## 📝 What Can You Contribute?

- 🐛 **Bug Fixes** — Found something broken? Fix it and open a PR
- ✨ **New Sections** — Add new portfolio sections (e.g., Certifications, Testimonials)
- 🎨 **Design Improvements** — Better UI, animations, or responsive layouts
- 🧩 **New Config Options** — Make more things customizable through config
- 📖 **Documentation** — Improve README, add examples, or fix typos
- ♿ **Accessibility** — Improve keyboard navigation, screen reader support, etc.

---

## ✅ Before Submitting a PR

- [ ] Run `pnpm run build` to make sure the project builds without errors
- [ ] Run `pnpm run lint` to check for linting issues
- [ ] Test your changes locally with `pnpm run dev`
- [ ] Keep your PR focused — one feature or fix per PR
- [ ] Write clear commit messages (e.g., `feat: add certifications section`, `fix: navbar mobile menu`)

---

## 💬 Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

| Prefix     | Usage                          |
| ---------- | ------------------------------ |
| `feat:`    | New feature                    |
| `fix:`     | Bug fix                        |
| `docs:`    | Documentation changes          |
| `style:`   | Formatting, no code change     |
| `refactor:`| Code restructuring             |
| `chore:`   | Build tools, dependencies, etc.|

---

## 🔀 Pull Request Process

1. Push your branch to your fork
2. Open a Pull Request against the `main` branch
3. Describe what your PR does and why
4. Wait for review — feedback or approval will follow

---

## 🙏 Code of Conduct

Be respectful, inclusive, and constructive. We're all here to learn and build cool things together.

---

**Thank you for contributing! ⭐**
