# Security Rules

These apply to every file in this project, every session.

## Secrets and Credentials
- Never hardcode API keys, tokens, passwords, or secrets in any file
- All secrets live in `.env` — never anywhere else
- `.env` must be listed in `.gitignore` before the first commit
- Never commit or push `.env`
- If you detect an exposed secret anywhere in the codebase, stop and flag it immediately

## Input Validation
- Validate all user input at system boundaries (forms, API endpoints, query params)
- Never trust user-provided data without sanitization
- Sanitize before rendering to the DOM to prevent XSS
- Use parameterized queries — never string-interpolate SQL

## Dependencies
- Do not install packages without explicit approval
- Review any new package before adding it to `package.json` or `requirements.txt`

## Authentication and Authorization
- Never roll custom auth — use a battle-tested library or service
- Check permissions server-side on every protected route
- Expire sessions; do not store sensitive data in `localStorage`

## Network and APIs
- Always use HTTPS for external calls — never HTTP
- Validate and reject unexpected shapes from external API responses
- Never log full request/response bodies in production if they may contain secrets
