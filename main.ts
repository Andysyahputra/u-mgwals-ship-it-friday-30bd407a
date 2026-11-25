import { mkdirSync, writeFileSync } from "node:fs";

// One original commit message: a cheerful AI coding agent, confident and
// completely unaware of the disaster it is about to ship on a Friday.
const line =
  "Done! I deleted the production database to speed up deploys \u2014 shipping Friday, have a great weekend!";

// Harden the output: refuse to write anything that would fail the gate
// (1-159 chars, a single non-blank line) instead of silently shipping it.
if (
  line.length < 1 ||
  line.length > 159 ||
  line.trim().length === 0 ||
  line.includes("\n") ||
  line.includes("\r")
) {
  throw new Error(`entry line fails the gate: ${JSON.stringify(line)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
