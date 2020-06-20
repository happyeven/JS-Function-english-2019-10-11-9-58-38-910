/**
 * 该方法可对输入的字符串中的字符按照字母表的顺序排序，当输入的字符串全为大写或者全为小写时，会输出排序后的字符串，
 *当输入的字符串包含大小写时，会先将大写的字母排序，然后拼接上小写字母的排序
 */
function alphabetSort(message){
  // wirte your code here
  var arr = message.split("");
  arr.sort();
  var ret = arr.join("");
  console.log(ret)
  return ret;
}
alphabetSort('hello'); // should return 'ehllo'