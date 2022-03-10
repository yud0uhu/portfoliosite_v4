import { createClient } from "microcms";

export const microcmsClient = createClient({
  serviceDomain: "flyingcat",
  apiKey: `${Deno.env.get("X_API_KEY")}`,
});
