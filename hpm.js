#!/usr/bin/env node
var cli = require('commander');
var colors = require('colors');
var theme = require('./theme.js');
var plugin = require('./plugin.js');

var pack = require('./package.json');

console.log('');
console.log(colors.cyan('⬡'));
console.log('');

cli
	.version(pack.version)
	.option('-p, --plugin [plugins]', 'Install a plugin[s] from npm', function (plugins) {
		plugin.add(plugins);
	})
	.option('-t, --theme [themes]', 'Install a theme[s] from Github', function (themes) {
		theme.add(themes);
	})
	.option('-l, --list', 'List all themes and plugins', function() {
		plugin.list();
		theme.list();
	})
	.parse(process.argv);
