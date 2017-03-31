var server = require('http').createServer(function(req, res){
	res.end('子进程获得了tcp句柄，并利用该句柄侦听到的连接socket交给httpServer\n');
});

process.on('message', function(msg, tcp){
	if(msg=='server'){
		tcp.on('connection', function(socket){
			server.emit('connection', socket);
		});
	};
});
