# Release notes content

Two ways to keep this page updated:

1) **Manual (per-day JSON)**
   - Add a file in this folder named `<YYYY-MM-DD>.json`.
   - Shape:
     ```json
     {
       "slug": "2025-12-17",
       "title": "2025-12-17 deployments",
       "date": "2025-12-17",
       "highlights": [
         "Bullet one",
         "Bullet two"
       ]
     }
     ```
   - The loader sorts by `date` desc and renders title/date/bullets only.

2) **Auto-generate from product tags**
   - Requires the main code repo to live at `../code` relative to this site.
   - Run: `npm run refresh-releases`
   - The script:
     - Looks at the last 30 days of tags for prefixes `assistant-`, `api-`, `dashboard-`.
     - Diffs each tag against the previous tag of the same prefix to see what changed.
     - If `OPENAI_API_KEY` is set, asks the model (default `gpt-4o-mini`) to turn file changes into 2–3 feature-flavored bullets; otherwise falls back to file-list bullets.
     - Writes one JSON file per date into this folder, overwriting existing files for those dates.

Environment variables (optional):
- `OPENAI_API_KEY`: enable LLM summaries.
- `OPENAI_MODEL`: override model name (default `gpt-4o-mini`).

Notes:
- Only `title`, `date`, and `highlights` are used in the UI.
- Keep bullets concise and user-facing; avoid raw diffs where possible.
