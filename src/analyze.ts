import { exec } from "@actions/exec";

import { FOSSA_API_KEY, SKIP_TEST } from "./constants";

export async function analyze(): Promise<void> {
  const PATH = process.env.PATH || "";
  const options = { env: { ...process.env, PATH, FOSSA_API_KEY } };
  await exec("fossa", ["init"]);
  await exec("fossa", ["analyze"], options);
  if (!SKIP_TEST) {
    await exec("fossa", ["test"], options);
  }
}
