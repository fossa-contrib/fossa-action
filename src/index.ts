import * as core from "@actions/core";
import * as github from "@actions/github";

import { analyze } from "./analyze";
import { FOSSA_API_KEY } from "./constants";
import { acquireFossaCli } from "./installer";

const { eventName } = github.context;

async function run() {
  try {
    await acquireFossaCli();
    await analyze();
  } catch (error) {
    if (error instanceof Error) {
      const isEmpty = FOSSA_API_KEY.length === 0;
      if (eventName === "pull_request" && isEmpty) {
        core.warning(
          "You can not use secrets on the pull request event. If you are using them together, see the documentation: https://github.com/fossa-contrib/fossa-action#push-only-api-token",
        );
      }
      core.setFailed(error.message);
    }
  }
}

void run();
