# Status — Coding Agents Tooling

**Phase**: 1 — Curated Reference Documentation
**Last updated**: 2026-08-20

## Current State

Project scaffolding complete. The primary deliverable — `coding-agents-practice-guide.md` — exists as a comprehensive first draft (~38K bytes) covering all 27 sections with Mermaid diagrams, comparative tables, and practice exercises for both Claude Code and Codex CLI.

## What Was Just Built

- Project infrastructure: CLAUDE.md, README.md, docs/, .claude/ commands and skills, .gitignore
- Master plan document with phase roadmap and content quality gates

## Security

Security requirements are documented, not yet wired — **because there is nothing to wire them into yet.** This repo has no CI pipeline: `.github/workflows/` holds only the manual `release.yml` bump workflow, there is no `.github/workflows/ci.yml`, no executable Python (`pyproject.toml` carries the version field and no `[tool.ruff]` block), and no Dockerfile. A `sast` stage requires a pipeline to live in, ruff `S` requires Python source, and Trivy requires an image. This is a structural gap, not a skipped task. `CLAUDE.md` / `AGENTS.md` `<security>` holds the authoritative input-boundary inventory and injection-class defenses; the master plan carries the SAST gate lines on every phase. Local parity runs today: `semgrep scan --config auto --error .` + `gitleaks detect --no-git --redact`.

Next security tasks (all documented requirements; each is blocked on the artifact it would scan):
- `sast` CI stage between `lint` and `test` in the first `.github/workflows/ci.yml` (CodeQL `javascript-typescript` for `scripts/hooks/*.cjs`, Semgrep SARIF upload, gitleaks) — ships with the first pipeline commit
- ruff `S` rules + `pip-audit` in the `sast` stage, and Trivy in `docker-build`, from the first executable Python / Dockerfile (Phase 2)
- `.semgrep/` project rules directory

## What's Next

- Content accuracy audit: run `/review` against official docs for both agents
- Fill any gaps in comparative tables (ensure both agents represented in every row)
- Verify all exercises are actionable and concrete
- Verify all Mermaid diagrams render correctly
- Assess Phase 1 completion gate readiness

## Open Questions

- Phase 2 delivery format: Jupyter notebooks vs Streamlit vs both (decision deferred)