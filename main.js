//! Dichiara e inizializza 5 variabili, una per ogni tipo di dato primitivo visto a lezione.Dopo di che, stampa il tipo nella console.
//!
//* let var1 = "primaVar";
//* let var2 = "secondaVar";
//* let var3 = [3, 4, 5];
//* console.log(var1, var2, var3);
///////////////////////////////////////////

//!2. Individua l’errore nel seguente codice e correggilo: 
//!let nome = 'Mario; let età = 30; const indirizzo = `Via Roma 10'; console.log(Nome);
//*Il nome mario non è tra virgolette//
//////////////////////////////////////////

//! Chiedi all’utente due numeri con il metodo prompt, salvali in delle variabili, poi calcola e stampa nella console: somma, differenza, prodotto, divisione, resto della divisione, ed il numero più grande dei due. Per aumentare la leggibilità, durante il console.log puoi spiegare a fianco cosa stai stampando usando una stringa. Esempio: console.log(“Questa è la somma”, sum);
//!
//* let num1 = prompt("Numero1");
//* let num2 = prompt("Numero2");

//* let somma = (num1 + num2);
//* let differenza = num1-num2;
//* let prodotto = num1*num2; 
//* let divisione = num1/num2;
//* if (num1>num2) {
//*     console.log(`${num1} è maggiore di ${num2}`);
//* } else {
//*     console.log(`${num2} è maggiore di ${num1}`);
//* }
//* console.log(`la somma tra ${num1} e ${num2} è ${somma}`);
//* console.log(`la differenza tra ${num1} e ${num2} è ${differenza}`);
//* console.log(`il prodotto tra ${num1} e ${num2} è ${prodotto}`);
//* console.log(`la divisione tra ${num1} e ${num2} è ${divisione}`);


//! Chiedi all’utente il suo nome e cognome, dopo di che stampa in console la seguente
//! frase:
//! "Benvenuto, Mario Rossi!"
//! Completare l’esercizio sia usando la string interpolation sia usando la
//! concatenazione di stringhe.

//* let nome = prompt("Inserisci il tuo nome");
//* console.log(`Benvenuto ${nome}`);


//! Chiedi all’utente di inserire un valore e verifica se il valore è truthy o falsy
//! stampando il risultato nella console.
//! (Come nell’esercizio della lezione, un semplice if/else, con dentro solo il console.log;
//! in un caso stampa “il valore è truthy”, nell’altro stampa “il valore è falsy”)

//-------------------------------//
//! Chiedi all’utente due numeri e verifica se:
//! ● Entrambi sono maggiori di 10.
//! ● Almeno uno dei due è maggiore di 10.
//*  let num1 = prompt("Numero1");
//*  let num2 = prompt("Numero2");
//*  if (num1>10 && num2>10) {
//*     console.log("Entrambi i numeri sono maggiori di 10");
//*  } else if (num1>10 || num2>10){
//*     console.log("Almeno uno è maggiore");
//*  } else {
//*     console.log("Nessun numero è maggiore di 10");
//*  }

//---------------------------------//
//! Inizializza due variabili, 5 e “5”, e verifica le seguenti condizioni:
//! ● Se i numeri sono uguali.
//! ● Se sono uguali anche nel tipo.
//! ● Se sono diversi o strettamente diversi.
//! Stampa i risultati nella console
//* let var1 = 5
//* let var2 = "5";
//* if (var1=var2) {
//*     console.log("i due numeri sono uguali")
//* } else {
//*     console.log("Sono diversi");
//* }
//* if (var1==var2) {
//*     console.log("Sono uguali anche nel tipo")
//* } else {
//*     console.log("Non sono uguali nel tipo");
//* }
//* if (var1===var2) {
//*     console.log("Sono strettamente uguali")
//* } else {
//*     console.log("sono strettamente diversi")
//* }


//-------------------------------------------//
//! Chiedi all’utente un numero e verifica se si trova in un determinato intervallo
//! (esempio: tra 10 e 100). Stampa all’utente un messaggio dove confermi o meno se è
//! dentro quell’intervallo.
// let num = prompt("Inserisci un numero")
// if (num<100 && num>10) {
//     console.log("Il numero si trova tra 10 e 100");
// } else {
// console.log("Il numero non si trova tra questo intervallo");
// }


//------------------------------------------//
//! Chiedi all’utente di inserire la propria età e quella di un amico. Determina chi è più
//! giovane, chi è più vecchio o se hanno la stessa età. Stampa il risultato
// let ageOne = prompt("Inserisci la tua età");
// let ageTwo = prompt("Inserisci l'età del tuo amico");
// if (ageOne==ageTwo) {
//     console.log("Avete la stessa età")
// } else if (ageOne>ageTwo) {
//     console.log("Sei piu grande del tuo amico")
// } else{
//   console.log("il tuo amico è piu grande di te")  
// }


