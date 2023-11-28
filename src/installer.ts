import * as core from "@actions/core";
import * as github from "@actions/github";
import * as tc from "@actions/tool-cache";
import * as semver from "semver";

import { GITHUB_TOKEN } from "./constants";
import { getArchitecture, getPlatform } from "./system";

const octokit = github.getOctokit(GITHUB_TOKEN);

async function getLatestRelease() {
  const {
    data: { assets, tag_name: version },
  } = await octokit.rest.repos.getLatestRelease({
    owner: "fossas",
    repo: "fossa-cli",
  });

  const platform = getPlatform();
  const architecture = getArchitecture();
  const cleanVersion = semver.clean(version) ?? version;
  const fname = `fossa_${cleanVersion}_${platform}_${architecture}.zip`;

  const assetIndex = assets.findIndex((asset) =>
    asset.browser_download_url.endsWith(fname),
  );
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const { browser_download_url: browserDownloadUrl } = assets[assetIndex]!;

  return { version, browserDownloadUrl };
}

export async function acquireFossaCli(): Promise<void> {
  const { browserDownloadUrl, version } = await getLatestRelease();
  const platform = getPlatform();
  const cachedPath = tc.find("fossa-cli", version, platform);

  if (cachedPath === "") {
    const downloadedPath = await tc.downloadTool(browserDownloadUrl);
    const extractedPath = await tc.extractZip(downloadedPath);
    const cachedPath = await tc.cacheDir(
      extractedPath,
      "fossa-cli",
      version,
      platform,
    );
    core.addPath(cachedPath);
  } else {
    core.addPath(cachedPath);
  }
}
