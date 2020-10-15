import { analyze } from "./analyze";
import { acquireFossaCli } from "./installer";

async function run() {
  await acquireFossaCli();
  await analyze();
}

run();