//-------------------------------------------//
//! 1. Lancio del dado
//! Creare un programma che simuli il lancio di un dado e reagisca in base al risultato.
//! Regole
//! ● Utilizzare Math.random() e Math.round() per generare un numero casuale
//! ● Simulare un dado a 6 facce
//! ● Stampare un messaggio se il numero è maggiore di 3
//! Scrivi un programma che:
//! 1. Generi un numero casuale da 1 a 6
//! 2. Verifichi se il numero è maggiore di 3
//! 3. Stampi un messaggio in caso affermativo
//  let dado = Math.round(Math.random() * 5) + 1;
//  console.log(dado);
// if (dado>3) {
//     console.log("il numero è maggiore di 3")
// }

//------------------------------------------//
//! Creare un mini-programma che classifichi un voto scolastico in base al punteggio.
//! Scale di Valutazione
//! ● 90-100: "Ottimo!"
//! ● 70-89: "Buono!"
//! ● 60-69: "Sufficiente"
//! ● Sotto 60: "Insufficiente"
//! Scrivi un programma che:
//! 1. Definisca un voto numerico
//! 2. Utilizzi le istruzioni if-else
//! 3. Classifichi il voto secondo le scale indicate
//! 4. Stampi a schermo la corrispondente valutazione
//! 3. Identificazione della stagione
// let voto = Math.round(Math.random() * 100) + 1;
//  console.log(voto);
// if (voto<60) {
//     console.log("insufficiente")
// } else if (voto<=69) {
//     console.log("sufficiente")
// } else if (voto<=89) {
//     console.log("Buono")
// } else if (voto<=100) {
//     console.log("Ottimo")
// }

//-----------------------------------------//
//! Creare un mini-programma che identifichi la stagione in base al numero del mese.
//! Stagioni e Mesi
//! ● Inverno: Dicembre (12), Gennaio (1), Febbraio (2)
//! ● Primavera: Marzo (3), Aprile (4), Maggio (5)
//! ● Estate: Giugno (6), Luglio (7), Agosto (8)
//! ● Autunno: Settembre (9), Ottobre (10), Novembre (11)
//! Consegna
//! Scrivi un programma che:
//! 1. Definisca un numero di mese (1-12)
//! 2. Utilizzi l'istruzione switch
//! 3. Identifichi la stagione corrispondente
//! 4. Stampi a schermo il nome della stagione
// let gennaio = 1;
// let febbraio = 2;
// let marzo = 3;
// let aprile = 4;
// let maggio = 5;
// let giugno = 6;
// let luglio = 7;
// let agosto = 8;
// let settembre = 9;
// let ottobre = 10;
// let novembre = 11;
// let dicembre = 12;
// let mese = Math.round(Math.random () * 11) + 1;
// console.log(mese);
// let season = ""
// switch (mese) {
//   case 1:
//   console.log("gennaio"); 
//   break
//   case 2:
//   console.log("febbraio");
//   break
//   case 3:
//   console.log("marzo");
//   break
//   case 4:
//   console.log("aprile");
//   break
//   case 5:
//   console.log("maggio");
//   break
//   case 6:
//   console.log("giugno");
//   break
//   case 7:
//   console.log("luglio");
//   break
//   case 8:
//   console.log("agosto");
//   break
//   case 9:
//   console.log("settembre");
//   break
//   case 10:
//   console.log("ottobre");
//   break
//   case 11:
//   console.log("novembre");
//   break
//   case 12:
//   console.log("dicembre");
//   break
// }

// switch (mese) {
//     case 1:
//     console.log("Inverno");
//     break 
//     case 2:
//     console.log("Inverno");
//     break
//     case 12:
//     console.log("Inverno");
//     break
//     case 3:
//     console.log("Primavera")
//     break
//     case 4:
//     console.log("Primavera");
//     break
//     case 5:
//     console.log("Primavera");
//     break
//     case 6:
//     console.log("Estate");
//     break
//     case 7:
//     console.log("Estate");
//     break
//     case 8:
//     console.log("Estate");
//     break
//     case 9:
//     console.log("Autunno");
//     break
//     case 10:
//     console.log("Autunno"); 
//     break  
//     case 11:
//     console.log("Autunno");
//     break
//   }

