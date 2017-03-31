//node中，侦听某个对象并且在该对象上触发事件
var Event = require('events');
var evt = new Event();
evt.on('msg1', function(msg){
	console.log(msg);
});
evt.emit('msg1', 'i_am_msg');

//启动一个子进程
var child = require('child_process').fork('child.js');
//侦听该子进程，并且在该子进程上触发事件
child.on('message', function(msg){
	tellParent(msg);
});
var tellParent = function(msg){
	console.log('PARENT gets: '+msg);
	// if(msg=='die'){
	// 	process.exit();
	// };
};
// process.on('exit', function(){
// 	console.log('parent died...')
// });
//理所当然，child对象能收到消息
child.emit('message', 'an emit from parent env!');
//但是send方法并不是简单封装emit
//send方法：找到该进程对象的pid，根据pid找到v8实例，在子进程运行环境中触发emit
child.send('abc');
//所以，emit与send的区别，emit是在对象自身触发事件，send是将触发事件发送给了引用进程的运行环境，让它自己触发