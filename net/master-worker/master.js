var child = require('child_process').fork('./worker.js');

//进程之间可以发送的数据，本质上只能是字符串
//即便发送对象，发送机制也会对该对象进行检查
//只有特定类型的对象才能发送，比如Server、Socket、Native句柄对象
//发送Server对象本质上也是将Server对象句柄序列化之后发送
//对象句柄是内存中一个对象对的引用，是一连串的整数
// child.send('server', tcp);

//父子进程的通信都是通过IPC管道，底层是node_libuv

//所以，由此可见，父进程可以向子进程传递一个Socket句柄

//node中使用 net、dgram、http、https分别创建tcp、udp、http和https服务
var tcp = require('net').createServer();
tcp.listen(1314, function(){
	console.log('here comes a request');
	child.send('server', tcp);
	//必须关闭
	tcp.close();
});
process.on('exit', function(){
	console.log('父进程已经将系统tcp句柄传递给子进程，然后自己主动关闭连接，释放句柄给子进程，之后，父进程完全退出了...');
});
process.exit();
// console.log(server.constructor);
// Server

//现行的很多多进程nodejs服务端框架，是这样做的：
//先在主进程中启动一个Socket服务侦听某个特定端口，将Socket对象句柄传递给多个子进程，然后在父进程中关闭Socket连接
//子进程收到Socket句柄之后，又重新开始Socket侦听
//这样以来，然后，父进程就可以直接关闭了

//所以，这意味着，父进程只用于拉起一个tcp句柄，然后死掉，子进程引用这个tcp句柄，将得到的tcp请求交给自己的httpServer