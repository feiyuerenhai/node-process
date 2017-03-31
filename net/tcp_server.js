var server = require('net').createServer(function(socket){

	socket.write('你已经连接到tcp_server了，请继续输入吧\n');

	socket.on('data', function(data){
		console.log('> '+data.toString());
	});

	socket.on('end', function(){
		console.log('连接断开');
	});
});

server.listen(8286, function(){
	console.log('tcp_server开始侦听');
});

//使用 telnet 127.0.0.1 8286 连接