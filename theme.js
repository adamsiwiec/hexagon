var path = require('path')
var fs = require('fs')
var colors = require('colors')
var ora = require('ora')

try {
 	var git = require('simple-git')('./themes')
} catch (err) {
 	console.log()
 	console.log(colors.red('⚠️ Please move to your projects home directory'))
 	process.exit()
}

function getDirectories (srcpath) {
 	return fs.readdirSync(srcpath).filter(function (file) {
 		return fs.statSync(path.join(srcpath, file)).isDirectory()
 	})
}

class Theme {
  add (params) {
		 	var spinner = ora('Cloning themes').start()
		 		let repo = params
		 		var slash = repo.indexOf('/')
		 		var dirName = repo.substring(slash + 1, repo.length)
		 		var requestHeader = 'https://github.com/'
		 		var path = './themes/'
		 		var dir = path + dirName

		 		if (!fs.existsSync(dir)) {
		 			fs.mkdirSync(dir)
		 		}
		 		git.clone(requestHeader + repo, dirName).exec(() => {
		 			spinner.succeed()
		 			console.log('👍   Success! Make sure to add   ' + dirName.underline + ' to theme in your _config.yml')
		 		})
    return this
	 }

	 list () {
		 	var themePath = process.cwd() + '/themes'
		 	var themes = getDirectories(themePath)
		 	console.log()
		 	console.log('Themes:')
		 	console.log()

		 	for (var i = 0; i < themes.length; i++) {
		 		console.log('	- ' + themes[i])
		 	}

    return this
	 }
}

module.exports = function () {
 	return new Theme()
}
