# Fossa Action

Actions for running FOSSA scans

## Synopsis

This action aims to provide an OS-neutral interface to `fossa-cli`, and so will
not add features that only work on one operating system. It will also track the
latest release of `fossa-cli`.

## Usage

### Example workflow

```yml
name: License Scanning

on:
  - pull_request
  - push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Run and upload build analysis
        uses: fossa-contrib/fossa-action@v1
        with:
          fossa-api-key: ${{ secrets.FOSSA_API_KEY }}
          github-token: ${{ github.token }}
```

## Inputs

- `fossa-api-key`: This input is used to upload the results of the build
  analysis.
- `github-token`: This input is used to get the latest `fossa-cli` from GitHub
  API.
