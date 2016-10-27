var http = require('http');

var url = require('url');

function start(route) {
	function onRequest(request,response){
		var pathName = url.parse(request.url).pathname;
		console.log('request for ' + pathName + 'received.');

		route(pathName);
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("hello world");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log('server has started.');

}

exports.start = start;
