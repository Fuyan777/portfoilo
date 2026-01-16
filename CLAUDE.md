# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Fuya Yamada (FuyanTech) built with Next.js 14, React 18, and TypeScript. The site is deployed to GitHub Pages using GitHub Actions.

## Essential Commands

### Development
```bash
npm run dev        # Start development server at http://localhost:3000
npm run build      # Create production build (outputs to ./out directory)
npm start          # Start production server
npm run lint       # Run ESLint checks
```

### Deployment
The site automatically deploys to GitHub Pages on push to `main` branch via `.github/workflows/nextjs.yml`. The GitHub Actions workflow handles the build and deployment process.

## Architecture

### App Structure
This is a Next.js 14 App Router project with the following structure:

- **`src/app/`** - App Router root directory
  - **`page.tsx`** - Main landing page that composes all sections
  - **`layout.tsx`** - Root layout with metadata and Inter font configuration
  - **`components/`** - All React components organized by feature

### Component Organization
Components are organized into two categories:

1. **Layout Components** (`src/app/components/`):
   - `Header/` - Navigation header with mobile menu
   - `Footer/` - Site footer

2. **Section Components** (`src/app/components/Section/`):
   - `KeyVisual/` - Hero section with video background
   - `NewsList/` - News/updates section
   - `WorksList/` - Portfolio works section
   - `ProductsList/` - Products showcase section
   - `Article/ArticleList` - Articles & speaker activities section
   - `Profile/` - Personal profile section
   - `Contact/` - Contact information section

3. **Shared Components** (`src/app/components/`):
   - `SectionHeader/` - Reusable section title component
   - `ViewAllButton/` - Reusable "View All" button component

### Styling
- Uses CSS Modules (`.module.css`) for component-scoped styling
- Each component has its own corresponding CSS module file
- Global styles defined in `src/app/globals.css`

### Key Technical Patterns

**Client Components:**
Components that use interactivity (useState, useEffect, useRef, event handlers) are marked with `"use client"` directive:
- `Header.tsx` - Uses useState for mobile menu toggle
- `KeyVisual.tsx` - Uses useRef and useEffect for video autoplay control

**Base Path Handling:**
The project uses `nextConfig.basePath` for GitHub Pages deployment. All public asset paths must use:
```typescript
import nextConfig from "path/to/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
// Then use: `${BASE_PATH}/asset.png`
```

**Section Navigation:**
Sections use ID-based anchor links (e.g., `#news`, `#works`, `#product`, `#article`, `#profile`, `#contact`) for in-page navigation from the Header menu.

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Module resolution: bundler

## Important Notes

- **Public Assets**: All images and videos are stored in `/public/` directory
- **Video Autoplay**: The KeyVisual component uses `useRef` with manual `.play()` call to ensure video autoplay works across browsers
- **GitHub Pages**: Site is configured for static export with GitHub Actions deployment
- **Metadata**: Site metadata (title, description) is configured in `src/app/layout.tsx`
