// function cekprima(n) {

//     for (i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// //console.log(cekprima(3));
// // function isprima(x) {
//     var index = 0
//     var count = 2
//     while (index < x) {
//         if (cekprima(count) == true) {
//             index++
//         }
//         count++
//     } 
//     return count - 1
// }

// console.log(isprima(4));
// console.log(isprima(500));
// console.log(isprima(37786));

// // function indexPrime(param1){
//     //write code

//         for (i = 2; i < param1; i++)
//         {
//             if (param1 % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     //console.log(cekprima(3));
//     function isprima(x) {
//         var index = 0
//         var count = 2
//         while (index < x) {
//             if (indexPrime(count) == true) {
//                 index++
//             }
//             count++
//         } 
//         return count - 1
//     }
    
// console.log(isprima(4)); //result =7
// console.log(isprima(500)); //result =3571
// console.log(isprima(37786));//resul = 450881

// // function angkaPrima(angka) {
//     var Hasil=true;  
//       for(i=2;i<angka;i++){
//       if(angka%i===0){
//           Hasil=false;
//           }
//       }
      
//       return Hasil;
//     }
    
//     // TEST CASES
//     console.log(angkaPrima(4)); // true
//     console.log(angkaPrima(500)); // true
//     console.log(angkaPrima(37786)); // false
   
// let n =0;
// while (n <3){
//     n++;
// }
// console.log(n);

// const nama = "iqbal";
// nama = "niyaz";
// console.log(nama);

// function sum(){
//     const y = 0;
//     for( b=0;b < arguments.length;i++){
//         y = y + arguments[b]
//     }
//console.log(y)}
// sum(1,2,7);
// sum(1,4);
// sum(11);
// sum(10,3,6,7,9);

// function sum()
// {
//     //writecode
//     var y = 0;
//     for(let i = 0 ; i < arguments.length; i++){
//         y  = y + arguments[i]
//     }


// console.log(y)
// }
// sum(1,2,7);
// sum(1,4);
// sum(11);
// sum(10,3,6,7,9);



// var sleepCheck = function(numHours) {
//     if (numHours >= 5) {
//         return "You're getting plenty of sleep! Maybe even too much!";
//     } else {
//         return "Get some more shut eye!";
//     }
// }
// console.log(sleepCheck(10));

// function sum(){
//     var y = 0;
//     for (let i = 0; i < arguments.length; i++){
//         y = y + arguments[i]
//     }
//     console.log(y);    }
//     sum(6,2);

// function sum(){
//     var y = 0;
//     for (let i = 0; i < arguments.length; i++)
//     {
//         y = y + arguments[i]}
//     console.log(y);}
// sum(1,1);

// function sum(){
//     var x = 0;
//     for  (let i = 0; i < arguments.length;i++)
//     {
//      x = x + arguments[i]
// }
// console.log(x)
// }
// sum(1,2,3)
// // var i = 0;
// for (let i = 0; i < 11; i++) {
//     console.log(i);}

// console.log('halo');


// function sum(){
//     var y = 0;
//     for (let index=0;index<arguments.length; index++){
//         y = y + arguments[index]
//     }
// console.log(y)
// }
// sum(2,3)

// console.log('halo')

// const fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++) {
//     if (i % 15 === 0) {
//     console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//     console.log('Fizz');
//     } else if (i % 5 === 0) {
//     console.log('Buzz');
//     } else {
//     console.log(i);
//     }
//     }
//     };
//     fizzBuzz(20);


 
function cekPrima(n){
    var max = Math.sqrt(n);
    for (var i = 2; i <= max; i++) {
      if(n % i == 0)
      return false;
    }
    return true;
  }
  
  function indexPrima(param1){
    var prim = [];
    var number = 3;
    if(param1 > 1) prim.push(1);
    while(prim.length != param1){
      if(cekPrima(number)){
        prim.push(number);
      }
      number++;
    }
    return prim[prim.length - 1];
  }
  
  console.log(indexPrima(4));
  console.log(indexPrima(500));
  console.log(indexPrima(37786));