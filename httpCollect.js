var http = require('http');
var url = process.argv[2];
var fullData = "";
http.get(url,function(response) {
	response.setEncoding('utf8');
	response.on("data", function(data){
		fullData += data;
	});
	response.on("end", function () {
		console.log(fullData.length);
		console.log(fullData);
	});
});