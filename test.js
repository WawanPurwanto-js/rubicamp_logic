/*j = "tes"
console.log(j);
*/

/* var x = "joh doe";
console.log(x);
*/

/* var carName1 ="Volvo xc60";
var carName2 ="Volvo c60";
console.log(carName1 +" " + carName2); */

/*var answer1 = "its a alright";
var answer2 = "he is called 'Johny'";
var answer3 = 'he is called"Johny"';
console.log(answer1 + " " + answer2 + " " + answer3); */

/*var txt="abdcakdgirhgiwhgehg"
console.log(txt.length); */

/* var x = "we are so-called \" vikings\" from the nort";
console.log(x); */

/*var x = 'it\'s alright.';
console.log(x); */

/*var x = "the caracter \\ is called backslash."
console.log(x);  */

/*var x = "hello dolly!";
console.log(x); */

//var x = "hello \ dolly!";
//console.log(x);

//var x ="jo";//
//var y = new String("Jo");//
//console.log(typeof x + " "+ typeof y);//

//var x = "JO";
//var y = new String("JO");
//console.log(x==y);

//var x = "JO";
//var y = new String("JO");
//console.log(x===y);

//var x = new String("John");
//var y = new String ("John");
//console.log(x==y);

/*function isPrime(num) {
    if (num <= 1) { 
        return false;
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; 
            }
        }
        return true;
    }  
}

//console.log(isPrime(2));*/

function isPrime(num) {

    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
  
  console.log(isPrime(4));