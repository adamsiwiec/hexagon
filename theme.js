var path = require('path');
var fs = require('fs');
var colors = require('colors');

try {
	var git = require('simple-git')('./themes');
} catch (err) {
	console.log();
	console.log(colors.red('⚠️ Please move to your projects home directory'));
	process.exit();
}

function getDirectories(srcpath) {
	return fs.readdirSync(srcpath).filter(function (file) {
		return fs.statSync(path.join(srcpath, file)).isDirectory();
	});
}

var add = function (params) {
	for (var i = 0; i < params.length; i++) {
		var repo = params[i];
		var slash = repo.indexOf('/');
		var dirName = repo.substring(slash + 1, repo.length);
		var requestHeader = 'https://github.com/';
		var root = './themes/';
		var dir = root + dirName;

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		git.clone(requestHeader + params[i], dirName).then(function () {
			console.log('👍 Success! Make sure to add   ' + dirName.underline + ' to theme in your _config.yml');
		});
	}
};

var list = function () {
	var themePath = process.cwd() + '/themes';
	var themes = getDirectories(themePath);
	console.log();
	console.log('Themes:');
	console.log();

	for (var i = 0; i < themes.length; i++) {
		console.log('	- ' + themes[i]);
	}
};

exports.list = list;
exports.add = add;
