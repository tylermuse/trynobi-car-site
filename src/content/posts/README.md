# Adding blog posts (MDX)

Each article lives in this folder as an `.mdx` file. We use an exported `meta` object (instead of YAML frontmatter) to keep metadata next to the content.

## Required `meta` fields
- `title`: Display title.
- `slug`: URL slug (`/blog/<slug>`). Use a clean slug without dates or spaces; file names can include dates for your own sorting.
- `date`: ISO date (`YYYY-MM-DD`).
- `excerpt`: 1–2 sentence summary.
- `featured`: `true` to prioritize on the homepage (shown before others; homepage shows up to 3 posts total).

## Optional `meta` fields
- `tags`: Array of strings.
- `author`: Defaults to `Nobi Team`.
- `heroImage`: URL or imported asset for the card/hero image.
- `draft`: `true` to hide from listings.

## Example
```mdx
export const meta = {
  title: "How to launch Nobi on your site in under 30 minutes",
  slug: "launch-nobi-fast",
  date: "2025-12-10",
  excerpt: "Quick start guide for enabling Nobi on search, PLP, and PDP.",
  tags: ["implementation", "shopify"],
  heroImage: "/media/your-image.png",
};

## Heading
Your markdown content here…
```

## File naming
- Use any filename (e.g., `2025-12-15-conversational-search.mdx`); the loader ignores the filename for the slug.
- Keep one post per file.

## Notes
- Links inside posts open in a new tab automatically (handled globally).
- Set `slug` explicitly to avoid date prefixes in URLs.
