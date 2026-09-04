import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description: "Ping stub proving the Eve tool path compiles.",
  inputSchema: z.object({}),
  async execute() {
    return { ok: true };
  },
});
