import * as core from "@actions/core";

import { analyze } from "./analyze";
import { acquireFossaCli } from "./installer";

async function run() {
  try {
    await acquireFossaCli();
    await analyze();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
