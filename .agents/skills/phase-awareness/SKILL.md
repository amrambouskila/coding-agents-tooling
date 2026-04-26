---
name: phase-awareness
description: Proactively applied at session start and before any implementation work; orients Codex to the current phase and its explicit scope constraints
---

# Phase Awareness Protocol

## When to Apply
- At the start of every session
- Before any content creation or modification
- When the user requests something that might cross phase boundaries

## Current Phase: 1 — Curated Reference Documentation

### What Phase 1 IS
- Writing and refining `coding-agents-practice-guide.md`
- Adding Mermaid diagrams, comparative tables, and exercises
- Verifying content accuracy against official documentation
- Updating docs/ files (status.md, versions.md)
- Updating project infrastructure (AGENTS.md, commands, skills)

### What Phase 1 is NOT
- No executable Python code (beyond code examples in the guide)
- No Jupyter notebooks
- No Streamlit app
- No Dockerfile or docker-compose.yml
- No launcher scripts (run_*.sh, run_*.bat)
- No benchmarking tools
- No test harnesses

### Phase Gate Checklist
Before declaring Phase 1 complete:
1. All 27 guide sections have substantive content
2. Every section has a comparative table and an exercise
3. All Mermaid diagrams render correctly
4. Cross-reference matrix is complete
5. Content verified against official docs
6. docs/status.md and docs/versions.md are current

### If a Request Crosses Phase Boundaries
1. Identify which phase the request belongs to
2. State: "This belongs in Phase N. Phase 1 scope is documentation only."
3. Suggest how to note it for the future phase in the master plan
4. Do NOT implement it