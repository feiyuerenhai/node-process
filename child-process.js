var exec = require('child_process').exec;
exec('mkdir test && echo made a folder', function(err, stdout, stderr){
	console.log(stdout, stderr);
});
//如果可以直接调用命令行参数，功能就无敌了，一定也可以脚本动态写出全局命令
//包装更完善功能更强大的模块有shelljs和yargs
//yargs.command可以写全局命令