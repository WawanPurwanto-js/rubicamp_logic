function sum() {
  var s = 0;
  for (var i=0; i < arguments.length; i++) {
      s += arguments[i];
  }
  return s;
}

console.log(sum(1,2,7));         // 10
console.log(sum(1, 4));       // 5
console.log(sum(11 ));   // 11
console.log(sum(10,3,6,7,9));  //35