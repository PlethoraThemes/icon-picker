// USAGE: node parse.js icons-X.X.X.yml
// YAML Icon Font List: https://github.com/FortAwesome/Font-Awesome/blob/master/src/icons.yml

var fs          = require('fs');
var readline    = require('readline');
var args        = process.argv.slice(2);
var regexp      = /id:\s+(.*)/gmi;
var fontawesome = [];

if ( args.length ){

	var read = readline.createInterface({

		input    : fs.createReadStream( args[0] ),
		output   : process.stdout,
		terminal : false

	});

	read.on('line', function(line) {

	    var match = regexp.exec(line);

	    if ( match){

		    fontawesome.push( '"' + match[1] + '"' );

	    } 

	});

	read.on('close', function(){

		fs.writeFile( "cheatsheet.txt", fontawesome.sort().join(",\n") + "\n", function(err) {

			if ( err ) {
				console.log(err);
			} else {
				console.log("The file was saved!");
			}

		});

	});

}

