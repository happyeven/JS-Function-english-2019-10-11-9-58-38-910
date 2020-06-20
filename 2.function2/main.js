function palindrome(message){
  if(!message){
	  console.log("false");
	  return false;
  }
  var len = message.length;
  var mid = len / 2 ; // 左边检测的最右index
  len -= 1; //把长度变为message最右边字符的index
  for(var i = 0 ; i < mid ; i++){
	  if(message[i] != message[len - i]){
		  console.log("false");
		  return false;
	  }
  }
  console.log("true");
  return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true