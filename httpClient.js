var http = require('http');
var url = process.argv[2];
http.get(url, function(response) {
	//allows you to set encoding of response to be string
	response.setEncoding('utf8');
	//response is an instance of http.IncomingMessage class
	//.on allows you to bind certain objects 
	response.on('data',function(data){
		console.log(data);
	});
	response.on('error',function(err){
		console.error(err);
	});
});