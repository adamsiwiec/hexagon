#!/usr/bin/env node

var pack = require("./package.json");
var theme = require('./theme.js');
var plugin = require('./plugin.js');

// Display Version
if (process.argv.indexOf('--version') != -1 || process.argv.indexOf('-v') != -1) {
    console.log(pack.version);
    process.exit();
}

console.log('');
console.log('⬡'.cyan);
console.log('');

// Remove unnecessary arguments
var params = process.argv;
params.splice(0, 1);
params.splice(0, 1);

if (params.indexOf('list') !== -1) {

    if (params.indexOf('themes') !== -1) {
        theme.list();
        process.exit();

    } else if (params.indexOf('plugins') !== -1) {
        plugin.list();
        process.exit();
    } else {
        console.log('Themes:'.cyan);
        console.log('');
        theme.list();
        console.log('');
        console.log('Plugins:'.cyan);
        console.log('');
        plugin.list();
        process.exit();

    }

}

// Check to make sure 1 flag is provided

if (params.indexOf('-p') != -1 && params.indexOf('-t') != -1) {
    console.log("Please only provide a '-p' or '-t' flag");
    process.exit();
} else if (params.indexOf('-p') === -1 && params.indexOf('-t') === -1) {
    console.log("Please provide a '-p' or '-t' flag");
    process.exit();
}

// Check for plugin

if (params.indexOf('-p') != -1) {
    plugin.add(params);

}
// Check for theme
else if (params.indexOf('-t') != -1) {
    theme.add(params);
}
