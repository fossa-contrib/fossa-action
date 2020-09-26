import { exec } from "@actions/exec";

import { FOSSA_API_KEY } from "./constants";

export async function analyze(): Promise<void> {
  const PATH = process.env.PATH ? process.env.PATH : "";
  await exec("fossa", ["init"]);
  await exec("fossa", ["analyze"], {
    env: { PATH, FOSSA_API_KEY },
  });
}
