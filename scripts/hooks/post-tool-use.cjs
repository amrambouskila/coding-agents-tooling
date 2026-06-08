const { emit, getToolFilePath, readHookPayload, toPosixPath } = require("./hookUtils.cjs");

const RULES = [
  {
    test: (p) => p.includes("coding-agents-practice-guide"),
    context:
      "CONTENT RULES: Every feature claim must be verifiable against official docs. Comparative tables must be fair to both agents. No stub sections. Include Mermaid diagrams where they clarify architecture or flow.",
  },
  {
    test: (p) => p.endsWith("AGENTS.md") || p.includes("MASTER_PLAN"),
    context: "PROJECT DOCS: Ensure consistency with docs/status.md and docs/versions.md. Phase constraints must be respected.",
  },
];

async function main() {
  const payload = await readHookPayload();
  const f = toPosixPath(getToolFilePath(payload));
  if (!f) return;
  const m = RULES.find((r) => r.test(f));
  if (m) emit({ hookSpecificOutput: { hookEventName: "PostToolUse", additionalContext: m.context } });
}

main().catch((e) => {
  process.stderr.write(`[hook] post-tool-use failed: ${e.message}\n`);
  process.exitCode = 0;
});
