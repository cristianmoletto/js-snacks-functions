/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
/***
 * @param {string} name;
 * @returns {string} 
 */
function salutaNome(name){
    return `Ciao ${name}`
}

// Invoca la funzione qui e stampa il risultato in console
const result = salutaNome(name);
console.log(result)



//Risultato atteso se si passa 'Mario': // ciao Mario


// Versione breve
const saluta = (name) => `Ciao ${name}`;
console.log(result);