//------------------------------------------//
//! Utilizzare l'operatore ternario per determinare lo stato anagrafico di una persona in
//! base all'età.
//! ● Maggiorenne: età ≥ 18 anni
//! ● Minorenne: età < 18 anni
//! Scrivi un programma che:
//! 1. Definisca un'età
//! 2. Utilizzi l'operatore ternario
//! 3. Determini lo stato anagrafico
//! 4. Stampi a schermo il risultato usando una stringa
//! Esempio di output: “Età: 16, stato: minorenne”



//------------------------------------------//
//! Esercizio bonus
//! Sommatore di Numeri Pari
//! Creare un programma che calcoli la somma di tutti i numeri pari fino a un
//! determinato limite.
//! Regole
//! ● Usare un ciclo while
//! ● Identificare i numeri pari con l'operatore modulo %
//! ● Calcolare la somma dei numeri pari
//! Scrivi un programma che:
//! 1. Definisca un limite massimo
//! 2. Usi un ciclo while
//! 3. Identifichi i numeri pari
//! 4. Calcoli la loro somma
//! 5. Stampi il risultato finale
//! Esempio: con un limite di 10, la somma dei numeri pari sarà 20 (0+2+4+6+8+10)
// let num=0;
// let somma= 0;
// let max= 66
// while (num < max) {
//     if (num%2==0) {
//         somma= somma+num;
//     }
//     num++;
// }
// console.log(num);
// console.log(somma);

//--------------------------------------------//
//! Bonus 1: Indovina il numero segreto
//! Creare un mini-gioco di indovinare un numero generato casualmente.
//! Regole
//! ● Generare un numero segreto tra 1 e 10
//! ● Chiedere all'utente di indovinare
//! ● Dare suggerimenti se il numero è troppo alto o troppo basso
//! ● Continuare finché non si indovina il numero
//! Scrivi un programma che:
//! 1. Generi un numero segreto casuale tra 1 e 10
//! 2. Chieda ripetutamente all'utente di indovinare
//! 3. Dia suggerimenti
//! 4. Termini quando il numero è indovinato
//! Esempio:
//! Numero segreto generato
//! Indovina il numero (1-10):
//! 5
//! Troppo basso!
//! Indovina il numero (1-10):
//! 8
//! Troppo alto!
//! Indovina il numero (1-10):
//! 6
//! Complimenti! Hai indovinato in 3 tentativi
// let secretNumber= Math.round(Math.random() * 10);
// console.log(secretNumber);
// let n = prompt("indovina il numero tra uno e dieci")
// if (n==secretNumber) {
//     console.log("Complimenti")
// } else if (n<secretNumber) {
//     n = prompt("troppo basso, riprova")
// } else if (n>secretNumber) {
//     n = prompt("troppo alto, riprova")
// }


//------------------------------------------------------------------//

//! 1. Stampare i numeri da 1 a 10
//! ○ Usa un ciclo for.
//! ○ Usa un ciclo while.
//! ○ Usa un ciclo do...while.


//-------------------------------------------------------------------//

//! Stampare i numeri pari tra 1 e 20
 //! ○ Scrivi un ciclo for che stampa solo numeri pari.

// for (let n = 0; n < 20; n++) {
//     if (n%2/0) {
//         n++
//     }
//     console.log(n)
// }

//-----------------------------------------------------------------//
//!Stampare una tabellina
//!○ Usa un ciclo for per stampare la tabellina del 5 (esempio: 5 x 1 = 5, 5 x 2 =
//!10, ... fino a 5 x 10).
// for (let index = 0; index <= 10; index++) {
    
//     let tabellina = 5 * index;
//     console.log(`5 x ${index} = ${tabellina}`);
// }



//---------------------------------------------------------------------//
//!Somma di numeri consecutivi
//!○ Usa un ciclo while per sommare i numeri da 1 a 10 e stampare il risultato
//!totale.
// let n = 0;
// let somma = 0;
// while (n<100) {
//     n++;
//     somma= somma+n;
// }

// console.log(n);
// console.log(somma)
//---------------------------------------------------------------------//
//!Conta fino a un numero specifico
//!○ Chiedi all'utente di inserire un numero (usa prompt o una variabile dichiarata)
//!e usa un ciclo do...while per contare fino a quel numero.
// let numMax = prompt("Inserisci un numero max");
// let n = 0;
// while (n<numMax) {
//     n++;
//     console.log(n);    
// }
//----------------------------------------------------------------------//
//!Funzione che calcola la somma di due numeri
//!○ Scrivi una funzione sommaNumeri(numero1, numero2) che restituisce la
//!somma di due numeri.
//!○ Chiamala con vari valori ed esegui dei test.
// function sommaNumeri(n1, n2) {
//     let result = n1 + n2;
//     console.log(result);
//     return result;
// }
// sommaNumeri(4,6)


