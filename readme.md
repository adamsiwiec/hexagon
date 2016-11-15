# Hexagon

A package manager for Hexo.


## Prerequisites

* NodeJS
* Git


## Getting Started

Install:

`$ npm install -g hexagon-cli`

You can use it by running:

    $ hexagon -t adamsiwiec/some_theme

    # or

    $ hexa -t adamsiwiec/some_theme # For the minimalists out there


## Usage

For Hexagon to work properly, make sure you are in your project's root directory.

To install a plugin:
* Pass the `-p` flag
* Pass the npm package name

`$ hexagon -p hexo-generator-github`



To install a theme:
* Pass the `-t` flag
* Pass the Github abbreviation

`$ hexagon -t henryhuang/hexo-theme-aloha`


## Contributing

Please submit Issues or Pull Requests to continue the development of Hexagon

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [NPM site](https://www.npmjs.com/package/hexagon-cli) or the [releases](https://github.com/adamsiwiec/hexagon/releases).

## Authors

* **[Adam Siwiec](https://github.com/adamsiwiec)** - *Initial work*

See also the list of [contributors](https://github.com/adamsiwiec/hexagon/contributors) who participated in this project.

## License

This project is licensed under the MIT License
