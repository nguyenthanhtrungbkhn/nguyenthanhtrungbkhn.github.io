# Nguyen Thanh Trung Academic Website

Professional personal academic website for Nguyen Thanh Trung, Ph.D., built with Next.js, TypeScript, and Tailwind CSS.

## Install Dependencies

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build for Production

```bash
npm run build
```

The project is configured with Next.js static export. Production files are generated in the `out/` directory and can be served by GitHub Pages.

## Start the Production Server

```bash
npm run start
```

## Deploy to GitHub Pages

This site is configured for the user-site URL:

```text
https://nguyenthanhtrungbkhn.github.io/
```

Push the source code to the `main` branch of the `nguyenthanhtrungbkhn.github.io` repository. The GitHub Actions workflow in `.github/workflows/deploy.yml` will install dependencies, build the static site, and publish the `out/` directory to GitHub Pages.

In the repository settings, set Pages source to GitHub Actions.

## Update Site Content

Most academic content is stored in typed data files:

- `data/profile.ts` for profile, contact details, and external links
- `data/publications.ts` for publication entries and filters
- `data/projects.ts` for project cards
- `data/news.ts` for news archive items
- `data/teaching.ts` for courses and student project topics
- `data/services.ts` for academic service timeline entries
- `data/research.ts` for research directions
- `data/students.ts` for student and alumni placeholders

Edit these files to update the website without touching page layout code.