//---------------------------------------------------------------------//
//!Funzione che calcola il quadrato di un numero
//!○ Scrivi una funzione calcolaQuadrato(numero) che restituisce il quadrato del
//!numero passato come parametro.
// function calcolaQuadrato(n) {
//     potenza = n*n
//     console.log(potenza);    
// }
// calcolaQuadrato(7)
 
//-------------------------------------------------------------------------//
//!Funzione che saluta un nome
//!○ Scrivi una funzione saluta(nome) che prende un nome come parametro e
//!restituisce un saluto personalizzato (esempio: Ciao, Marco!).



//----------------------------------------------------------------------------//
//!Funzione che verifica se un numero è pari o dispari
//!○ Scrivi una funzione isPari(numero) che restituisce true se il numero è pari,
//!altrimenti false.Utilizzala per fare un console.log
//!Esempio if(isPari(numero)) {
//!codice
//!}
// function isPari(num) {
//     console.log(num)
//     if (num%2===0) {
//         console.log("pari")
//     } else {
//         console.log("dispari");
//     }
// }
// isPari(prompt("inserisci un numero per scoprire se è pari o dispari"))
//-------------------------------------------------------------------------------//

//!Funzione per stampare numeri pari con un ciclo
//!Scrivi una funzione stampaNumeriPari(max) che prende un numero max e usa un
//!ciclo for per stampare tutti i numeri pari da 0 a max.
// function stampaNumeriPari(max) {
//     for (let index = 0; index < max; index++) {
//         if (index%2/0) {
//             index++
//         }
//         console.log(index)
//     }
// }
// stampaNumeriPari(prompt("inserisci un max"))
//----------------------------------------------------------------------------//

//!Conta quante volte appare un carattere in una stringa
//!Scrivi una funzione contaCarattere(stringa, carattere) che usa un ciclo per contare
//!quante volte il carattere specificato appare nella stringa.
//!Esempio: contaCarattere("javascript", "a") restituisce 2.
// function contaCarattere(stringa, carattere) {
//     let count = 0;
//     for (let i = 0; i < stringa.length; i++) {
//         if (stringa[i]==carattere) {
//             count++;
//         }
//     } 
//       console.log(`il carattere ${carattere} nella stringa ${stringa} è contenuto ${count} volte`)
//       return count;
// }
// contaCarattere("javascript", "a");
//-------------------------------------------------------------------------------//

//!Somma dei numeri dispari in un intervallo
//!Scrivi una funzione sommaDispari(min, max) che usa un ciclo per sommare tutti i
//!numeri dispari tra min e max
// function sommaDispari(min, max) {
//     let somma = 0;
//     for (let n = min; n <= max; n++) {
//         if (n%2/0) {
//             somma=somma+n;
//         }
//     } 
//     console.log(somma)
//     return somma;
// }
// sommaDispari(1,5);
//-----------------------------------------------------------------------------//

//!Numero palindromo
//!Scrivi una funzione isPalindromo(numero) che verifica se un numero è palindromo
//!(legge uguale sia da sinistra che da destra).
//!Esempio: isPalindromo(121) restituisce true, isPalindromo(123) restituisce false.
// function isPalindromo(numero) {
//     const numeroStringa = numero.toString();
//     const numeroInvertito = numeroStringa.split('').reverse().join('');
//     if (numeroStringa === numeroInvertito) {
//         console.log(`il numero ${numero} è palindromo`);
//     } else {
//         console.log(`il numero ${numero} non è palindromo`);
//     }
//     return numeroStringa === numeroInvertito;
//   }
  
//   isPalindromo(prompt("inserisci un numero"));
  

//--------------------------------------------------------------------------------//
//!Scrivere una funzione che permetta di stampare in console tutti i numeri da 1 a N:
//!N sarà il nostro parametro formale della funzione
//!tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
//!tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
//!e tutti i numeri multipli di 3 E 5 (esempio 15) siano sostituiti dalla stringa 'fizzBuzz'
//!Se un numero non è multiplo né di 3 né di 5, allora stampa il numero
//!Come output della funzione, voglio che mi venga ritornato il numero di stringhe
//!stampate.
// function stampaNumeri(max) {
//     let min= 1;
//     for (let i = min; i < max; i++) {
//         if (i%3==0 && i%5==0) {
//             console.log(`${i}FizzBuzz`)
//         } else if (i%3==0) {
//             console.log(`${i}Fizz`)
//         } else if (i%5==0) {
//             console.log(`${i}Buzz`)
//         }
//         console.log(i)
//     }
// }
// stampaNumeri(prompt("inserisci un num max"));


