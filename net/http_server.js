//node输出http是以流的形式呈现，res.write会向流中写入数据，并且即刻传给浏览器，
//客户端得到这些阶段性的数据之后，将会如何处理取决于客户端的逻辑，
//比如，浏览器遇到闭合的块级标签则会立即解析，闭合的行级标签或其他任何内容则暂不解析，
//res.end则会通知客户端此次数据发送完毕，请浏览器立即完成处理。
//bigpipe的工作基础就是http渐进流，先输出页面框架，继而输出框架内部的填充数据。

var http = require('http');

var server = http.createServer(function(req, res){
	res.write(
		'<div>'+
		(new Date())+
		'<br/>'+
		'body content is present and will be appended with other tags in a few seconds'+
		'<br/>'+
		'on condition that it has to be a closed block tag'+
		'</div>');
	setTimeout(function(){
		res.write('<h3>surprise</h3>')
		res.end('<script>alert("script tag")</script>');
	}, 3000);
});

server.listen(8000, function(){
	console.log('server starts successfully!');
});