<h1 align="center">
<img  width = "280" height = "210"  src="https://s13.postimg.org/qd8bbi0mv/d41dc22748c_1.png" alt="hexagon">
</h1>

# Hexagon
[![Code Climate](https://codeclimate.com/github/adamsiwiec/hexagon/badges/gpa.svg)](https://codeclimate.com/github/adamsiwiec/hexagon) [![npm](https://img.shields.io/npm/dt/hexagon-cli.svg)](https://npmjs.com/package/hexagon-cli) ![npm](https://img.shields.io/npm/v/hexagon-cli.svg) ![npm](https://img.shields.io/npm/l/hexagon-cli.svg) ![npm](https://david-dm.org/adamsiwiec/hexagon.svg) ![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)

A package manager for Hexo.


## Prerequisites

* NodeJS
* Git


## Getting Started

Install:

`$ npm install -g hexagon-cli`

You can use it by running:

```bash
$ hexagon --help

# or

$ hexa --help # For the minimalists out there
```

## Usage

![usage_gif](http://i.imgur.com/N8skcKH.gif)

For Hexagon to work properly, make sure you are in your project's root directory.

To install a plugin:
* Pass the `-p or --plugin` flag or just `plugin`
* Pass the npm package[s] name

```bash
$ hexagon --plugin hexo-generator-github
$ hexagon -p hexo-generator-github
$ hexagon plugin hexo-generator-github
```


To install a theme:
* Pass the `-t or --theme` flag or just `theme`
* Pass the Github abbreviation, e.g `adamsiwiec/hexagon-theme`

```bash
$ hexagon --theme adamsiwiec/hexagon-theme
$ hexagon -t adamsiwiec/hexagon-theme
$ hexagon theme adamsiwiec/hexagon-theme
```

To list all themes and plugins

    $ hexagon list


For more commands:

    $ hexagon --help


## Contributing

Please submit Issues or Pull Requests to continue the development of Hexagon

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [NPM site](https://www.npmjs.com/package/hexagon-cli) or the [releases](https://github.com/adamsiwiec/hexagon/releases).

## Authors

* **[Adam Siwiec](https://github.com/adamsiwiec)** - *Initial work*

See also the list of [contributors](https://github.com/adamsiwiec/hexagon/contributors) who participated in this project.

## License

This project is licensed under the MIT License
