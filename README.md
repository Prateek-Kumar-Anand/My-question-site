# Mock Test Site — Unit I, Unit II, Unit III & Unit IV

A self-contained mock test site covering four question banks, all using
the same multiple-choice test mechanic:

- **Unit I — Sets, Relations & Functions**: 100 questions across 25 topics.
- **Unit II — Counting & Recurrence**: 140 questions across 8 topics.
- **Unit III — Matrix Algebra**: 100 questions across 10 topics.
- **Unit IV — Elementary Graph Theory**: 148 questions across 15 topics.

All units share Exam mode (timed, answers hidden) and Practice mode
(instant feedback), full/quick/topic-wise practice options, scoring, a
topic-by-topic breakdown, and a 3D Venn-diagram hero built with Three.js.

## Files

- `index.html` — page structure (all units)
- `questions.js` — the embedded question bank (all units)
- `style.css` — all styling
- `app.js` — app logic (test flow, scoring, review, keyboard shortcuts)
- `three.min.js` — vendored Three.js r128 (used for the interactive hero)

No build step, no dependencies to install — it's plain HTML/CSS/JS.

## Deploy on GitHub Pages

1. Create a new repository and push these four files to its root
   (or to a `/docs` folder — either works, see step 2).
2. On GitHub: **Settings → Pages → Build and deployment → Source**,
   choose the branch (e.g. `main`) and folder (`/root` or `/docs`).
3. Save. GitHub gives you a URL like
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Run locally

Just open `index.html` in a browser — no server required.
