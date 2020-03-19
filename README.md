# LOG PARSER

## Prerequisites

The following is required before installing this CLI tool:

```bash
nvm
node >= 13.11.0 // See .nvmrc
```

### MACS

In your bash, zsh or the like command line shell, run:

```bash
brew install nvm
```

In this project's root folder, run:

```bash
nvm install
```

### WINDOWS

Download and install nvm from https://github.com/coreybutler/nvm-windows/releases.

In this project's root folder, run:

```bash
nvm install
```

## Installation

First install all the node modules, in this project's root folder, run:

```bash
npm install
```

Second, build the code and display the results:

```
npm run build
```

## Usage

How to run the analytics?

Make sure the `dist/index.js` file is executable, e.g run `chmod +x ./dist/index.js` within this project root folder.

Then you can run the following command:

```bash
./dist/index.js
```

## Development

The following command will auto watch for changes:

```node
npm start
```

Running tests:

```node
npm test
```

Running test with watch:
```
npm run test:watch
```

### LOGS

Your results are available in an appended log:

```
combined.log
```

Your errors are available in an appended log:

```
errors.log
```
