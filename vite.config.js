// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeSlug from 'rehype-slug'

export default defineConfig({
  plugins: [
    react(),
    {
      ...mdx({
        remarkPlugins: [remarkFrontmatter],
        rehypePlugins: [rehypeSlug],
      }),
      enforce: 'pre',
    },
  ],
})
