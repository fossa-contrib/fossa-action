import { exec } from "@actions/exec";

import { ENDPOINT, FOSSA_API_KEY, SKIP_TEST } from "./constants";

function getArguments() {
  const arguments_ = [];
  if (ENDPOINT) {
    arguments_.push("--endpoint", ENDPOINT);
  }
  return arguments_;
}

export async function analyze(): Promise<void> {
  const arguments_ = getArguments();
  const PATH = process.env["PATH"] ?? "";
  const options = { env: { ...process.env, PATH, FOSSA_API_KEY } };
  await exec("fossa", ["analyze", ...arguments_], options);
  if (!SKIP_TEST) {
    await exec("fossa", ["test", ...arguments_], options);
  }
}
