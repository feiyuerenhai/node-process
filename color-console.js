//console.log的小花招，会自动进行字符串拼接
console.log('the hero is %s', 'tony');
//然而，在底层，都是调用了process.stdout.write
process.stdout.write('hello my kitty\n');
//stdout本质上就是系统标准进程的输出流，所以，可以这样：
process.stdout.write('\x1b[33m    look i am yellow   \x1b[0m');
//注意，\x1b[ xx m是设置前景色指令，表示将输出设置为代号是33的颜色
//后面的\x1b[ 0 m表示将颜色再设回为正常的0色
//彩色输出就是这么回事儿啦
//有些模块是专门做色彩输出的
//var chalk = require('chalk');
//console.log(chalk.red('Text in red'));