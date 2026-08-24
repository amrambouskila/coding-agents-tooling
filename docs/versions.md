# Versions — Coding Agents Tooling

> Source of truth for the current version is the `version` field in `pyproject.toml` (bumped only by `.github/workflows/release.yml`). This file documents what ships in each version.

---

## v0.1.2

### CI hardening + dependency remediation (2026-08-24)

- **Release workflow hardened against script injection.** `${{ inputs.bump }}` and `${{ steps.bump.outputs.new_version }}` were interpolated directly into `run:` blocks, where the value becomes shell code. Both now pass through `env:` and are read as quoted shell variables. The input is `type: choice`, so this was not exploitable today — it is the pattern that breaks the moment the input type changes.


Security documentation added — no content or code changes.

- **Instruction files**: `<security>` section in `CLAUDE.md` / `AGENTS.md` — SAST stage requirement (`sast` between `lint` and `test` in the first CI pipeline; GitHub CodeQL + Semgrep + gitleaks + `pip-audit` + Trivy tool set), input-boundary inventory (hook stdin payloads, `CLAUDE_PROJECT_DIR`, release workflow inputs, `claude-teams.{sh,bat}`, instruction files as LLM context, planned Phase 2/3 runners), injection-class defenses per boundary; Security check added to the self-audit; two security lines added to the Phase 1 completion gate
- **Master plan**: Security subsection under Cross-Phase Concerns; SAST gate lines in every phase's acceptance criteria / definition of done; Phase 2 CI-foundation tasks; decision-log entry
- **Sub-docs**: `.codex/commands/pre-commit.md` — SAST audit step and verdict-table row; `.agents/skills/phase-awareness/SKILL.md` — SAST and injection-safety items in the Phase Gate Checklist
- **Status**: `docs/status.md` — Security section listing the documented-but-unwired requirements as next tasks, with the reason they are unwired: this repo has no CI pipeline, no executable Python, and no Dockerfile, so there is nothing for a `sast` stage, ruff `S`, or Trivy to attach to yet
- **Versions**: header corrected — `pyproject.toml` is the source-of-truth version field (added alongside the release workflow in v0.1.1)

---

## v0.1.1

Agent harness wiring — no guide content changes.

- **Codex harness**: `AGENTS.md` (mirror of `CLAUDE.md`), `.codex/commands/{review,pre-commit}.md`, `.codex/hooks.json`, `.agents/skills/phase-awareness/SKILL.md`
- **Hooks**: OS-agnostic Node hooks in `scripts/hooks/` (`hookUtils.cjs`, `pre-tool-use.cjs`, `post-tool-use.cjs`, `stop.cjs`, `stop-memory.cjs`)
- **Launchers**: `claude-teams.sh` / `claude-teams.bat` agent-teams enablement wrappers
- **Release**: `pyproject.toml` version field + `.github/workflows/release.yml` manual bump workflow; `.gitattributes`
- **Docs**: `PROJECT_DOCUMENTATION.html` self-contained project page

---

## v0.1.0

Initial project scaffolding and first draft of the practice guide.

- **Guide**: `coding-agents-practice-guide.md` — comprehensive first draft covering all 27 sections (architecture, CLI commands, hooks, skills, plugins, MCP, subagents, security, configuration, IDE integration, CI/CD, scheduling, exercises, cross-reference matrix)
- **Infrastructure**: CLAUDE.md, README.md, docs/ (master plan, status, versions), .claude/ (settings, commands, skills), .gitignore
- **Diagrams**: Mermaid architecture diagrams for both agents, phase roadmap gantt, module dependency graph
- **Comparative tables**: Feature comparison across all major sections
- **Exercises**: Applied practice exercises in every section