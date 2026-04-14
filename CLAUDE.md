# Coding Agents Tooling - CLAUDE.md

> **MANDATORY WORKFLOW: READ THIS ENTIRE FILE BEFORE EVERY CHANGE.** Every time. No skimming, no assuming prior-session context carries over — it does not.
>
> **Why:** This project spans multiple sessions and months of development. Skipping the re-read produces decisions that contradict the architecture, duplicate existing patterns, break data contracts, or introduce tech debt that compounds.
>
> **The workflow, every time:**
> 1. Read this entire file in full.
> 2. Read the master plan document: `docs/CODING_AGENTS_TOOLING_MASTER_PLAN.md`.
> 3. Read `docs/status.md` — current state / what was just built.
> 4. Read `docs/versions.md` — recent version history.
> 5. Read the source files you plan to modify — understand existing patterns first.
> 6. Then implement, following the rules and contracts defined here.

---

## 0. Critical Context

This is a **reference and practice project**, not a software application. The primary deliverable is **accurate, comprehensive documentation** covering coding agents (Claude Code and OpenAI Codex CLI). Accuracy of documented features is the paramount concern — every claim must be verifiable against official documentation or observed behavior.

This project is NOT:
- A standalone app (Phase 1)
- An opinionated recommendation of one agent over the other — comparative content must be fair and evidence-based
- A tutorial for beginners — it targets senior engineers who want deep mastery

Current phase: **Phase 1 — Curated Reference Documentation**.

---

## 1. Project Identity

- **Name**: coding-agents-tooling
- **Location**: `coding-agents-tooling/`
- **Master plan**: `docs/CODING_AGENTS_TOOLING_MASTER_PLAN.md`
- **Purpose**: Comprehensive reference and practice guide for Claude Code and OpenAI Codex CLI — architecture, CLI commands, hooks, skills, plugins, MCP, subagents, security, configuration, IDE integration, CI/CD, scheduling, and applied exercises
- **Target audience**: Senior engineers who use coding agents daily and want to understand every feature surface
- **Covered agents**: Claude Code (Anthropic), Codex CLI (OpenAI)

### Phase Roadmap

| Phase | Name | Scope | Status |
|-------|------|-------|--------|
| 1 | Curated Reference Documentation | Single comprehensive markdown guide with Mermaid diagrams, comparative tables, exercises | **Active** |
| 2 | Interactive Exercises & Workshops | Jupyter notebooks or Streamlit app for guided practice | Planned |
| 3 | Automated Agent Benchmarking | Python CLI tools to score agent performance on standardized tasks | Planned |

---

## 2. Phase 1 Constraints

Phase 1 is documentation-only. The deliverable is `coding-agents-practice-guide.md` and supporting reference files.

**In scope:**
- Comprehensive coverage of every documented feature for both agents
- Comparative tables (fair, evidence-based)
- Mermaid architecture and flow diagrams
- Applied exercises with concrete instructions
- Cross-reference matrix linking features across agents

**Explicitly NOT in scope (deferred):**
- Do NOT add Python code, Jupyter notebooks, or executable exercises — Phase 2
- Do NOT add benchmarking tooling, scoring scripts, or test harnesses — Phase 3
- Do NOT add a Dockerfile or docker-compose.yml — not needed until Phase 2+
- Do NOT add a launcher script — not needed until Phase 2+

---

## 3. Content Rules (Non-Negotiable)

These rules govern all documentation content in this project.

### Accuracy
1. Every feature claim must be verifiable against official docs or observed CLI behavior. Do not document features based on speculation, blog posts, or third-party summaries.
2. When a feature's availability or behavior is uncertain, mark it explicitly: `(unverified)` or `(as of [date])`.
3. CLI command syntax must be tested or copied from official `--help` output. Do not invent flags.
4. Version-specific features must note the version they were introduced in when known.

### Fairness
5. Comparative tables must present each agent's actual capabilities, not strawman one to favor the other.
6. If one agent has a feature the other lacks, state it factually without editorial commentary on which approach is "better."
7. Exercises must be equally actionable for both agents where the feature exists on both.

### Completeness
8. Every section of the guide should cover: concept explanation, both agents' implementations, comparative table, and at least one exercise.
9. Do not leave stub sections with "TBD" or "coming soon." Either write the content or omit the section header entirely.
10. Mermaid diagrams are required wherever they clarify architecture, flow, or relationships. Default to including them.

### Style
11. Technical, terse, high-signal. No fluff, no marketing language, no "in this section we will explore."
12. Code blocks use the appropriate language identifier (bash, yaml, json, typescript, python, mermaid).
13. Use `>` blockquotes for important warnings or caveats.
14. Tables over prose for feature comparisons. Always.

