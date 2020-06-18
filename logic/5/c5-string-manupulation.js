//String Manipulatio
//buatlah sebuah fungsi untuk memanipulasi string 
//dengan mengikuti aturan sebagai berikut

// 1 apabila kata diawali huruf vokal fungsi langsung 
// mengembalikan kata tersebut
// 2 apabila diawali huruf konsonan tersebut dipindah
// ke akhir kata dan menambahkan akhiran 'nyo' dikatanya
// keyword string reference

function stringManipulation(word) {
    // writecode
    var vokal = ('a' || 'i' || 'u' || 'e' || 'o'); //variable huruf vokal
    var hasil = "";   //variabe hasil
    for (i = 0; i < vokal.length; i++) {   
        // menggunakan method pengulangan for adalah pengulangan
        //index sama dengan 0 maka i lebih kecil dari variable vokal
        // maka panjang vokal , index di tambah 1
    

        if (word[0] == vokal[i]) 
         // jika word atau kata kosong dengan nilai sama tapi data type 
         //berbeda dengan varibale index
        {
            console.log(word)   //maka akan menghasilkan variable word
        } else  //else lain 
         {
            hasil = word.slice(1) + word[0]+ 'nyo'
              //variable hasil sama dengan word dipotong 1
    //variable word di tambah 
    //di tambah kalimat nyo
            console.log(hasil) //    //maka manghasilkan variable hasil
        }
    }
}
stringManipulation('ayam');//result "ayam"
stringManipulation('bebek');//result "ebekbnyo"    /
//maka hasil di terminal stringmanipulaton 
//jika huruf vokal maka ayam
//jika huruf konsonan bebek menjadi ebekyno





























// const x = 'ayam';
// const  y = 'bebek';
//     console.log(x,y)

// const x = 'halo';
// const y = 'dunia';
// const z = 12345;

// console.log(x.toLocaleUpperCase);
// console.log(y.toLocaleLowerCase);
// console.log(x.replace('ha','mi'));
// console.log(x.replace(/ha/g,'mi'));
// console.log(z.toString());
// console.log(typeof(z.toString));


// const nama ="dagelan";
// for(const char of nama){
//     console.log(char);
// }

// //menghitung vowel 
// function vowel(str) {
// 	var vocal='aiueo';
// 	hasil=0;
// 	for (var i=0; i<str.length; i++){
// 	  var a=vocal[vocal.indexOf(str[i])]
// 	  if(a===str[i]){
// 	    hasil+=1;
// 	  }
// 	}
// 	return hasil
// }

// console.log(vowel('hello world!')); // 3
// console.log(vowel('aeiou'));        // 5
// console.log(vowel('psst'));         // 0
// console.log(vowel('yolo'));         // 2