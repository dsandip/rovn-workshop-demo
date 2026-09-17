# rovn-workshop-demo

A hands-on PromptQL workshop demo for **Rōvn**, mirroring their real shipping loop:

> issue → branch → AI implementation → tests → PR → human approval → merge → deploy → monitor

## What's here

- **Static site** (`index.html`, `styles.css`, `app.js`) — published to GitHub Pages on every merge to `main`.
- **Pages deploy workflow** (`.github/workflows/pages.yml`) — builds and deploys the site, stamping the live commit SHA + deploy time onto the page.
- **Issue → PromptQL bridge** (`.github/workflows/promptql-bridge.yml`) — on `issues: opened`, POSTs to a PromptQL room webhook to spin up the handling bot. *(wired once the room webhook URL is set)*

## The loop, concretely

1. Someone opens an **issue** ("bump the counter to N").
2. The bridge fires → a **PromptQL bot** picks it up.
3. The bot branches, makes the change, and opens a **PR**.
4. CI runs; a **human reviewer** approves.
5. **Merge to `main`** → Pages deploys → the change is live.

This repo is the workshop sandbox; the same wiring gets repointed to Rōvn's live project for the session.