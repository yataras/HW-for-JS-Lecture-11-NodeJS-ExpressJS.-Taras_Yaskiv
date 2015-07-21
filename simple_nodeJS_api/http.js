var http = require("http");

http.createServer(function (request, response) {
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.end('Hi, noddy Node!');
}).listen(3000);
console.log('Listening on port 3000 with simple nodeJS...');