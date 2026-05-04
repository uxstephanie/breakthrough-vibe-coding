# CLAUDE.md — [Project Name]
## Design Rules (read these before generating any UI)
### Visual style - Brand: [Vpartneragent.io #272336ff + near-white | Stripe minimal | Linear dark mode | Notion warm | …] -
Mode: [light | dark | both with toggle] - Primary accent color: [#4a90e2ff or hex] - Secondary accent: [hex #ffd700ff] -
Background: [#FFFFFF | #F8FAFC | #0F172A | …] - Body text color: [hex]
### Typography - Display font: [Plus Jakarta Sans | Inter | DM Sans | system-ui] - Body font: [DM Sans | Inter
| system-ui] - Heading sizes: aggressive (H1 ~48px) | balanced (H1 ~32px) | restrained (H1 ~24px)
### Spacing & rhythm - 8px base grid (use multiples: 4, 8, 12, 16, 24, 32, 48, 64) - Card padding: 24px /
32px / 40px - Vertical rhythm: 8px between related elements, 24px between sections
### Components - Buttons: filled dark purple with subtle shadow, rounded 8px - Cards: white, 1px border
#E2E8F0, rounded 12px, soft shadow - Inputs: 1px border #E2E8F0, rounded 8px, 16px padding - No
gradient backgrounds. No abstract decorative shapes.
### What I want to feel - [Professional & calm | Playful & warm | Bold & confident | …] - [Reference site I
love: apple.com because it is so clean
### Hard "do not" list - Don't use Bootstrap or Material UI defaults - Don't generate stock-photo placeholders
— use real or skip - Don't use emoji as decorative bullets in app UI
## About This Project
[this project wants create a site where people can learn about our ai products and services

**Status:** In development

## Tech Stack
- Frontend: [e.g. React / Next.js]
- Backend: [e.g. Node.js (Express) / Python (FastAPI)]
- Database: [e.g. SQLite for MVP → PostgreSQL when scaling]
- Hosting: [e.g. Vercel / Railway / Render]

## Coding Style
- Indentation: 2 spaces
- Modules: ES modules (`import`/`export`) — not CommonJS
- Async: `async/await` — not `.then()` chains
- Naming: Descriptive; single letters only for loop counters
- Comments: Only when the WHY is non-obvious

## Project-Specific Rules
- [Add rules here as the build progresses]

## Hard Prohibitions
- No hardcoded API keys — use `.env`
- `.env` must be in `.gitignore` before the first commit
- Never commit `.env`