---

## 4. File Inventory

```
coding-agents-tooling/
├── CLAUDE.md                              # This file — project-level AI guidelines
├── README.md                              # Human-facing overview
├── coding-agents-practice-guide.md        # The guide — primary deliverable
├── docs/
│   ├── CODING_AGENTS_TOOLING_MASTER_PLAN.md  # Authoritative master plan
│   ├── status.md                          # Current state
│   └── versions.md                        # Semver changelog
├── .claude/
│   ├── settings.json                      # Hooks and permissions
│   ├── commands/
│   │   ├── review.md                      # Content accuracy review
│   │   └── pre-commit.md                  # Pre-commit audit
│   └── skills/
│       └── phase-awareness/
│           └── SKILL.md                   # Phase orientation protocol
└── .gitignore
```

---

## 5. Hands Off Git

I manage all git operations myself. Claude does not run any git command that mutates repository state. Read-only git (`git status`, `git diff`, `git log`, `git show`, `git blame`) is allowed for inspection.

When a task is complete, report:
1. Files changed and why (one line each).
2. Whether changes form a cohesive commit or should be split.
3. Suggested commit message (clearly labeled as suggestion).

---

## 6. Content Verification Protocol

Before adding or modifying any feature documentation:

1. **Check official docs first.** Claude Code: `https://docs.anthropic.com/en/docs/claude-code`. Codex CLI: `https://github.com/openai/codex` and OpenAI docs.
2. **Cross-reference with `--help` output** when documenting CLI flags and commands.
3. **Date-stamp uncertain claims.** If official docs are ambiguous, note the ambiguity.
4. **Test exercises locally** when possible before documenting them as practice tasks.

---

## 7. Versioning

- **Source of truth**: `docs/versions.md` (no `pyproject.toml` or `package.json` — this is a documentation project)
- **Semver applied to content**: patch = corrections/clarifications, minor = new sections/features covered, major = restructuring or adding a new agent
- Current version tracked in the top entry of `docs/versions.md`

---

## 8. Change Policy

1. **Before writing**: Re-read this CLAUDE.md (mandatory).
2. **Content changes**: Must follow the content rules in Section 3.
3. **New sections**: Must include concept explanation, both agents' implementations, comparative table, and at least one exercise.
4. **Diagrams**: Add Mermaid diagrams for any new architecture or flow content.
5. **Documentation updates**: Update `docs/status.md` and `docs/versions.md` after significant changes.
6. **No auto-publish**: All content additions require human review before committing.

---

## 9. Testing Requirements (Phase 1)

Phase 1 has no executable code, so testing means **content validation**:
- Run `/review` to audit content accuracy after changes
- Verify all Mermaid diagrams render (paste into a Mermaid live editor or use a markdown preview tool)
- Verify all internal links resolve (section anchors within the guide)
- Verify comparative tables have entries for both agents on every row

---

## 10. Phase Completion Gate — Phase 1

Phase 1 is complete when:
- [ ] All 27 sections of the guide have substantive content (no stubs)
- [ ] Every section has at least one comparative table
- [ ] Every section has at least one exercise
- [ ] All Mermaid diagrams render correctly
- [ ] Cross-reference matrix is complete and links to all sections
- [ ] Content reviewed for accuracy against official docs (run `/review`)
- [ ] `docs/status.md` and `docs/versions.md` are current
- [ ] README.md accurately describes the guide's scope and how to use it

---

## 11. Phase Transition Strategy

### Phase 1 to Phase 2
- The guide (`coding-agents-practice-guide.md`) remains the authoritative reference
- Phase 2 adds `exercises/` directory with Jupyter notebooks or a Streamlit app
- Exercises in the guide become links to interactive versions
- A `backend/` directory, `Dockerfile`, `docker-compose.yml`, and launcher scripts are added
- Tech stack: Python 3.11+, Jupyter or Streamlit, uv for package management

### Phase 2 to Phase 3
- Benchmarking tooling added as `tools/` directory with Python CLI scripts
- Standardized task definitions, scoring rubrics, and result reporting
- May require containerized sandbox environments for running agent tasks safely

---

## 12. Output & Completion Expectations

At the end of every non-trivial task, run through:

1. **Summary** — what changed and why.
2. **Accuracy check** — confirm every new claim is verifiable.
3. **Fairness check** — confirm comparative content is balanced.
4. **Completeness check** — no stub sections, all tables filled.
5. **Diagram check** — any new diagrams render correctly.
6. **Docs check** — `docs/status.md` and `docs/versions.md` updated.
7. **Git state** — report files changed, suggest commit message.

---

## 13. Closing Reminder

Re-read this file before the next change. Every time.