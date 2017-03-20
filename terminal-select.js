//使用终端绘制选择框

var stdin = process.stdin;
var readline = require('readline');

function render(opt){
	var title = 'what is your dream?';
	var options = ['pilot', 'engineer'];
	var symbol = '✔';
	return title+'\n'+(options.map(function(i, index){
		return index==opt?symbol+' '+i:'  '+i;
	}).join('\n')+'\n');
};

function clear(){
	//光标回到当前行的0位置处
	readline.cursorTo(stdin, 0);
	//向上回3行
	readline.moveCursor(stdin, 0, -3);
	//以下内容全部清空
	readline.clearScreenDown(stdin);
};

stdin.setRawMode(true);

stdin.resume();

stdin.setEncoding( 'utf8' );

stdin.on('data', function(key){
  if(key === '\u001b[A'){
  	//up
  	clear();
  	process.stdout.write( render(0) )
  }else if(key === '\u001b[B'){
  	//down
  	clear();
  	process.stdout.write( render(1) )
  }else if(key === '\u001b[C'){
  	//left
  	process.exit(1);
  }else if(key === '\u001b[D'){
  	//right
  	process.exit(1);
  };
});