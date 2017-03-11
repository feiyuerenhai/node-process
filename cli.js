#!/usr/bin/env node
//npm link和npm . install -g 都能将当前包按照package.js中的字段bin所指信息注册为全局命令
//bin字段是一个对象，如，{myCommand: './cli.js'}
//要使用全局cli命令，还必须在cli.js文件首行加入以上字符 #!/usr/bin/env node
//领头的#!被称为shebang标记，全局命令将打开该文件并以shebang标记之后的参数进入执行环境
console.log('now in myown cli command');
//启动命令的时候还可以附带参数，这些参数都可以通过process.args获得
//如 smart a -x --y ---z
console.log(process.argv);
//命令行参数处理请使用模块yargs
//如果要去除该全局命令，请使用npm unlink