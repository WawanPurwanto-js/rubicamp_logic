// //buat sebuah function yang menerima string
// //String tersebut merupakan suatu pola perhitungan dari
// //Beberapa bilangan namun
// //bilangannya itu sendiri tidak lengkap
// //dan tugasmu adalah menebak angka yang seharusnya, sehingga
// //apabila bilangan tersebut telah lengakp, maka akan
// //membentuk suatu pola perhitungan yang benar
// //keyword -
// //algoritma blluepost. nesterloop
// //coding return untuk performa dan untuk memberhentikan 


// function pola(str) {
//     split1 = str.split("*");
//     // console.log(split1);
//     angka3 = split1[1].trim()
//     //console.log(split2[1]);
//     split2 = split1[0].split("*");
//     // console.log(split2);
//     angka1 = split2[0].trim();

//     angka2 = split2[1].trim();
//     // console.log(angka1,angka2,angka3);

//     // let number = str.split('*');
//     // let split = number [1].split('=')
//     // let number1 = number[0].trim();
//     // let number2 = split[0].trim();
//     // let number3 = split[1].trim();
//     // console.log(number1,number2,number3);

//     // pola("42#3 * 188 = 80#24");


//      for (let index = 0; index < 10;index++) {
//          for (let j = 0; j < 10; j++) {
//           //console.log(index,j)
//          if (angka1.replace("#", index) * angka2 == angka3.replace("#",j));
//          { return(index,j);

//          }
//         }
//      }
// }

// console.log(pola("42#3 * 188 = 80#24"));
// //result [8,5]




// function pola (str){
//     var a = str.split(' ');
//     var save = [ ];
//     batas = (9);
//     for (let i = 0; i <= batas; i++){

//         for (let e = 0; e <= batas; e++){
//             if (a[0].replace('#' ,i) * a[2] == a[4].replace('#',e)){
//                  save.push(i,e)
//             }

//         }
//     }
//     return save
// }
// console.log(pola("42#3 * 188 = 80#24"));
// //result [8,5]
// console.log(pola("8#61 * 895 = 784#5"));
// //result [7,9]


// function pola(str) {

//     var pecahPola = str.split(' ');

//     var save = [];

//     for (var i = 0; i < 10; i++) {

//         for (var j = 0; j < 10; j++) {

//             if ((pecahPola[0].replace('#', i)) * pecahPola[2] == pecahPola[4].replace('#', j)) {

//                 save.push(i, j)

//             }

//         }

//     }

//     return save;

// }

// console.log(pola('42#3 * 188 = 80#204'));

// console.log(pola('8#61 * 895 = 78410#5'));


// function pola(str) {
//     var a = str.split(' ');
//     var save = [];
//     batas = (9);
//     for (let i = 0; i <= batas; i++) {

//         for (let e = 0; e <= batas; e++) {
//             if (a[0].replace('#', i) * a[2] == a[4].replace('#', e)) {
//                 save.push(i, e)
//             }

//         }

//     }

//     return save

// }


// console.log(pola("42#3 * 188 = 80#204")) // output [8, 5]
// console.log(pola("8#61 * 895 = 78410#5")) // output [7, 9]

function pola(str) {
    //write code
    var pecahPola = str.split(' ');
    var batasangka = [10];
    var simpan= [];

    for (var i = 0; i <= batasangka; i++) {
        for (var j = 0; j <= batasangka; j++) 
        {
            if (pecahPola[0].replace('#', i) * pecahPola[2]==pecahPola[4].replace('#',j)){
              simpan.push(i,j)
            }
        }
    }
            return simpan;

}

console.log(pola('42#3 * 188 = 80#204'));
console.log(pola('8#61 * 895 = 78410#5'));

// function pola(str) {
//     //write code
//     var polahapus = str.split (' ');
//     var simpan = [] ;

//     for (var i = 0; i < 10;i++){
//         for(var j = 0; j < 10;j++){
//             if (polahapus[0].replace('#',i)*polahapus[2]==polahapus[4].replace('#',j))
//             simpan.push(i,j)
//         }

//     }
// return simpan;
    
// }

// console.log(pola('42#3 * 188 = 80#204'));
// console.log(pola('8#61 * 895 = 78410#5'));