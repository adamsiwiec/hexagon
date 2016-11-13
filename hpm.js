#!/usr/bin/env node

var cmd = require('node-cmd');
var pack = require("./package.json");
var fs = require('fs');
var git = require('simple-git')('./themes');
var colors = require('colors');


if (process.argv.indexOf('--version') != -1 || process.argv.indexOf('-v') != -1) {
    console.log(pack.version);
    process.exit();
}

console.log('⬡'.cyan);
console.log('');

// Remove unnecessary arguments
var params = process.argv;
params.splice(0, 1);
params.splice(0, 1);

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
    var pFlag = params.indexOf('-p');
    params.splice(pFlag, 1);
    var installList = "";
    for (i = 0; i < params.length; i++) {

        installList += params[i] + " ";
    }
    cmd.get('npm install --save ' + installList, function(data) {

        if (!data) {
            console.log("⚠️ Uh Oh! Something went wrong check npm-debug.log for more info".red);
            process.exit();
        }
        console.log(data);
        console.log('👍 Success! Make sure to add your configuration in _config.yml');
    });

}
// Check for theme
else if (params.indexOf('-t') != -1) {

    var tFlag = params.indexOf('-t');
    params.splice(tFlag, 1);
    for (i = 0; i < params.length; i++) {
        var repo = params[i];
        var slash = repo.indexOf('/');
        var dirName = repo.substring(slash + 1, repo.length);
        var requestHeader = "https://github.com/"
        var root = './themes/'
        var dir = root + dirName;

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        git.clone(requestHeader + params[i], dirName);
        console.log('👍 Success! Make sure to add   ' + dirName.underline + ' to theme in your _config.yml');

    }
}
