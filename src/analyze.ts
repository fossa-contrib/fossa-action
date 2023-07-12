import { exec } from "@actions/exec";

import { ENDPOINT, FOSSA_API_KEY, SKIP_TEST } from "./constants";

function getArgs() {
  const args = [];
  if (ENDPOINT) {
    args.push(...["--endpoint", ENDPOINT]);
  }
  return args;
}

export async function analyze(): Promise<void> {
  const args = getArgs();
  const PATH = process.env["PATH"] ?? "";
  const options = { env: { ...process.env, PATH, FOSSA_API_KEY } };
  await exec("fossa", ["analyze", ...args], options);
  if (!SKIP_TEST) {
    await exec("fossa", ["test", ...args], options);
  }
}