//-----------------------------------------------------------------------------------//
//!SCrivere una funzione che ci calcola lo sconto da effettuare su un determinato
//!prodotto. Avremo due parametri, ossia il prezzo originale e la percentuale di sconto
//!da applicare.
//!Come output, avremo l’importo aggiornato.
//!Stampare in console “Il prezzo dopo lo sconto è di …. “
// function promotion(price, promo) {
//     let result = price-(price*promo)/100;
//     console.log(`il prezzo dopo lo sconto del ${promo}% è di ${result}`)
//     return result;
// }
// promotion(prompt("inserisci un prezzo"), prompt("inserisci lo sconto che vuoi applicare"));



//----------------------------------------------------------------------------------//
//!In un e-commerce, i prezzi dei prodotti sono memorizzati in un array. Scrivi una
//!funzione chiamata highestOrLowest che prende come parametri un array di numeri (i
//!prezzi dei prodotti) e un booleano “max” che specifica se vogliamo il massimo o il
//!minimo.
//!Nota: Questo esercizio è stato pensato per essere risolto SENZA metodi degli array.
// let numeri = [2, 5, 10, 1, 99];
// let max = false;

// function highestOrLowest(numeri, max) {
//     let highest = numeri[0];
//     let lowest = numeri[0];
    
//     for (let i = 1; i < numeri.length; i++) {
//         if (numeri[i] < lowest) {
//             lowest = numeri[i];
//         }
//         if (numeri[i] > highest) {
//             highest = numeri[i];
//         }
//     }
    
    
    
//     return max ? highest : lowest;
// }

// let result = highestOrLowest(numeri, max);
// console.log("Result:", result);



//----------------------------------------------------------------------------------//
//!Dato l’array greetings, scrivere una funzione (mediante arrow function) che conta
//!quante volte un saluto appare nel suddetto array. I parametri saranno l’array e la
//!parola da cercare. Se la parola da cercare non viene fornita , la funzione dovrà
//!cercare la stringa "default".
//  let greetings = ["ciao", "good morning", "ciao", "default", "ciao", "hello", "default",
//      "bonjour", "buenos dias"];
// const countWords = (greetings, word="default") => {
//     let counter = 0
//     for (let i = 0; i < greetings.length; i++) {
//         if (greetings[i]==word) {
//             counter++;
//         }
        
//     }
//     return counter;
// }
// // console.log(`la parola ${word} è contenuta ${counter} volte`);
// console.log(countWords(greetings, "ciao"));

//----------------------------------------------------------------------------------//
//!Metodo degli array .filter()
//!Scrivere una funzione che, dato un array di numeri rappresentanti le età, restituisca un
//!nuovo array contenente solo le età delle persone maggiorenni.
//!N.B. come visto a lezione, il metodo filter ci ritorna un nuovo array.
// let ages = [12, 13, 24, 5, 55];
// let maggiorenni = ages.filter((age)=>age>=18)
// console.log(maggiorenni);
//!//-------------------------------------------------------------------------------------//
//!Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li
//!riordini in modo decrescente.
//!Esempio:
// let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, 4];
// let newArray = array.sort((b, a) => b - a);
// console.log(newArray);



//-------------------------------------------------------------------------------------//
//!Scrivi una funzione chiamata filterBigNumbers che prenda in input un array di
//!numeri come parametro e restituisca come output un nuovo array contenente solo i
//!numeri maggiori di 10.
// const numbers = [4, 15, 7, 22, 5];
// let newArray= numbers.filter((number) => number>= 10);
// console.log(newArray);

//-------------------------------------------------------------------------------------//
//! Scrivi una funzione chiamata getSum che prenda un array di numeri come parametro
//!e restituisca la somma di tutti i numeri nell'array. Utilizzare il metodo .reduce()
// const numbers = [4, 15, 7, 22, 5];
// function getSum(numbers) {
//     let somma = numbers.reduce((accumulatore, n)=> accumulatore + n);
//     console.log(somma);
//     return somma;
// }
// getSum(numbers);

//--------------------------------------------------------------------------------------//
//!Scrivi una funzione chiamata squaredEvenNumbers che prenda un array di numeri
//!come parametro e restituisca un nuovo array contenente il quadrato dei numeri pari.
//!N.B. sono vietati cicli di ogni tipo (anche il for each). Come visto a lezione, abbiamo
//!dei metodi degli array che internamente ciclano sull’array.
// const numbers = [4, 15, 7, 22, 5];
// function squaredEvenNumbers(numbers) {
//     let numeriPari= numbers.filter((n)=>n%2==0).map((n)=>n**2)
//     console.log(numeriPari);
// }
// squaredEvenNumbers(numbers);




//--------------------------------------------------------------------------------------//
//!Hai un array di oggetti che rappresenta un carrello su un ecommerce. Ogni oggetto
//!contiene informazioni su un prodotto: il nome, il prezzo unitario e la quantità
//!acquistata.

