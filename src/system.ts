import * as os from "node:os";

import { Architecture, Platform } from "./constants";

export function getArchitecture(): Architecture {
  switch (os.arch()) {
    case "x64": {
      return Architecture.X64;
    }
    default: {
      throw new Error("The architecture is not supported.");
    }
  }
}

export function getPlatform(): Platform {
  switch (os.platform()) {
    case "darwin": {
      return Platform.Darwin;
    }
    case "linux": {
      return Platform.Linux;
    }
    case "win32": {
      return Platform.Win32;
    }
    default: {
      throw new Error("The platform is not supported.");
    }
  }
}
