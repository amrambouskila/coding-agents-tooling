---
name: pre-commit
description: Pre-commit audit — read-only checks before the user commits
---

# Pre-Commit Audit

Before anything else:
1. Re-read `AGENTS.md` in full.
2. Read `docs/CODING_AGENTS_TOOLING_MASTER_PLAN.md`.
3. Read `docs/status.md`.

**This command NEVER stages or commits anything. It only reports. The user runs git commands themselves.**

## Audit Steps (run sequentially)

### 1. Content Review
Run the full `/review` protocol on all changed files (`git diff` + `git diff --cached`).

### 2. Documentation State
- Is `docs/status.md` current? Does it reflect the latest changes?
- Is `docs/versions.md` updated with a new entry if content was added?
- Does `AGENTS.md` need any updates based on the changes?

### 3. Internal Consistency
- Do all internal links (section anchors) in the guide resolve?
- Do all comparative tables have entries for both agents?
- Are there any orphaned sections (referenced in TOC but missing)?

### 4. Mermaid Diagram Check
- Do all Mermaid code blocks have valid syntax?
- Are there sections discussing architecture or flow that lack diagrams?

### 5. Phase Alignment
- Do the changes stay within Phase 1 scope (documentation only)?
- No executable code added (Python, JS, etc.) outside of code examples in the guide?
- No Docker/launcher files added prematurely?

## Output Format

```
## Pre-Commit Audit — [date]

| Check | Status | Notes |
|-------|--------|-------|
| Content accuracy | PASS/FAIL | ... |
| Documentation state | PASS/FAIL | ... |
| Internal consistency | PASS/FAIL | ... |
| Mermaid diagrams | PASS/FAIL | ... |
| Phase alignment | PASS/FAIL | ... |

### Verdict: READY TO COMMIT / NOT READY

### Suggested commit message:
<subject line>

<body>
```