var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response){
	var urlParsed = url.parse(request.url, true);
	var urlDate = new Date(urlParsed.query['iso']);
	if (urlParsed.pathname == '/api/parsetime') {
		
		var timeObj = {hour: urlDate.getHours(), 
					minute: urlDate.getMinutes(), 
					second: urlDate.getSeconds()};
	}
	else {
		var timeObj = { unixtime: urlDate.getTime() };
	}
	response.writeHead(200, {'Content-Type':'application/json'});
	response.write(JSON.stringify(timeObj));
	response.end();
});
server.listen(process.argv[2]);