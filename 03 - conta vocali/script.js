/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/***
 * @param {string} word
 * @returns {number}
 */
function contaVocali(word) {
    let array = ["a","e","i","o","u"]; 
    let vocali = 0;

    for (i = 0; i < word.length; i++) { 
        if (array.includes(word[i])){
            vocali++;
        }
    }
    return vocali;
}


// Invoca la funzione qui e stampa il risultato in console
const results = contaVocali(word)
console.log(results)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)