// // //kaskus
// // //challenge#2
// // //buatlah sebuah function deret bilangan kelipatan 3
// // //yang mengembalikan sebuah array 
// // //dengan panjang array yang dinamis
// // //sehingga fungsi tersebut akan menerima parameter
// // //yang akan menjadi nilai dari panjang array yang akan dikeluarkan
// // //Deret bilangan ini mengikuti aturan sebagai berikut:
// // //1 yang apabila habis dibagi dengan 5 cetak "KAS"
// // //2 dan apabila habis dibagi dengan 6 cetak "KUS"
// // //3 dan apabila bisa dibagi oleh angka 5 dan 6 cetak "KASKUS"
// // //keyword MOdulus,array


// function deretKaskus(n) //fungsi deretkaskus
// {
//     //writecode

//     var  x = []; //membuat variable x untuk  array kosong untuk wadah
//     var y = 0;    //membuat variable y untuk array panjang dinamis

//     for (let i=0; i < n; i++) //menggunakan pengulangan for looping
//     {
//     y += 3; // variable y += kelipatan 3,6,9,12,15,18,21,24

//     if (y%5==0 && y%6==0) //deklarasi modulus
//     // menggunakan method if atau jika
//     // jika variable y modulus 5 nilai yang sama valeu berbeda 0 
//     // maka variable y modulus 6 nilai yang sama dengan 0
//     //atau variable
//         {x.push("KASKUS");
//         //variable x memasukan KASKUS
//     }else if(y%6==0)
//     //jika bukan maka variable y  modulus 6 sama dengan 0
//     {
//         x.push("kus");
//         ////variable x memasukan KUS
//     }else if(y%5==0){
//         //jika bukam maka variable y modulus 5 sama dengan 0
//         x.push("kas");
//         //variable x memasukan kas
//     }else{
//         //lain
//         x.push(y)
//         //variable x memasukan variable y
//     }

// }
// return x; 
// //nilai kembali ke variable x
// }
// console.log(deretKaskus(10)); //deklarasi untuk menampilkan print dan parameter 10

//buatlah sebuah function deret bilangan kelipatan 3
//yang mengembalikan sebuah array dengan panjang array
//yang dinamis
//sehingga fungsi tersebut akan
//menerima parameter number yang akan menjadi nilai
// dari panjang array yang akan di keluarkan
// 1 apabila habis dibagi dengan 5 cetak "Kas"
// 2 dan apabila habis dibagi dengan 6 cetak "Kus"
// 3 dan apabila habis di bagi 5 dan 6 cetak "Kaskus"

// function deretKaskus(n){
//     //writecodde

// // var x =[];  
//     var  x = [];
// // var y = 0;  
//      var y = 0;

// // for (let i = 0; i < n; i++);
// for (let i = 0 ; i < n; i++)

// //   {                                    
// {
// //        y += 3;                                   
//     y += 3;
// //   if (y%5== 0 && y %6==0)                
// if (y%5==0  && y %6==0)
// //    {x.push("KASKUS");                       
//  {x.push("KASKUS")
// //    }else if (y%6 == 0) 
//  }else if (y%6 == 0)
// //    {x.push("kus");
//  {x.push("kus");
// //    }else if(y%5==0){                            
//  }else if(y%5==0)
// //     x.push("kus")                   
//  {x.push("kas");
// //     }else{x.push(y)
//   }else{x.push(y)
// //       }                                         
//     }  
// }
// //          return x;                                       
//      return x; 
// }
// //       }  
// //  console.log(deretKaskus(10));     
//   console.log(deretKaskus(10)); 

// function deretKaskus(n)
// {  //writecode
// var x = []
// var y = 0
 
// for (let i = 0; i < n;i++)
//  {  y +=3;
//     if (y%5==0 && y%6==0){
//         x.push("KASKUS");
//     } else if (y%6==0){
//         x.push("KUS")
//     }else if (y%5==0){
//         x.push("KAS")
//     }else{x.push(y)}
// }return x;
 
// }
// console.log(deretKaskus(10));


// function deretKaskus(n){
//     //writecode
//     var x = [];
//     var y = 0 ;

//     for (let i = 0 ; i < n; i++)
//     {
//         y +=3;
//         if (y%5==0 && y%6==0){x.push("KASKUS")}
//         else if (y%5==0){x.push("KAS")}
//         else if (y%6==0){x.push("KUS")}
//         else{x.push(y)}
//     }return x;
// }

// console.log(deretKaskus(10));

  

// for (let i = 3 ; i <= 30;){
//     console.log(i);
//     i +=  3;
// }


// function kaskus(n){

// let hasil = [];
// for (let i = 3; i <= n * 3;   i *= 3){
// if (i% 5 == 0 && i%6 == 0 ){
//     hasil.push("KASKUS")
// }
// else if (i% 6 == 0 ){
//     hasil.push("KUS")
// }
//  else if (i% 5 == 0){ 
//    hasil.push("KAS")
// }else{
//     hasil.push(i);

// }
// }return hasil;  
// }
// console.log(kaskus(10)); 


function deretKaskus(n){
    var x = [];
    var y = 0;
    for (let i = 0; i < n;i++){
          y+=3;
        if (y%5==0 && y%6==0){
            x.push("KASKUS")
        }else if(y%5==0){
            x.push("KAS")
        }else if (y%6==0){
            x.push("KUS")
        }else {x.push(y)}
    }
    return x;
}
console.log(deretKaskus(10));