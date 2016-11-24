var cmd = require('node-cmd');
var colors = require('colors');
var cwdPackage = process.cwd() + '/package.json';
var pack = require(cwdPackage);

var add = function (params) {
	var pFlag = params.indexOf('-p');
	params.splice(pFlag, 1);
	var installList = '';
	for (var i = 0; i < params.length; i++) {
		installList += params[i] + ' ';
	}
	cmd.get('npm install --save ' + installList, function (data) {
		if (!data) {
			console.log(colors.red('⚠️ Uh Oh! Something went wrong check npm-debug.log for more info'));
			process.exit();
		}
		console.log(data);
		console.log('👍 Success! Make sure to add your configuration in _config.yml');
	});
};

var list = function () {
	var dependencies = pack.dependencies;
	var hexoPlugins = [];

	for (var packages in dependencies) {
		var packageString = String(packages);
		if (packageString.indexOf('hexo') !== -1) {
			hexoPlugins.push(packageString);
		}
	}
	for (var i = 0; i < hexoPlugins.length; i++) {
		console.log(hexoPlugins[i]);
	}
};
exports.list = list;
exports.add = add;
