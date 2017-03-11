//
process.stdin.resume();
process.stdin.on('data', function(chunk){
	//按下回车键就得到一次chunk，所以，chunk结尾处包含2个字符 \n
	chunk = chunk.slice(0, -2);
	//真正的输入其实是这里
	console.log('-> '+chunk);
	if(chunk==''){
		console.log('---------->');
		process.stdin.emit('myCustomizedEndEvent');
	};
});
process.stdin.on('myCustomizedEndEvent', function(chunk){
	process.stdin.pause();
	console.log('输入结束，即将退出程序')
	setTimeout(function(){
		//unix程序，退出码，正常退出为0，非正常退出为1
		process.exit(0);
	}, 3000)
});
process.on('exit', function(){
	console.log('占用内存: ', process.memoryUsage());
	console.log('退出成功退出码为: ', process.exitCode);
});