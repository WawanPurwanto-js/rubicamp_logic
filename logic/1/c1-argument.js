// //sum
// //challenge #1
// //buatlah sebuah fungsi yang dapat menjumlahkan semua parameter
// //yang dimasukan kedalam fungsi tersebut.
// //keyword arithmetic,assignment,function,argument.

// function sum() //function penjumlahan

// {
//     //writecode 
//        var y = 0 // wadah untuk deklarasi variabel
//        //menggunakan pengulangan for
//        // jika let index sama dengan 0 maka index lebih kecil dari
//        // panjang argument
//        //maka index di tambah 1 
//        for (let i = 0; i < arguments.length; i++) // deklarasi argument
//      {
//         // maka variable y sama dengan variable y assignment argument index
//           y = y + arguments[i] 
//        }

// console.log(y) // perintah print menampilkan variabel
// }
// sum(1,2,7); // aritmatic
// // sum(1,4); //aritcmatic
// // sum(11)  // aritmatic
// // sum(10,3,6,7,9); // aritmatic

//buat lah sebuah fungsi yang dapat menjumlahkan
//semua parameter yang di masukan kedalam fungsi tersebut

// function sum(){
// //write
// var y = 0;
// for (let i = 0; i < arguments.length;i++)
//  y = y + arguments[i];

//  console.log(y);

// }
// sum(0,2);
// sum(1,2,7);
// sum(1,4);
// sum(11);
// sum(10,3,6,7,9);

function sum() {

    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    console.log(total);
}
sum(1, 2, 3, 4, 5, 6)