import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// Derive correct base path when deployed to GitHub Pages; defaults to "/" for local dev.
const repoName = process.env.GITHUB_REPOSITORY?.split('/').pop() ?? '';

// https://vite.dev/config/
export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
  plugins: [tailwindcss(), react()],
})
