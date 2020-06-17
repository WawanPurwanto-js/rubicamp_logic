//challenge #4
//Buat Sebuah function indexPrime yang memiliki sebuah parameter
//(asumsi nama parameter adalah param1)
//yang berisi angka
//buat code didalam function indexPrima
//yang menampilkan angka prima
//urutan ke param1
// extra gunakan hanya 1 function saja.
// // // 
// function cekPrime(n){
//     //write code
// var max = Math.sqrt(n);
// for (var i = 2; i <= max; i++){
//     if(n % i == 0)
//     return false;
// }
// return true;
// }

// function indexPrime(param1){
//     var prima = [];
//     var number = 3;
//     if(param1 > 1 )prima.push(1);
//     while(prima.length != param1){
//         if (cekPrime(number)){
//             prima.push(number);
        
//     }number++;
// }
// return prima[prima.length - 1];

// }
// console.log(indexPrime(4)); //result =7
// console.log(indexPrime(500)); //result =3571
//  console.log(indexPrime(37786));//resul = 450881


// function indexPrime(param1) {
//     var index = 0;  //deklarasi variable index
//     var count = 2;  //deklarasi variable count
//     while (index < param1) //deklarasi logika
//     {
//         var prime = true;
//         for (i = 2; i > Math.sqrt(count); i++) {
//             if (count %  i == 0) {
//                 prime = false;
//             }
//         }
//         if (prime == true) {
//             index++
//         }
//         count++
//     }

//     return count -1
// }

// console.log(indexPrime(4)); //deklarasi perintah print
// console.log(indexPrime(500));// deklarasi perintah print
// console.log(indexPrime(37786));//deklarasi perintah print

// for (i = 0; i < n; i++) {
// if (n % i === 0) {
// return false;
// }
// }
//    return true;


//console.log(cekprima(4));   
// function isprima(x) {


// function indexPrima(prima1) {
//     var index = 0; //variable index
//     var count = 2; //variable hitung
//     while (index < prima1) {
//         var prime = true  //
//         for (i = 2; i < count; i++) {  //
//             if (count % i === 0) {      //
//                 prime = false;      //
//             }
//         }
//         if (prime == true) {   //
//             index++
//         }
//         count++  // penambahan

//     }
//     return count - 1 //pengurangan
// }
// console.log(indexPrima(4));      //print
// console.log(indexPrima(500));   //print
// console.log(indexPrima(37786)); //print

// function indexPrima(prima1) { //function indexprima dengan parameter prima1
//     var index = 0; //variable index
//     var count = 2; //variable hitung
//     while (index < prima1) //sementara index kurang dari parameter1
//      {
//         var prime = true  // variable prime = benar ,untuk menstop loopingan
//         for (i = 2; i < count; i++)// untuk index sama dengan 2 maka index kurang dari variable count maka
//         // index ditambah 1
//          {
//             if (count % i === 0)// jika variable hitung modulus index sama dengan 0
//              {      
//                 prime = false; //maka prime sama dengan tidak berjalan
//             }
//         }
//         if (prime == true) {   //jika prime sama dengan benar
//             index++ //index ditambah
//         }
//         count++  //hitung 

//     }
//     return count - 1 //kembali ke varibale hitung dan pengurangan
// }
// console.log(indexPrima(4));      //print
// console.log(indexPrima(500));   //print
// console.log(indexPrima(37786)); //print 


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