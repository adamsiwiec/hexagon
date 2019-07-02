#!/usr/bin/env node
var cli = require('commander')
var colors = require('colors')

var pack = require('./package.json')

console.log('')
console.log(colors.cyan('⬡'))
console.log('')

cli
  .version(pack.version)
  .option('-p, --plugin <plugins>', 'Install a plugin[s] from npm', (plugins) => {
    var p = require('./plugin.js')
    p().add(plugins)
  })
  .option('-t, --theme <themes>', 'Install a theme[s] from Github', (themes) => {
    var theme = require('./theme.js')
    theme().add(themes)
  })
  .option('-l, --list', 'List all themes and plugins', function () {
    var plugin = require('./plugin.js')
    var theme = require('./theme.js')

    plugin().list()
    theme().list()
  })
  .parse(process.argv)
