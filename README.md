# Mock Test / Practice Site — Unit I & Unit II

A self-contained practice site covering two question banks:

- **Unit I — Sets, Relations & Functions**: 100 multiple-choice questions
  across 25 topics, with Exam mode (timed, answers hidden) and Practice
  mode (instant feedback).
- **Unit II — Counting & Recurrence**: 140 questions across 8 topics,
  presented as self-paced flashcards — reveal the answer, then grade
  yourself.

Both units share the same full/quick/topic-wise practice options,
scoring, topic breakdown, and a 3D Venn-diagram hero built with Three.js.

## Files

- `index.html` — page structure and the embedded question bank (both units)
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
