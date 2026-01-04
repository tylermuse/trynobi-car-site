// Centralized posts registry built from MDX files in ../posts.
// Each MDX file should export `meta` and a default component.
const modules = import.meta.glob('../posts/*.mdx', { eager: true });

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = mod.meta?.slug || path.split('/').pop().replace(/\.mdx?$/, '');
    return {
      slug,
      meta: {
        title: mod.meta?.title || slug,
        date: mod.meta?.date || new Date().toISOString(),
        excerpt: mod.meta?.excerpt || '',
        tags: mod.meta?.tags || [],
        author: mod.meta?.author || 'Nobi Team',
        heroImage: mod.meta?.heroImage || null, // can be imported asset or URL string
        featured: Boolean(mod.meta?.featured),
        draft: Boolean(mod.meta?.draft),
      },
      Component: mod.default,
    };
  })
  .filter((p) => !p.meta.draft)
  .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);