//!Obiettivi:
//!1. Calcolare il totale per ogni prodotto
//!Aggiungi una nuova proprietà a ciascun oggetto dell'array, chiamata total, che
//!rappresenta il costo totale del prodotto (prezzo moltiplicato per la quantità).
//!Esempio:
//!{ product: "Mouse", price: 25, quantity: 2, total: 50 }
//!Puoi fare questa operazione spezzando l’oggetto e aggiungendo la nuova
//!proprietà.
//!2. Filtrare i prodotti costosi
//!Crea un nuovo array contenente solo i prodotti il cui costo totale (total) è
//!maggiore di 50 euro.
//!3. Calcolare il totale del carrello
//!Somma i costi totali di tutti i prodotti per ottenere il costo complessivo del
//!carrello.
//!4. Applicare uno sconto del 10% sui prodotti costosi
//!Crea un nuovo array in cui i prodotti con un costo totale superiore a 50 euro
//!ricevono uno sconto del 10% sul prezzo unitario. I prodotti con costo totale
//!pari o inferiore a 50 rimangono invariati.
//!● Usa metodi come map, filter, reduce e lo spread operator per completare
//!l'esercizio.
//!● Non modificare l'array originale cart.
//!● Stampa i risultati di ogni operazione usando console.log.
//* const cart = [
//*     { product: "Laptop", price: 1000, quantity: 1 },
//*     { product: "Mouse", price: 25, quantity: 2 },
//*     { product: "Headphones", price: 100, quantity: 1 },
//*     { product: "USB Cable", price: 10, quantity: 5 },
//*     ];
    
//*     cart.forEach(i=>{
//*         i.total=i.price*i.quantity;
//*     })
//*     console.log(cart);

//*     let prodottiCostosi= cart.filter(c => c.total > 50);
//*     console.log(prodottiCostosi);

//*     let costoTotale= cart.reduce((accumulatore,a) => a.total + accumulatore, 0);
//*     console.log(costoTotale);

//*     let promoProdottiCostosi = prodottiCostosi.map(
//*         (prodottiCostosi) => (prodottiCostosi.price = (prodottiCostosi.price)-(prodottiCostosi.price*10)/100)
//*     );
//*     console.log(promoProdottiCostosi);
    
    

     
//------------------------------------------------------------------------------------------//
//!3. Hai un array di oggetti che rappresenta un inventario di prodotti. Ogni oggetto
//!contiene informazioni sul prodotto: il nome, la quantità in magazzino (stock) e il
//!prezzo unitario.

//!Obiettivi:
//!1. Trovare i prodotti esauriti
//!Crea un nuovo array contenente solo i prodotti che hanno uno stock pari a 0.
//!2. Calcolare il valore totale dei prodotti disponibili
//!Filtra i prodotti con stock maggiore di 0 e crea un nuovo array dove dentro gli
//!oggetti hanno una proprietà in più, chiamata totalValue, calcolata stock *
//!price.
//!Esempio:
//!{ product: "Laptop", stock: 5, price: 1000, totalValue: 5000 }
//!3. Calcolare il valore totale dell'inventario
//!Usa il metodo reduce per calcolare la somma del valore totale di tutti i prodotti
//!(inclusi quelli esauriti, considerando stock = 0 come valore nullo).
//!4. Aggiornare l'inventario con nuovi prodotti
//!Aggiungi i seguenti nuovi prodotti all'inventario utilizzando lo spread operator:

// const inventory = [ 
//     { product: "Laptop", stock: 5, price: 1000 }, 
//     { product: "Mouse", stock: 50, price: 20 }, 
//     { product: "Keyboard", stock: 0, price: 50 }, 
//     { product: "Monitor", stock: 10, price: 200 }, ];
    
//     let emptyStock = inventory.filter((i) => i.stock == 0);
//     console.log(emptyStock);

//     let lotOfProduct = inventory.filter((p) => p.stock > 0);
//     console.log(lotOfProduct)
    
//     inventory.forEach(t=>{
//         t.totalValue=t.price*t.stock;
//     });
//     console.log(inventory);

//     let totalPrice = inventory.reduce((accumulatore, f) => f.totalValue + accumulatore , 0);
//     console.log(totalPrice)

//     const newProducts = [
//          { product: "Tablet", stock: 20, price: 300 }, 
//          { product: "Smartphone", stock: 15, price: 800 }, 
//         ];
    
//     const newInventory= [...inventory, ...newProducts];
//     console.log(newInventory);

/////////////////////////////////////////////////////////////:::::

