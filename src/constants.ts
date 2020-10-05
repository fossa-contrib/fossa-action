import * as core from "@actions/core";

export const FOSSA_API_KEY = core.getInput("fossa-api-key");

export const GITHUB_TOKEN = core.getInput("github-token");

export const SKIP_TEST =
  (core.getInput("skip-test") || "false").toUpperCase() === "TRUE";
