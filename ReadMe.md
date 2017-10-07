# Example react project

This is example react project it meant to demostrate a project organization suitable for larger projects.
The project is split into multiple modules with separate builds.

## Dependencies

### Bash

The watch script is written in bash. If on a windows machine you might want to install GitBash as a means
to run bash scripts: https://git-for-windows.github.io/

### Node and npm

To install node and npm, find the installer for your platform: https://nodejs.org/en/download/current/

Once installed, run `npm install` in the project root to install the project dependencies into the
`node_modules` folder.

### Spago

`spago` is written in Go and can be installed by downloading the binaries directly and placing in your PATH:

[spago/releases](https://github.com/mushishi78/spago/releases)

Alternatively, if you have Go install on your computer, you can simply run

```
go get -u github.com/mushishi78/spago
```

## Development

A `watch` bash script is provided to run whilst in development.

```
cd example-react-project
./watch
```

Then go to http://localhost:8080/
