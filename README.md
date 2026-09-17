# Mock Test Site — Unit I, Unit II, Unit III & Unit IV

A self-contained mock test site covering four question banks, all using
the same multiple-choice test mechanic:

- **Unit I — Sets, Relations & Functions**: 100 questions across 25 topics.
- **Unit II — Counting & Recurrence**: 140 questions across 8 topics.
- **Unit III — Matrix Algebra**: 100 questions across 10 topics.
- **Unit IV — Elementary Graph Theory**: 148 questions across 15 topics.

All units share Exam mode (timed, answers hidden) and Practice mode
(instant feedback), full/quick/topic-wise practice options, scoring, a
topic-by-topic breakdown, and a full 3D interface built with Three.js —
a drifting 3D background, tilting 3D cards, a rotatable 3D diagram that
illustrates the concept behind each question's topic (Venn diagrams,
function mappings, matrices, graphs, recursion trees, Tower of Hanoi,
pigeonhole boxes, intersecting planes, function curves), and a 3D
topic-performance chart on the results screen.

## Files

- `index.html` — page structure (all units)
- `questions.js` — the embedded question bank (all units)
- `style.css` — all styling
- `app.js` — app logic (test flow, scoring, review, keyboard shortcuts)
- `three.min.js` — vendored Three.js r128
- `three-scene.js` — the shared 3D viewer, topic-aware explanation diagrams, results chart, background, and card-tilt interaction
- `security.js` — clickjacking guard (see Security below)
- `_headers` — HTTP security headers for hosts that support them (Netlify, Cloudflare Pages); ignored by GitHub Pages

No build step, no dependencies to install — it's plain HTML/CSS/JS.

## Security

- A strict `Content-Security-Policy` (script/style locked to same-origin,
  everything else denied) and `Referrer-Policy: no-referrer` are set in
  `index.html`. Every dynamic string written to the DOM is HTML-escaped.
- `security.js` best-effort-busts the page out of a third-party iframe,
  since GitHub Pages can't send an `X-Frame-Options` header and the
  `<meta>` form of CSP ignores `frame-ancestors`.
- If you deploy somewhere that supports custom HTTP headers (Netlify,
  Cloudflare Pages, Vercel with a rewrite), the included `_headers` file
  adds the header-only protections (real `frame-ancestors`, `nosniff`,
  a locked-down `Permissions-Policy`) on top of the above.

## Deploy on GitHub Pages

1. Create a new repository and push these four files to its root
   (or to a `/docs` folder — either works, see step 2).
2. On GitHub: **Settings → Pages → Build and deployment → Source**,
   choose the branch (e.g. `main`) and folder (`/root` or `/docs`).
3. Save. GitHub gives you a URL like
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Run locally

Just open `index.html` in a browser — no server required.
