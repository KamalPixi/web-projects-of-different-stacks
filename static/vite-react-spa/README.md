# Vite + React Static SPA

Modern built Single Page Application (SPA) designed to test static site hosting platforms with build steps and client-side routing.

- **Stack**: Static (Vite + React)
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Key Platform Testing Features**:
  - Tests asset bundling and cache-busting filenames (`dist/assets/index-[hash].js`)
  - Tests SPA client-side routing fallback / rewrite rules (`/*` -> `/index.html`)
  - Tests fast static asset delivery via CDN / static file server
