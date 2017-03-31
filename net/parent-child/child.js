//当前进程侦听消息，
process.on('message', function(msg){
	console.log('CHILD gets:', msg);
});

setTimeout(function(){
	process.emit('message', 'an emit from child env!');
	process.send('xyz');
	//
	// process.send('die');
	// process.kill();
}, 1000);

// process.on('uncaughtException', function(){
// 	console.log('child died...')
// });