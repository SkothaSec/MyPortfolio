// Prefix asset paths with the Vite base so they resolve on GitHub Pages.
export const withBase = (path = '') => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
