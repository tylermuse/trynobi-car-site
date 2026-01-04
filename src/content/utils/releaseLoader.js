// Eagerly import per-day JSON release files from ../releases.
// Shape per file:
// {
//   "slug": "2025-12-17",
//   "title": "2025-12-17 deployments",
//   "date": "2025-12-17",
//   "highlights": ["bullet", ...]
// }

const modules = import.meta.glob("../releases/*.json", { eager: true });

export const releaseNotes = Object.values(modules)
  .map((mod) => ({
    slug: mod.slug,
    title: mod.title,
    date: mod.date,
    highlights: mod.highlights || [],
  }))
  .filter((item) => item.slug && item.date && item.title)
  .sort((a, b) => new Date(b.date) - new Date(a.date));
