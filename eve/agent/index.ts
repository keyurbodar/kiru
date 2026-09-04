import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { defineTool } from "eve/tools";
import { z } from "zod";

const stubPing = defineTool({
  description: "PR-001 stub tool proving the Eve tool path compiles.",
  inputSchema: z.object({}),
  async execute() {
    return { ok: true };
  },
});

const tools = [{ name: "stub_ping", tool: stubPing }];

function loadInstructions(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  return readFileSync(join(here, "..", "instructions.md"), "utf8");
}

export const agentEntrypoint = {
  name: "kiru",
  loadInstructions,
  tools,
};

function main(): void {
  const instructions = loadInstructions();
  console.log("kiru agent booted");
  console.log(`instructions: ${instructions.length} chars loaded`);
  console.log(`tools (${tools.length}): ${tools.map((t) => t.name).join(", ")}`);
}

const invokedDirectly =
  process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href;
if (invokedDirectly) {
  main();
}
