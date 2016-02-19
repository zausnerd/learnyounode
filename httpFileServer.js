var port = process.argv[2];
var fileLocation = process.argv[3];
var http = require('http');
var fs = require('fs');


//'request' is the parameter that takes in request object 
var server = http.createServer(function(request, response) {
	//create a new readStream object
	var contentStream = fs.createReadStream(fileLocation);
	contentStream.on('open', function() {
		contentStream.pipe(response);
	});	
});
server.listen(port);