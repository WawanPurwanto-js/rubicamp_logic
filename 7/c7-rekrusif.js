//buatlah sebuah fungsi yang mengalikan anggota
//dalam angka tersebut
//hingga nilai 
//terakhir hanya terdiri
//1 digit
//keyword recursive looping yang ke dalam-dalam


function wierdMultiply(setence) {

    let has = 1;
    let numberstring = setence.toString();
    if (numberstring.length == 1) {
        has = parseInt(numberstring);
        return has;
    } else {
        for (let index = 0; index < numberstring.length; index++) {
            has *= parseInt(numberstring.charAt(index));
        }
        return wierdMultiply(has);
    }
}
console.log(wierdMultiply(39)); //-->3*9 = 27 -> 2*7 = 14 -> 1 * 4 =4
console.log(wierdMultiply(999));// --> 9*9*9 = 729 -> 7*2*9 = 126 -> 1*2*6 = 12 -> 1* 2= 2
console.log(wierdMultiply(3)); // --> 3 karena telah satu digit

// function wierdMultiply(setence){

//     let stringNumber = setence.toString();
//     if (stringNumber.length== 1) return setence;
//     let total = 1;
//     for (var index =0; index < stringNumber.length; index++) {
//         //console.log(stringNumber[index]);
//         total= total * stringNumber[index];
        
//     }

//     return wierdMultiply(total)
//     //Multiply(total)
//     //console.log(total)

// }
 

// console.log(wierdMultiply(39));
// console.log(wierdMultiply(999));
// console.log(wierdMultiply(3));










// function Multiply(number){

//     let stringNumber = number.toString();
//     if (stringNumber.length== 1) return number;
//     let total = 1;
//     for (var index =0; index < stringNumber.length; index++) {
//         //console.log(stringNumber[index]);
//         total= total * stringNumber[index];
        
//     }

//     return Multiply(total)
//     //Multiply(total)
//     //console.log(total)

// }
 

// // console.log(Multiply(39));
// console.log(Multiply(999));
// console.log(Multiply(3));

