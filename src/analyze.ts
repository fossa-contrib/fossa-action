import { exec } from "@actions/exec";

import { FOSSA_API_KEY } from "./constants";

export async function analyze(): Promise<void> {
  await exec("fossa", ["init"]);
  await exec("fossa", ["analyze"], { env: { FOSSA_API_KEY } });
}
