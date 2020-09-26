import * as core from "@actions/core";
import * as github from "@actions/github";
import * as tc from "@actions/tool-cache";

import { GITHUB_TOKEN } from "./constants";

function getPlatform() {
  switch (process.platform) {
    case "win32":
      return "windows_amd64";
    case "darwin":
      return "darwin_amd64";
    default:
      return "linux_amd64";
  }
}

async function getLatestRelease() {
  const octokit = github.getOctokit(GITHUB_TOKEN);

  const {
    data: { assets, tag_name: version },
  } = await octokit.repos.getLatestRelease({
    owner: "fossas",
    repo: "fossa-cli",
  });

  const [
    { browser_download_url: browserDownloadUrl },
  ] = assets.filter((asset) =>
    asset.browser_download_url.includes(getPlatform())
  );

  return { version, browserDownloadUrl };
}

async function extract(cliDownloadedPath: string) {
  if (process.platform === "win32") {
    const cliExtractedPath = await tc.extractZip(cliDownloadedPath);
    return cliExtractedPath;
  } else {
    const cliExtractedPath = await tc.extractTar(cliDownloadedPath);
    return cliExtractedPath;
  }
}

async function cache(cliExtractedPath: string, version: string) {
  const platform = getPlatform();

  const cachedPath = await tc.cacheDir(
    cliExtractedPath,
    "fossa",
    version,
    platform
  );

  return cachedPath;
}

export async function acquireFossaCli(): Promise<void> {
  const { browserDownloadUrl, version } = await getLatestRelease();

  const platform = getPlatform();

  const cliDownloadedPath = await tc.downloadTool(browserDownloadUrl);

  const cliExtractedPath = await extract(cliDownloadedPath);

  const cachedPath = tc.find("fossa", version, platform);

  if (cachedPath === "") {
    core.addPath(await cache(cliExtractedPath, version));
  } else {
    core.addPath(cachedPath);
  }
}
