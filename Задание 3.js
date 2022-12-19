function reverseString(x){
  var reverseX="";
  for(i=x.length-1;i>=0;i--){
    reverseX += x[i];
  }
  return reverseX;
}
var res = reverseString("Hello")
console.log(res)