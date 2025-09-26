/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/***
 * @param {array} array
 * @param {string} letter
 * @returns {array}
 */
function filterByLetter(array, letter) {
    let risultati = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].includes(letter)) {
            risultati.push(array[i])
        }
    }
    return risultati;

}


// Invoca la funzione qui e stampa il risultato in console
let results = filterByLetter(names, "A")
console.log(results)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
