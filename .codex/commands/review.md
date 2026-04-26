---
name: review
description: Review content accuracy and completeness against official documentation
---

# Content Accuracy Review

Before anything else:
1. Re-read `AGENTS.md` in full.
2. Read `docs/CODING_AGENTS_TOOLING_MASTER_PLAN.md`.
3. Read `docs/status.md` for current project state.

## Review Protocol

For every changed file (check `git diff` for what's changed):

### 1. Accuracy Audit
- Read every feature claim in the changed content.
- For each claim, assess: Is this verifiable against official docs or `--help` output?
- Flag any claim that appears speculative, outdated, or unverifiable.
- Check CLI command syntax — are flags real? Are argument formats correct?
- Check version references — are they accurate?

### 2. Fairness Audit
- Read every comparative table in the changed content.
- For each row: Does it present both agents' actual capabilities?
- Flag any row that strawmans one agent or uses editorial language favoring one over the other.
- Flag any missing rows where one agent has a feature not represented.

### 3. Completeness Audit
- Check for stub sections (empty headers, "TBD", "coming soon").
- Every section must have: concept explanation, both agents' implementations, comparative table, exercise.
- Check that Mermaid diagrams exist where architecture or flow is discussed.

### 4. Style Audit
- No fluff, no marketing language, no "in this section we will explore."
- Code blocks have correct language identifiers.
- Tables used for comparisons (not prose lists).
- Internal links resolve (section anchors).

## Output Format

Produce a checklist-style report:

```
## Content Review Report — [date]

### Accuracy
- [ ] file:line — [CRITICAL|SHOULD-FIX|MINOR] description of issue

### Fairness
- [ ] file:line — [CRITICAL|SHOULD-FIX|MINOR] description of issue

### Completeness
- [ ] file:line — [CRITICAL|SHOULD-FIX|MINOR] description of issue

### Style
- [ ] file:line — [CRITICAL|SHOULD-FIX|MINOR] description of issue

### Verdict: READY / NOT READY
```

Do NOT fix anything automatically. Report only. The user decides what to act on.