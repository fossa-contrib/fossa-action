import { analyze } from "./analyze";
import { acquireFossaCli } from "./download";

async function run() {
  await acquireFossaCli();
  await analyze();
}

run();
