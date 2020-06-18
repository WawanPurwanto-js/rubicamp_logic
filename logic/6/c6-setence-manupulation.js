//buatlah sebuah fungsi untuk memanipulasi kalimat dengan mengikti aturan pada tantangan sebelumnya (tantangan ke-5)

function stringManipulation(word) {

    if (word.charAt(0).toLowerCase() == 'a' ||
        (word.charAt(0).toLowerCase()) == 'i' ||
        (word.charAt(0).toLowerCase()) == 'e' ||
        (word.charAt(0).toLowerCase()) == 'o') {
        return word;
    } else {
        return word.slice(1) + word[0] + ('nyo')
    }
}

function sentencesManipulation(setence) {
    // //write your code here

    let words = setence.split(" ");
    let result = [];
    for (var i = 0; i < words.length; i++) {
        result.push(stringManipulation(words[i]))
    }
    console.log(result.join("  "))
}
sentencesManipulation('ibu pergi ke pasar bersama aku');