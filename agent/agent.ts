import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { defineAgent } from "eve";

export default defineAgent({
  model: "google/gemini-2.5-flash",
});
const invokedDirectly =
  process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href;
if (invokedDirectly) {
  const here = dirname(fileURLToPath(import.meta.url));
  const instructions = readFileSync(join(here, "instructions.md"), "utf8");
  console.log("kiru agent booted");
  console.log(`instructions: ${instructions.length} chars loaded`);
  console.log("tools (1): stub_ping");
}
