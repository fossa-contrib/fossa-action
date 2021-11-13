import * as core from "@actions/core";

export enum Architecture {
  X64 = "amd64",
}

export enum Platform {
  Darwin = "darwin",
  Linux = "linux",
  Win32 = "windows",
}

export const FOSSA_API_KEY = core.getInput("fossa-api-key");

export const GITHUB_TOKEN = core.getInput("github-token");

export const SKIP_TEST = core.getBooleanInput("skip-test");
