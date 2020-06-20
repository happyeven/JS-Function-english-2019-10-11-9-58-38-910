function reverseString(message){
  // wirte your code here
  if(!message){
		console.log('null');
		return null;
  }
  var rev = '';
  var length = message.length;
  for(var i = length -1 ; i >=0;i --){
	  rev += message[i];
  }
  console.log(rev);
  return rev;
}
reverseString('hello'); // should return 'olleh'