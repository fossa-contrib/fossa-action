import * as core from "@actions/core";

export const FOSSA_API_KEY = core.getInput("fossa-api-key");

export const GITHUB_TOKEN = core.getInput("github-token");
