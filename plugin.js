let shell = require('shelljs')
var colors = require('colors')
var ora = require('ora')
let yarn = require('has-yarn')

class Plugin {
  add (params) {
    var spinner = ora('Installing packages').start()
    var installList = params.split(' ')

    if (yarn('.')) {
      shell.exec('yarn add ' + installList, function (code, data, stderr) {
        if (!data) {
          spinner.fail()
          console.log(
            colors.red(
              '⚠️ Uh Oh! Something went wrong check npm-debug.log for more info'
            )
          )
          process.exit()
        }
        spinner.succeed()
        console.log()
        console.log(
          '👍  Success! Make sure to add your configuration in config.yml'
        )
      })
    } else {
      shell.exec('npm i --save ' + installList, function (err, data, stderr) {
        if (!data) {
          spinner.fail()
          console.log(
            colors.red(
              '⚠️ Uh Oh! Something went wrong check npm-debug.log for more info'
            )
          )
          process.exit()
        }
        spinner.succeed()
        console.log()
        console.log(
          '👍  Success! Make sure to add your configuration in config.yml'
        )
      })
    }
    return this
  }
  list () {
    var cwdPackage = process.cwd() + '/package.json'
    var pack = require(cwdPackage)

    var dependencies = pack.dependencies
    var hexoPlugins = []

    for (var packages in dependencies) {
      var packageString = String(packages)
      if (packageString.indexOf('hexo') !== -1) {
        hexoPlugins.push(packageString)
      }
    }
    console.log()
    console.log('Plugins:')
    console.log()

    for (var i = 0; i < hexoPlugins.length; i++) {
      console.log('     - ' + hexoPlugins[i])
    }
    return this
  }
}

module.exports = function () {
  return new Plugin()
}