//!Prima parte
//!1. Crea un oggetto libro con le seguenti proprietà:
//!○ titolo: "Il Signore degli Anelli"
//!○ autore: "J.R.R. Tolkien"
//!○ annoPubblicazione: 1954
//!Stampa il titolo e l'autore utilizzando la notazione a punto e la notazione a
//!parentesi.
//!2. Aggiungi una proprietà genere al tuo oggetto libro e impostala a "Fantasy".
//!Modifica l'anno di pubblicazione a 1955 e stampa l'oggetto aggiornato.
//!3. Crea un oggetto studente con:
//!○ Una proprietà nome
//!○ Una proprietà cognome
//!○ Un metodo saluto che stampa: "Ciao, sono [nome] [cognome]!"
//!Ricordati di invocare il metodo.

// let book = {
//     titolo: "Il Signore degli Anelli",
//     autore: "J.R.R. Tolkien",
//     annoPubblicazione: 1954,
// }
//  console.log(book.titolo);
//  console.log(book.autore);

// book.genere = "Fantasy";
//  console.log(book);
// book.annoPubblicazione = 1955;
// console.log(book);

//  let studente = {
//      nome: "Jader",
//      cognome: "Daniotti",
//  }
//  studente.saluto = function () {
//      console.log(`Ciao sono ${this.nome} ${this.cognome}`)
//  } 
//  studente.saluto ();


////////////////////////////////////////////////////////////////////////////////////////////////////////
//! Seconda parte
//! 4. Crea un oggetto carrello con:
//! ○ Una proprietà products (array vuoto)
//! ○ Un metodo addProduct(productName) che aggiunge il prodotto all'array
//! prodotti
//! ○ Un metodo showCart che stampa i prodotti nel carrello
//! Aggiungi "Pane" e "Latte" e poi mostra il carrello.
// let carrello = {
//     product: [],
//      addProduct: function (array) {
//          array.forEach(element => {
//             this.product.push(element);
//          });
//      },
//      showKart: function () {
//          console.log(this.product);
//      },
// };

//      carrello.addProduct(["Pane", "Latte"]);
//      carrello.showKart();
//! 5. Definisci una classe Person con un costruttore che accetta:
//! ○ name
//! ○ age
//! Aggiungi un metodo “presenta” che stampa: "Mi chiamo [name] e ho [age]
//! anni."
//! Crea un'istanza della classe e invoca il metodo presenta.
    // class Person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     presenta() {
    //         console.log(`ciao mi chiamo ${this.name} e ho ${this.age} anni`)
    //     }
    // }
    // const jader = new Person("jader", 25);
    // jader.presenta();
//! 6. Crea una classe Animal con un costruttore che accetta nome e un metodo verso che
//! stampa: "[nome] fa un verso."
//! Estendi la classe con una classe Cat che modifica il metodo verso per stampare:
//! "[nome] miagola."
//! Crea un'istanza della classe gatto e invoca il metodo.
    // class Animal {
    //     constructor(nome, verso) {
    //         this.nomeAnimale = nome;
    //         this.versoAnimale = verso;
    //     }
    //     descriptionAnimal() {
    //         console.log(`L'animale ${this.nomeAnimale} ${this.versoAnimale}`);
    //     }
    // }
    // const gatto = new Animal ("gatto", "miagola");
    // gatto.descriptionAnimal();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////:
//!Terza parte
//!1. Crea una nuova data che rappresenta il tuo compleanno.
//!Recupera e stampa prima solo l'anno, poi solo il mese e infine solo il giorno del tuo
//!compleanno.
//!2. Crea una data che rappresenta oggi.
//!Aggiungi 7 giorni alla data e stampa il risultato.
//!3. Crea un oggetto giocatore con una proprietà punteggio.
//!Assegna l'oggetto ad una nuova variabile e modifica il punteggio della nuova
//!variabile.
//!Fai un deep-clone dell’oggetto originale, dopo di che stampa tutti gli oggetti.
//!4. Scrivi una funzione calculatePrice(discount, price) che:
//!● Restituisce il prezzo scontato
//!● Lancia un errore se lo sconto è maggiore del 100% o minore di 0
//!Gli errori vanno gestiti nel catch, il codice non deve interrompersi
// let birthdayDate = new Date("1999-11-18");
// let yearOfBirthday = birthdayDate.getFullYear();
// let monthOfBirthday = birthdayDate.getMonth();
// let dayOfBirthday = birthdayDate.getDay();
// console.log(`la data di nascita è ${birthdayDate}`);
// console.log(`il giorno è ${dayOfBirthday} il mese è ${monthOfBirthday} e l'anno ${yearOfBirthday}`)
//!                  perplessissimo
//

