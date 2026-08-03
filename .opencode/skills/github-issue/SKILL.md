---
name: github-issue
description: Use when creating, editing, or reviewing GitHub issues for this repository. Covers the required structure, title conventions, labels, and markdown formatting so every issue is actionable and searchable.
---

# GitHub Issue Format

This project maintains a consistent format for GitHub issues so that bugs, feature
requests, and questions are actionable and searchable. Follow it when drafting an
issue, reviewing one, or turning a discussion into a task.

## Title

- Imperative or short noun phrase, e.g. `Save action fails on pages with iframes`
- Under ~72 characters where possible
- Do not use trailing punctuation (`.`, `,`), ticket numbers, or `[BUG]` style prefixes
- If it references a word/URL vocabulary concern, include the affected feature name
  (e.g. `Right-click save`, `Vocabulary list`, `Settings`, `Onboarding`)

## Body Structure

Start with a one-paragraph summary. Then use the sections below; only include
sections that apply — omit anything irrelevant rather than leaving `N/A` placeholders.

### For bug reports

```markdown
## Summary
What is broken, in one or two sentences.

## Steps to Reproduce
1. Open a page (e.g. example URL)
2. Highlight a word and right-click -> Save
3. ...

## Expected Behavior
What should happen.

## Actual Behavior
What actually happens (paste error message / screenshot).

## Environment
- Chrome version:
- Extension version (from chrome://extensions or `package.json`):
- OS:
- UI language (English / 繁體中文):
```

### For feature requests

```markdown
## Summary
The feature and the problem it solves.

## Proposed Behavior
How it should work.

## Alternatives Considered
Other approaches considered, if any.

## Notes
Open questions, edge cases, or related features.
```

### For questions / discussions

A question issue only needs a clear title and a short body. Label it appropriately
and close once answered.

## Labels

Apply exactly one of these primary labels when known:

- `bug` — broken behavior
- `feature` — new capability
- `enhancement` — improvement to existing behavior
- `question` — asks, not a task

Add secondary labels only if they already exist in the repo (do not invent new ones).

## Markdown Conventions

- Use fenced code blocks for error messages, stack traces, and console output
- Link to exact files/lines with `path/to/file.ts:123` or a permalink when pointing
  at code
- Include a screenshot or screen recording for visual bugs
- Wrap URLs in angle brackets: `<https://example.com>` so they are not auto-embedded
- Use task lists (`- [ ]`) for multi-part checklists

## Checklist Before Submitting

- [ ] Title is short and describes the issue, not the fix
- [ ] Steps to reproduce are complete and reproducible
- [ ] Environment fields are filled for bugs
- [ ] Only one issue per report (split compound issues)
- [ ] No secrets, personal data, or full page URLs with sensitive content
