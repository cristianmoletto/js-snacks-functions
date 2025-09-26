/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
/**
 * @param {string} name;
 * @returns {string}
 */
function salutoPersonalizzato(name) {
    const today = new Date
    const hour = today.getHours()

    let message = ""

    if (hour <= 5 && hour < 13) {
        message = "Buongiorno " + name;
    } else if (hour >= 13 && hour < 17) 
        { message = "Buon pomeriggio " + name; } 
    else 
    { message = "Buonasera " + name; }

    return message;

}

// Invoca la funzione qui e stampa il risultato in console
const saluto = salutoPersonalizzato(name);
console.log(saluto);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.