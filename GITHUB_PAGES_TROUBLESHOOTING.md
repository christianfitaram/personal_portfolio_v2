# GitHub Pages Build Troubleshooting (Next.js 15 + Tailwind 4)

This document summarizes the CI errors that happened when deploying to GitHub Pages and how they were fixed.

## 1) Warning: `No build cache found`

### Message

`No build cache found. Please configure build caching for faster rebuilds.`

### Meaning

This is only a performance warning from Next.js.  
It does **not** fail the build.

### Status

No action required for correctness.

---

## 2) Error: missing `lightningcss` Linux binary

### Message

`Error: Cannot find module '../lightningcss.linux-x64-gnu.node'`

### Root cause

`lightningcss` uses platform-specific native binaries.  
In GitHub Actions (Linux runner), that binary was not present in `node_modules`.

### Fix applied

1. Force optional dependency installation in CI (`npm ci --include=optional`).
2. Add explicit CI fallback install step:
   - `npm install --no-save lightningcss-linux-x64-gnu@$LIGHTNINGCSS_VERSION`
3. Add `lightningcss-linux-x64-gnu` to `optionalDependencies` in `package.json`.
4. Mirror this in `package-lock.json` root metadata.

---

## 3) Error: missing Tailwind oxide Linux binary

### Message

`Error: Cannot find module '@tailwindcss/oxide-linux-x64-gnu'`

### Root cause

Tailwind v4 also depends on a platform-specific native package (`@tailwindcss/oxide-*`).  
Linux runner did not have the expected binary package installed.

### Fix applied

1. Add explicit CI fallback install step:
   - `npm install --no-save @tailwindcss/oxide-linux-x64-gnu@$OXIDE_VERSION`
2. Add `@tailwindcss/oxide-linux-x64-gnu` to `optionalDependencies` in `package.json`.
3. Mirror this in `package-lock.json` root metadata.

---

## 4) Extra hardening added in workflow

To avoid runner/environment differences that skip optional packages, the build job sets:

- `NPM_CONFIG_INCLUDE=optional`
- `NPM_CONFIG_OPTIONAL=true`

This makes optional native binaries much more reliable on GitHub-hosted Linux runners.

---

## Final Result

After these changes:

- `next build` succeeds in CI.
- Static export (`out/`) is generated.
- GitHub Pages deployment completes successfully.

---

## Files changed

- `.github/workflows/nextjs.yml`
- `package.json`
- `package-lock.json`
- `next.config.ts` (static export + Pages base path setup)
- `src/context/LanguageContext.tsx` (base-path-aware locale fetch)
- `src/lib/withBasePath.ts` (helper for repo subpath support)
- `src/app/components/Experience.tsx` (base-path-aware local image URLs)
- `src/app/components/Certifications.tsx` (base-path-aware local image URLs)