//!1. Creare un oggetto JavaScript, convertirlo in formato JSON e riconvertirlo in oggetto.
//!Scrivi un codice che:
//!1. Crei un oggetto JavaScript con le seguenti proprietà: name, age e subscribed
//!(booleano).
// let user = {
//     "username": "jader",
//     "age": 18,
//     "jsonTransformation": "yes",
//     "subscribed": true,
// }
//!2. Converta l'oggetto in una stringa JSON e stampi il risultato.
// let jsonUser = JSON.stringify(user);
//  console.log(jsonUser);
//!3. Converta la stringa JSON di nuovo in oggetto e aggiunga una nuova proprietà
//!Date subscriptionDate con il valore 2024-12-31.
// let originalUser = JSON.parse(jsonUser);
//  console.log(originalUser);
//  user.subscriptionDate = new Date("2024-12-31");
//  console.log(user);

//!4. Stampare entrambi gli oggetti
// console.log(originalUser);
// console.log(user);
//!2. Accedere e modificare gli elementi di una pagina HTML.
//!Usando il seguente HTML:
//<div id="info">
//<p>Questo è un p.</p>
//<button id="cambia">Cambia testo</button>
//</div>
// let newP = document.getElementById("modifica")
// newP.textContent = "nuovo P cambiato con javascript"
//!Scrivi uno script che:
//!1. Acceda al paragrafo utilizzando getElementById.
//!2. Modifichi il testo del paragrafo in "Testo aggiornato" quando il bottone viene
//!cliccato.

// function buttonOnClick() {
//     document.getElementById("cambiaButton").innerHTML= "Testo aggiornato";
// }
//!3. Creare nuovi elementi dinamicamente e aggiungerli al DOM.
//!Usando questo HTML:

//!Scrivi uno script che:
//!1. Crei un nuovo elemento <li> con il testo "Nuovo Elemento".
//!2. Aggiunga il nuovo elemento alla fine della lista quando il bottone viene
//!cliccato.
// let newUL = document.getElementById("lista");
// let newLI = document.createElement("li");
// newLI.textContent = ("Elemento 3 prova javascript");
// function addLI() {
//     newUL.appendChild(newLI);
// }


//!4. Cambiare dinamicamente lo stile degli elementi.
//!Scrivi uno script che:
//!1. Aggiunga un evento al bottone.
//!2. Quando cliccato, cambi il colore del quadrato in rosso e aumenti la sua dimensione a
//!150px per lato.
// let boxButton = document.getElementById("cambiaColore");
// let box = document.querySelector(".quadrato");
// boxButton.addEventListener("click", () =>{
//     box.setAttribute("style", "width: 250px; height: 100px; background-color: red;");
// })
// console.log(boxButton);
// console.log(box);


//!5. Gestire eventi su più elementi usando querySelectorAll.

//!Scrivi uno script che:
//!1. Utilizzi querySelectorAll per selezionare tutte le celle.
// let classCella = document.querySelectorAll(".cella");
//!2. Aggiunga un evento click a ciascuna cella.
//!3. Quando una cella viene cliccata, cambi il suo testo in "Cliccata!" e il suo colore di
//!sfondo in verde.
// classCella.forEach(cella => {
//     cella.addEventListener("click", () =>{
//         cella.style.backgroundColor = "green";
//         cella.textContent = "Cliccata!";
//     })
// })
//

//!Esercizi vacanze sul DOM
//!1. Dato il seguente lateral drawer: CodePen
//!Creare delle funzioni per aprire e chiudere il lateral drawer.
//!Le funzioni andranno agganciate allo span e alla X interna al lateral drawer
//!basandosi sull’evento “onclick”.
//!Giocate un po’, l’esercizio può essere completato in vari modi, sia dal punto di vista
//!del javascript che del css
//!2. Crea un dialog (un modal) che può essere aperto e chiuso tramite i bottoni. In questo
//!esercizio l’HTML non è incluso.
//!N.B. la grafica non conta niente, dei quadrati bianchi vanno bene.
//!L’esercizio richiede la presenza di un button e una finestra che viene aperta solo al
//!click di quel bottone, e la chiusura tramite un tasto interno alla finestra.
let drawerClass = document.querySelector(".drawer");
let mainClass = document.getElementById("main");
mainClass.setAttribute("style", "display:none")
drawerClass.addEventListener("click", () => {
    drawerClass.textContent = "drawer aperto";
    mainClass.setAttribute("style", "display: flex");
}
)
let closeButton = document.getElementById("closebtn");
closeButton.addEventListener("click", () => {
    mainClass.setAttribute("style", "display: none");
    drawerClass.textContent = "Apri il drower";
})