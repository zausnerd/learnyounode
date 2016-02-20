var dir = process.argv[2];
var extension = process.argv[3];
var listFilter = require('./listFilter')                     
listFilter(dir, extension, function(err, filteredList){
	if (err == null) {
		filteredList.forEach(function(name) {
			console.log(name);
		});
	}
	else {
		console.log("error enocountered");
	}	
});