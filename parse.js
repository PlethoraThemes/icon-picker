var fs       = require('fs');
var readline = require('readline');
var args     = process.argv.slice(2);
var regexp   = /id:\s+(.*)/gmi;

if ( args.length ){

	var read = readline.createInterface({

		input    : fs.createReadStream( args[0] ),
		output   : process.stdout,
		terminal : false

	});

	read.on('line', function(line) {

	    var match = regexp.exec(line);

	    // if ( match) console.log( match[1] );

	});

}

fs.writeFile("test", "Hey there!", function(err) {

	if(err) {
		console.log(err);
	} else {
		console.log("The file was saved!");
	}

});