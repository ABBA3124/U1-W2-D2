/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let ilPiùGrande
let number1 = 27
let number2 = 15
if (number1 > number2) {
  ilPiùGrande = number1
} else if (number2 > number1) {
  ilPiùGrande = number2
}
console.log("il più grande è:", ilPiùGrande)




/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 4
if (number !== 5) {
    console.log("not equal")
}




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number5 = 50
if (number5 % 5 === 0) {
  console.log ("divisibile per 5!")
} 





/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// il valore di uno dei due è ugale a 8 stampa "uno dei due è uguale a 8!"
let number6 = 10
let number7 = 2
if (number6 === 8 || number7 === 8 || number6 + number7 === 8 || number6 - number7 === 8 || number7 - number6 === 8) {
  console.log ("uno dei due è 8 oppure addizione/sottrazione uguale a 8")
}





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 120
if (totalShoppingCart > 50){
  console.log("Name-User ha diritto alla spedizione gratuita")
  console.log("Total da addebbitare all'utente per il checkout", totalShoppingCart)
} else {
  let totaleCompresaSpedizione = totalShoppingCart + 10
  console.log("Costo spedizione: 10")
  console.log("Total da addebbitare all'utente per il checkout",totaleCompresaSpedizione)
}





/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const discount = totalShoppingCart *0.2
totalShoppingCart -= discount
console.log("totale da addebitare per il checkout", totalShoppingCart)






/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let variant1 = 7
let variant2 = 90
let variant3 = 125

if (variant1 >= variant2 && variant1 >= variant3){
  if (variant2 > variant3){
    console.log(variant1, variant2, variant3)
  } else {
    console.log(variant1, variant3, variant2)
  }
} 
else if (variant2 >= variant1 && variant2 >= variant3) {
  if (variant1 > variant3) {
      console.log(variant2, variant1, variant3);
  } else {
      console.log(variant2, variant3, variant1);
  }
}
else {
  if (variant1 > variant2) {
      console.log(variant3, variant1, variant2);
  } else {
      console.log(variant3, variant2, variant1);
  }
}




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = "parola"
if (typeof valore === 'number') {
  console.log("valore è un numero")
} else {
  console.log("valore non è un numero")
}








/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 78
if (numero % 2 === 0) {
  console.log("il numero è pari")
} else {
  console.log("il numero non è pari")
}





/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 5) {
  console.log("meno di 5")
} else if (val < 10) {
  console.log("meno di 10")
} else {
  console.log("uguale a 10 o maggiore")
}






/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log(me)





/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me)






/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log(me)








/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let vuoto = []
vuoto.push(1,2,3,4,5,6,7,8,9,10)
console.log(vuoto)






/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
vuoto.pop()
vuoto.push(100)
console.log(vuoto)