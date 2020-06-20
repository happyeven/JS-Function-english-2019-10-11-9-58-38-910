/**
*在此算法中，只有是以字母开头的字符串才可以算一个单词，从而避免出现输入为'Good morning, , I love JavaScript.'时，
*会返回6（实际上只有五个，如果只简单将输入的字符串按空格分为数组的话，会返回6）的问题
*/
function countWords(message){
  var arr = message.split(" ");
  var num = 0;
  for( var i in arr){
	  if(beginWithLowerCase(arr[i]) || beginWithUpperCase(arr[i])){
		  num++;
	  }
  }
  console.log(num);
  return num;
}
function beginWithLowerCase(word){
	if(word[0] >= 'a' &&  word[0] <= 'z' && word.length >0){
		  return true;
	  }
	  return false;
}
function beginWithUpperCase(word){
	if(word[0] >= 'A' &&  word[0] <= 'Z' && word.length >0){
		  return true;
	  }
	  return false;
}
countWords('Good morning, I love JavaScript.'); // should return 5