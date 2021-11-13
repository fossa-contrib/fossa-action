# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [unreleased]

- Introduce changes for fossa cli v3.

## [1.1.4] - 2020-02-02

- Improve error handling at the entry point.

## [1.1.3] - 2020-11-30

### Changed

- Provide the `github.token` by default.

## [1.1.2] - 2020-10-16

### Fixed

- Pass all `process.env` children to the exec function.

## [1.1.1] - 2020-10-15

### Fixed

- Fix cache directory name.

## [1.1.0] - 2020-10-06

### Added

- Add `skip-test` input.

## [1.0.3] - 2020-09-29

### Changed

- Use esbuild instead.

## [1.0.2] - 2020-09-26

### Fixed

- Do not download `fossa-cli` if cache exists.

## [1.0.1] - 2020-09-26

### Fixed

- Pass the `PATH` environment variable to the `fossa-cli`.

## [1.0.0] - 2020-09-26

- Initial release.

[unreleased]:
  https://github.com/fossa-contrib/fossa-action/compare/v1.1.4...HEAD
[1.1.4]: https://github.com/fossa-contrib/fossa-action/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/fossa-contrib/fossa-action/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/fossa-contrib/fossa-action/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/fossa-contrib/fossa-action/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/fossa-contrib/fossa-action/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/fossa-contrib/fossa-action/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/fossa-contrib/fossa-action/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/fossa-contrib/fossa-action/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/fossa-contrib/fossa-action/releases/tag/v1.0.0
