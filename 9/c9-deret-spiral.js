//spiral
//challenge 9
//buat sebuah function bernama spiral yang memiliki sebuah parameter
//(asumsi nama parameter adalah param1)
//yang berisi angka .setelah itu, generate secara otomatis
//array sebanyak param x param1 dan menampilkan juga
//urutan angka sesuai dengan pola spiral.

// function spiral(param1) {
//     //writecode
//     var array = [];
//     var hasil = [];
//     var baru = 0;

//     for (let i = 0; i < param1; i++) {
//         array[i] = [];
//         for (let j = 0; j < param1; j++) {
//             array[i][j] = baru;
//             baru++;
//         }
//     }
//     let barisawal = 0;
//     let kolomawal = 0;
//     let kolomakhir = param1 - 1;
//     let barisakhir = param1 - 1;
//     while (barisawal <= barisakhir && kolomawal <= kolomakhir) {
//         for (let j = barisawal; j <= kolomakhir; j++) {
//             hasil.push(array[barisawal][j])
//         }
//         barisawal++
//         for (let k = barisawal; k <= barisakhir; k++) {
//             hasil.push(array[k][kolomakhir]);
//         }
//         kolomakhir--
//         for (let l = kolomakhir; l >= kolomawal; l--) {
//             hasil.push(array[barisakhir][l]);
//         }
//         barisakhir--
//         for (let m = barisakhir; m >= barisawal; m--) {
//             hasil.push(array[m][kolomawal]);
//         }
//         kolomawal++
//     }
//     console.log(hasil);
// }
// spiral(5)
// spiral(6)
// spiral(7)


//bikin matrik
//matrik dimensi array dalam aray

// function spiral(size) {
//     let matrik = [];
//     let count = 0;
//     for (var index = 0; index < size; index++) {
//         matrik[index] = []
//         for (var j = 0; j < size; j++) {
//             //console.log(matrik);
//             matrik[index][j] = count;
//             count++;
//         }
//     }
//     console.log(matrik);
//     let x = 0;
//     y = 0;

//     let batatAtas = size;
//     let batasBawah = 0;

//     let result = []
//     while (result.length < size * size) {



//         for (; x < batatAtas; x++) {
//             result.push(matrik[y][x]);
//         }
//         x--
//         y++
//         for (; y < batatAtas; y++) {
//             result.push(matrik[y][x]);
//         }
//         y--
//         x--

//         for (; x >= batasBawah; x--) {
//             result.push(matrik[y][x]);
//         }
//         x++
//         y--

//         for (; y > batasBawah; y--) {
//             result.push(matrik[y][x]);

//         }
//         x++;
//         y++;
//         batatAtas--;
//         batasBawah++;



//     }
//     console.log(result);


// }
// spiral(5);
// spiral(6);
// spiral(7);

function spiral(params1) {
    var array = [];
    var hasil = [];
    var baru = 0;

    for (let i = 0; i < params1; i++) {
        array[i] = [];

        for (let j = 0; j < params1; j++) {
            array[i][j] = baru;
            baru++
        }
    }

    let barisawal = 0;
    let kolomawal = 0;
    let kolomakhir = params1 - 1;
    let barisakhir = params1 - 1;

    while (barisawal <= barisakhir && kolomawal <= kolomakhir) {
        for (let j = barisawal; j <= kolomakhir; j++) {
            hasil.push(array[barisawal][j])
        }
        barisawal++
        for (let k = barisawal; k < barisakhir; k++) {
            hasil.push(array[k][kolomakhir])
        }
        kolomakhir--
        for (let l = kolomakhir; l >= kolomawal; l--) {
            hasil.push(array[barisakhir][l])
        }
        barisakhir--
        for (let m = barisakhir; m >= barisawal; m--) {
            hasil.push(array[m][kolomawal])
        }
        kolomawal++
    }
    console.log(hasil);


}

spiral(5);
spiral(6);
spiral(7);







// function matrix(n) {
//     let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
//     let counter = 1;
//     let startCol = 0;
//     let endCol = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;
//     while (startCol <= endCol && startRow <= endRow) {
//         for (let i = startCol; i <= endCol; i++) {
//             result[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;
//         for (let j = startRow; j <= endRow; j++) {
//             result[j][endCol] = counter;
//             counter++;
//         }

//         endCol--;

//         for (let i = endCol; i >= startCol; i--) {
//             result[endRow][i] = counter;
//             counter++;
//         }

//         endRow--;
//         for (let i = endRow; i >= startRow; i--) {
//             result[i][startCol] = counter;
//             counter++;
//         }

//         startCol++;

//     }

//     return result;

// }