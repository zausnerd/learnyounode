var path = process.argv[2];
var fs = require('fs');

fs.readFile(path,function(err, data){
	if (err) {
		console.error(err);
	}
	else {
		console.log(data.toString().split('\n').length - 1);
	}
});