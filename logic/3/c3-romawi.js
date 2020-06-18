//Romawi
//challenge #3
//buatlah sebuah fungsi yang dapat mengkonversi number 
//menjadi huruf romawi
//Assignment,function

function romawi(n)//deklarai fungsi romawi dan parameter n
{
// //write code

var des = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //variable untuk angka desimal
var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; //varibale untuk kamus romawi
var has =''; //variable untuk hasil

for(let index = 0; index < des.length; index++) 
//menggunkan for dan while untuk method
//untuk let index sama dengan 0 maka index kurang dari panjang variable des maka index ditambah 1
{
    while(des [index] <= n) {
      //sementara variable des index <= parameter n
      has += rom[index];
      //variable has += variable rom index
      n -= des [index];
      //parameter -= variable des indexadd
    }
  }
  return has;
  //kembali ke nilai varibale has.
}
console.log("Script Testing untuk Konversi Romawi\n"); //perintah print 
console.log("______|___________|______");  //perintah print 
console.log("4     |IV         |", romawi(4)); //perintah print  
console.log("9     |IX         |", romawi(9));  //perintah print
console.log("13    |XIII       |", romawi(13)); //perintah print
console.log("1453  |MCDLIII    |", romawi(1453)); //perintah print
console.log("1646  |MDCXLVI    |", romawi(1646)); // perintah print 



//romawi
//cahalenge 3
//buatlah sebuah fungsi yang dapat
// mengkonversi number menjadi huruf romawi

//  function romawi(n){
// // //write code

// const des =[1000,900,500,400,100,90,50,40,10,9,5,4,1];
// // var des = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//  const rom  =['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
// //var rom =  ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
//  const has = '';
// // var has ='';

//  //variable untuk angka desimal

//  for(var index = 0; index < des.length;index++);
// // for(let i = 0; i < des.length; i++); 
//  {while (des[index] <=n){
// // {while(des [i] <= n) {
//    has += rom[index];
// //    has += rom[i];
//    n -= des[index];
// //      n -= des [i];
//  }
//  }
//  return has ;
//  }
//  console.log("Script Testing untuk Konversi Romawi\n");
// console.log("input    | expected     | result");
// console.log("---------|--------------|-------");
// console.log("4        | IV           |", romawi(4));
// console.log("9        | IX           |", romawi(9));
// console.log("13       |XIII          |", romawi(13));
// console.log("1453     |MCDLIII       |", romawi(1453));
// console.log("1646     |MCDXCLVI      |", romawi(1646));


 

  
  
     
//     }
//   }
//   return has;
//   //kembali ke nilai varibale has.
// }
// console.log("Script Testing untuk Konversi Romawi\n"); //perintah print 
// console.log("______|___________|______");  //perintah print 
// console.log("4     |IV         |", romawi(4)); //perintah print  
// console.log("9     |IX         |", romawi(9));  //perintah print
// console.log("13    |XIII       |", romawi(13)); //perintah print
// // console.log("1453  |MCDLIII    |", romawi(1453)); //perintah print
// console.log("1646  |MDCXLVI    |", romawi(1646)); // perintah print 