// Dichiara e inizializza 5 variabili, una per ogni tipo di dato primitivo visto a lezione.
// Dopo di che, stampa il tipo nella console.

// let a= 1;
// let b= 2;
// let c= 3;
// let d= 4;
// let e= 5;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// ---------------------------------//

// 2. Individua l’errore nel seguente codice e correggilo:
// let nome = 'Mario; let età = 30; const indirizzo = `Via Roma 10'; console.log(Nome);
// Il nome mario non è tra virgolette

//----------------------------------//

// Chiedi all’utente due numeri con il metodo prompt, salvali in delle variabili, poi calcola
// e stampa nella console: somma, differenza, prodotto, divisione, resto della divisione,
// ed il numero più grande dei due.
// Per aumentare la leggibilità, durante il console.log puoi spiegare a fianco cosa stai
// stampando usando una stringa. Esempio:
// console.log(“Questa è la somma”, sum);

// let num =Number(prompt("Inserisci un numero"));
// let num2 =Number( prompt("Inserisci un altro numero"));
// console.log(num + num2);
// console.log(num - num2);
// console.log(num * num2);
// console.log(num / num2);
// console.log(num % num2);
// console.log(Math.max(num,num2));

//---------------------------------//

// Chiedi all’utente il suo nome e cognome, dopo di che stampa in console la seguente
// frase:
// "Benvenuto, Mario Rossi!"
// Completare l’esercizio sia usando la string interpolation sia usando la
// concatenazione di stringhe.

// let nome = prompt("Inserisci il tuo nome");
// // console.log("Benvenuto" + " " + nome);

// console.log(`Benvenuto ${nome}`);

//---------------------------------//

// Chiedi all’utente di inserire un valore e verifica se il valore è truthy o falsy
// stampando il risultato nella console.
// (Come nell’esercizio della lezione, un semplice if/else, con dentro solo il console.log;
// in un caso stampa “il valore è truthy”, nell’altro stampa “il valore è falsy”)

// let nome = prompt("Inserisci il tuo nome");
// if (nome) { console.log(
//     "Il valore è TRUTHY"
// );
// } else {
//     console.log("Il valore è FALSY");
// }

//-------------------------------//
// Chiedi all’utente due numeri e verifica se:
// ● Entrambi sono maggiori di 10.
// ● Almeno uno dei due è maggiore di 10.

// let number1 = prompt ("Inserisci il primo numero");
// let number2 = prompt ("inserisci il secondo numero");
// if (number1>=10 && number2>=10) {
//     console.log("Entrambi sono maggiori di 10");
// } else if (number1>=10 || number2>=10) {
//     console.log("Almeno uno è maggiore di 10");
// } else {
//     console.log("Nessuno dei due è maggiore di 10");
//}
//---------------------------------//
// Inizializza due variabili, 5 e “5”, e verifica le seguenti condizioni:
// ● Se i numeri sono uguali.
// ● Se sono uguali anche nel tipo.
// ● Se sono diversi o strettamente diversi.
// Stampa i risultati nella console

// let var1= 5;
// let var2= "5";

// if (var1 == var2) {
//     console.log("Le variabili sono uguali");    
// }else {
//     console.log("Le variabili non sono uguali");
// }

// if (var1 === var2) {
//     console.log("Le variabili sono uguali anche nel tipo ");    
// }else {
//     console.log("Le variabili non sono uguali anche nel tipo");
// }

// if (var1 != var2) {
//     console.log("Le variabili sono diverse ");    
// }else {
//     console.log("Le variabili non sono diverse");
// }

// if (var1 !== var2) {
//     console.log("Le variabili sono strettamente diverse ");    
// }else {
//     console.log("Le variabili non strettamente diverse");
// }

//-------------------------------------------//
// Chiedi all’utente un numero e verifica se si trova in un determinato intervallo
// (esempio: tra 10 e 100). Stampa all’utente un messaggio dove confermi o meno se è
// dentro quell’intervallo.

// let num = prompt ("Inserisci un numero");
// if (num>10 && num<100) {
//     console.log("Il numero si trova tra 10 e 100");
    
// } else {
//     console.log("Il numero non si trova tra 10 e 100");
// }

//------------------------------------------//
// Chiedi all’utente di inserire la propria età e quella di un amico. Determina chi è più
// giovane, chi è più vecchio o se hanno la stessa età. Stampa il risultato

// let age = prompt("Inserisci la tua età")
// let friendlyage = prompt("Inserisci l'età del tuo amico")
 
// if (age>friendlyage) {
//     console.log("Sei più vecchio del tuo amico");
// } else if (age<friendlyage){
//     console.log("Sei più giovane del tuo amico");    
// } else {
//     console.log("Avete la stessa età");    
// }

//-------------------------------------------//
// 1. Lancio del dado
// Creare un programma che simuli il lancio di un dado e reagisca in base al risultato.
// Regole
// ● Utilizzare Math.random() e Math.round() per generare un numero casuale
// ● Simulare un dado a 6 facce
// ● Stampare un messaggio se il numero è maggiore di 3
// Scrivi un programma che:
// 1. Generi un numero casuale da 1 a 6
// 2. Verifichi se il numero è maggiore di 3
// 3. Stampi un messaggio in caso affermativo
// let dado = Math.round(Math.random() * 5) + 1;
// console.log(dado);

// if (dado>3) {
//     console.log("Il numero è maggiore di 3");    
// } else {
//     console.log("Il numero è minore o uguale a 3");    
// }

//------------------------------------------//
// Creare un mini-programma che classifichi un voto scolastico in base al punteggio.
// Scale di Valutazione
// ● 90-100: "Ottimo!"
// ● 70-89: "Buono!"
// ● 60-69: "Sufficiente"
// ● Sotto 60: "Insufficiente"
// Scrivi un programma che:
// 1. Definisca un voto numerico
// 2. Utilizzi le istruzioni if-else
// 3. Classifichi il voto secondo le scale indicate
// 4. Stampi a schermo la corrispondente valutazione
// 3. Identificazione della stagione

// let voto = Math.round(Math.random() * 100)
// console.log(voto + " " + "Voto generato casualmente");
// if (voto>=90) {
//     console.log("Ottimo!")
// } else if (voto>=70) {
//     console.log("Buono!")
// } else if (voto>=60) {
//     console.log("Sufficiente")
// } else if (voto<=59) {
//     console.log("Insufficiente")
// } 


//-----------------------------------------//
// Creare un mini-programma che identifichi la stagione in base al numero del mese.
// Stagioni e Mesi
// ● Inverno: Dicembre (12), Gennaio (1), Febbraio (2)
// ● Primavera: Marzo (3), Aprile (4), Maggio (5)
// ● Estate: Giugno (6), Luglio (7), Agosto (8)
// ● Autunno: Settembre (9), Ottobre (10), Novembre (11)
// Consegna
// Scrivi un programma che:
// 1. Definisca un numero di mese (1-12)
// 2. Utilizzi l'istruzione switch
// 3. Identifichi la stagione corrispondente
// 4. Stampi a schermo il nome della stagione
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
// Utilizzare l'operatore ternario per determinare lo stato anagrafico di una persona in
// base all'età.
// ● Maggiorenne: età ≥ 18 anni
// ● Minorenne: età < 18 anni
// Scrivi un programma che:
// 1. Definisca un'età
// 2. Utilizzi l'operatore ternario
// 3. Determini lo stato anagrafico
// 4. Stampi a schermo il risultato usando una stringa
// Esempio di output: “Età: 16, stato: minorenne”

// let age = prompt("Quanti anni hai?");
// (age>=18 ? console.log("Sei maggiorenne") : console.log("Sei minorenne"));

//------------------------------------------//
// Esercizio bonus
// Sommatore di Numeri Pari
// Creare un programma che calcoli la somma di tutti i numeri pari fino a un
// determinato limite.
// Regole
// ● Usare un ciclo while
// ● Identificare i numeri pari con l'operatore modulo %
// ● Calcolare la somma dei numeri pari
// Scrivi un programma che:
// 1. Definisca un limite massimo
// 2. Usi un ciclo while
// 3. Identifichi i numeri pari
// 4. Calcoli la loro somma
// 5. Stampi il risultato finale
// Esempio: con un limite di 10, la somma dei numeri pari sarà 20 (0+2+4+6+8+10)


// let numMax = prompt("Inserisci un numero massimo");
// let i = 0;
// let somma = 0;
// while (i<= numMax) {
//     if (i%2==0) {
//         somma= somma + i;
//     } 
//     i++;
// }
// console.log(somma);



//--------------------------------------------//
// Bonus 1: Indovina il numero segreto
// Creare un mini-gioco di indovinare un numero generato casualmente.
// Regole
// ● Generare un numero segreto tra 1 e 10
// ● Chiedere all'utente di indovinare
// ● Dare suggerimenti se il numero è troppo alto o troppo basso
// ● Continuare finché non si indovina il numero
// Scrivi un programma che:
// 1. Generi un numero segreto casuale tra 1 e 10
// 2. Chieda ripetutamente all'utente di indovinare
// 3. Dia suggerimenti
// 4. Termini quando il numero è indovinato
// Esempio:
// Numero segreto generato
// Indovina il numero (1-10):
// 5
// Troppo basso!
// Indovina il numero (1-10):
// 8
// Troppo alto!
// Indovina il numero (1-10):
// 6
// Complimenti! Hai indovinato in 3 tentativi

// alert ("Indovina il numero");
// let randomNumber = Math.round(Math.random () * 100) + 1;
// console.log(randomNumber);
// let number = prompt ("Indovina il numero")
// if (number>randomNumber) {
//     console.log("Il numero da indovinare è più basso");
// } else if (number<randomNumber){
//     console.log("Il numero da indovinare è più alto");    
// } else {console.log("Complimenti hai indovinato");}
// let Number = prompt("Inserisci un numero");

// for (let i = 0; randomNumber == Math.round(Math.random () * 100) + 1; i++) {
//        let Number = prompt("Inserisci un numero");
//        let counter = 99;
    
//        if (Number > randomNumber) {
//          counter++;
//          console.log("Il numero è troppo alto");
//        } else if (Number < randomNumber) {
//          console.log("Il numero è troppo basso");
         
//        } else {
//         console.log("Complimenti hai indovinato!")
//        }
//      }

//------------------------------------------------------------------//

// 1. Stampare i numeri da 1 a 10
// ○ Usa un ciclo for.
// ○ Usa un ciclo while.
// ○ Usa un ciclo do...while.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// console.log("Fine ciclo for");
// let a = 0;
// while (a<10) {
//     a++;
//     console.log(a);
// }
// console.log("Fine ciclo while");
// let b = 1;
// do {
//     console.log(b);
//     b++;
// } while (b<=9);
// console.log(b);
// console.log("Fine ciclo do-while")
//-------------------------------------------------------------------//

// Stampare i numeri pari tra 1 e 20
 // ○ Scrivi un ciclo for che stampa solo numeri pari.

//  for (let i = 0; i <= 20; i++) {
//     if (i%2 == 0) {
//         console.log(i);
//     }
//  }

//-----------------------------------------------------------------//
// Stampare una tabellina
// ○ Usa un ciclo for per stampare la tabellina del 5 (esempio: 5 x 1 = 5, 5 x 2 =
// 10, ... fino a 5 x 10).

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     let result = 5 * i;
//     console.log(`${num} x ${i} = ${result}`);
// }

//---------------------------------------------------------------------//
// Somma di numeri consecutivi
// ○ Usa un ciclo while per sommare i numeri da 1 a 10 e stampare il risultato
// totale.
//     let i = 0;
//     let somma = 0;
// while (i<10) {
//     i++;
//     somma += i;
// }
// console.log(somma);


//---------------------------------------------------------------------//
// Conta fino a un numero specifico
// ○ Chiedi all'utente di inserire un numero (usa prompt o una variabile dichiarata)
// e usa un ciclo do...while per contare fino a quel numero.
// let num = prompt("inserisci un numero");
// let i=0;
// do {
//     i++;
//     console.log(i);
// } while (i<num);

//----------------------------------------------------------------------//
// Funzione che calcola la somma di due numeri
// ○ Scrivi una funzione sommaNumeri(numero1, numero2) che restituisce la
// somma di due numeri.
// ○ Chiamala con vari valori ed esegui dei test.

// function sommaNumeri(num1, num2) {
//     let somma = num1 + num2;
//     console.log(somma);
// }
// sommaNumeri(10, 5);
// sommaNumeri(100, 50);
// sommaNumeri(1000, 500);
// sommaNumeri("prova", "stringa");

//---------------------------------------------------------------------//
// Funzione che calcola il quadrato di un numero
// ○ Scrivi una funzione calcolaQuadrato(numero) che restituisce il quadrato del
// numero passato come parametro.
    //      function calcolaQuadrato(num) {
    //          let quadrato = num*num;
    //          console.log(`la potenza di ${num} è ${quadrato}`);        
    //      }
    //  calcolaQuadrato(prompt("inserisci un numero"));
 
//-------------------------------------------------------------------------//
// Funzione che saluta un nome
// ○ Scrivi una funzione saluta(nome) che prende un nome come parametro e
// restituisce un saluto personalizzato (esempio: Ciao, Marco!).

// function saluto(nome) {
//     console.log(`weeee ma ciao ${nome}`);
// }
// saluto(prompt("Come ti chiami"));


//----------------------------------------------------------------------------//
// Funzione che verifica se un numero è pari o dispari
// ○ Scrivi una funzione isPari(numero) che restituisce true se il numero è pari,
// altrimenti false.Utilizzala per fare un console.log
// Esempio if(isPari(numero)) {
// codice
// }
// function isPari(num) {
//     if (num% == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let num = prompt("inserisci un num");

// if (isPari(num)) {
//     console.log("pari");
// } else {
//     console.log("dispari");
// }
//-------------------------------------------------------------------------------//

// Funzione per stampare numeri pari con un ciclo
// Scrivi una funzione stampaNumeriPari(max) che prende un numero max e usa un
// ciclo for per stampare tutti i numeri pari da 0 a max.

// function stampaNumeriPari(max) {
//     for (let n=0; n <= max; n=n+2) {
//         console.log(n);
//     }
// }
// let massimo = prompt("inserisci un max");
// stampaNumeriPari(massimo);
// console.log("sei arrivato al max");
//----------------------------------------------------------------------------//

// Conta quante volte appare un carattere in una stringa
// Scrivi una funzione contaCarattere(stringa, carattere) che usa un ciclo per contare
// quante volte il carattere specificato appare nella stringa.
// Esempio: contaCarattere("javascript", "a") restituisce 2.
// function contaCarattere(stringa, carattere) {
//     let counter = 0;
//     for (let i = 0; i < stringa.length; i++) {
//         if (stringa[i] == carattere) {
//             counter++;
//         }        
//     }
//     return counter;
// }

// console.log(`la lettera "e" è contenuta ${contaCarattere("estenuante" , "e")}`);



//-------------------------------------------------------------------------------//

// Somma dei numeri dispari in un intervallo
// Scrivi una funzione sommaDispari(min, max) che usa un ciclo per sommare tutti i
// numeri dispari tra min e max
// function sommaDispari(min, max){
//     let somma=0;
//     for(let i=min; i<=max; i++){
//         if(i%2 !== 0){
//             somma += i;
//         }
//     }
//     console.log(somma);
// }
// sommaDispari(2,5);


//-----------------------------------------------------------------------------//

// Numero palindromo
// Scrivi una funzione isPalindromo(numero) che verifica se un numero è palindromo
// (legge uguale sia da sinistra che da destra).
// Esempio: isPalindromo(121) restituisce true, isPalindromo(123) restituisce false.
//  let numero = prompt("Inserisci un numero");
//  function isPalindromo(numero) {
//      let invertita = "";
//      for (let i = numero.length -1; i >= 0; i--) {
//          invertita += numero[i];
//      }
//     //  let result = invertita == numero;
//     //  console.log(invertita);
//     //  console.log(result);
//      if (invertita === numero) {
//         console.log("Il numero è palindromo");
//      } else {
//         console.log("Il numero non è palindromo");
//      }
//      return invertita;
//  }
//  console.log(isPalindromo(numero));

//--------------------------------------------------------------------------------//
// Scrivere una funzione che permetta di stampare in console tutti i numeri da 1 a N:
// N sarà il nostro parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 3 E 5 (esempio 15) siano sostituiti dalla stringa 'fizzBuzz'
// Se un numero non è multiplo né di 3 né di 5, allora stampa il numero
// Come output della funzione, voglio che mi venga ritornato il numero di stringhe
// stampate.
// let N = prompt("Inserisci un numero max");
// function stampaNumeri(N) {
//     let counter = 0;
//     for (let i = 1; i <= N; i++) {   
//         if (i%3 == 0 && i%5 == 0){
//             console.log("Fizzbuzz");
//             counter+=1;
//         } else if (i%5 == 0){
//             console.log("Buzz");
//             counter+=1;
//         } else if (i%3 == 0) {
//             console.log("Fizz");
//             counter+=1;
//         } else {
//             console.log(i);
//         }
        
//     }
//     return counter;
// }
// console.log(stampaNumeri(N));


//-----------------------------------------------------------------------------------//
// SCrivere una funzione che ci calcola lo sconto da effettuare su un determinato
// prodotto. Avremo due parametri, ossia il prezzo originale e la percentuale di sconto
// da applicare.
// Come output, avremo l’importo aggiornato.
// Stampare in console “Il prezzo dopo lo sconto è di …. “

// function offerta(price, promo) {
//     let finalPrice= 0
//     finalPrice = (price * promo / 100);
//     return finalPrice;
// }
// console.log(offerta(30, 50));
// console.log(offerta(20, 10));



//----------------------------------------------------------------------------------//
// In un e-commerce, i prezzi dei prodotti sono memorizzati in un array. Scrivi una
// funzione chiamata highestOrLowest che prende come parametri un array di numeri (i
// prezzi dei prodotti) e un booleano “max” che specifica se vogliamo il massimo o il
// minimo.
// Nota: Questo esercizio è stato pensato per essere risolto SENZA metodi degli array.

//  let prices = [299.99, 159.99, 499.99, 99.99];
//  let max= true;
//       function highestOrLowers(prices, max){
//           let highest= prices[0];
//           let lowest= prices[0];
//           if (!max) {
//              for (let i = 0; i <= prices.length-1; i++) {
//                  if (prices[i]<lowest) {
//                      lowest= prices[i];
//                  }   
//              }
//              console.log(`${lowest}  è il prezzo minore`);
//          }
//           if (max) {
//               for (let i = 0; i <= prices.length-1; i++) {
//                   if (prices[i]>highest) {
//                       highest= prices[i];
//                   }                  
//               } 
//               console.log(`${highest}  è il prezzo maggiore`);
//           }
         
//       }
//       highestOrLowers(prices, max);
        /////////////////////////////////////////////////////////////////////////////
    //     function highestOrLowers(prices){
    //      if (prices[0]>prices[1] && prices[0]>prices[2] && prices[0]>prices[3]) {
    //          console.log(prices[0])
    //      }else if (prices[1]>prices[0] && prices[1]>prices[2] && prices[1]>prices[3]) {
    //          console.log(prices[1])
    //      }else if (prices[2]>prices[0] && prices[2]>prices[1] && prices[2]>prices[3]) {
    //          console.log(prices[2])
    //      }else if (prices[3]>prices[0] && prices[3]>prices[1] && prices[3]>prices[2]) {
    //          console.log(prices[3])
    //      } 
    //      return max;             
    // }
        ////////////////////////////////////////////////////////////////////////////////

 

//----------------------------------------------------------------------------------//
// Dato l’array greetings, scrivere una funzione (mediante arrow function) che conta
// quante volte un saluto appare nel suddetto array. I parametri saranno l’array e la
// parola da cercare. Se la parola da cercare non viene fornita , la funzione dovrà
// cercare la stringa "default".
// let greetings = ["ciao", “good morning”, “ciao”, "default", "ciao", "hello", "default",
//     “bonjour”, “buenos dias”];
//     Output desiderato:
//     console.log(countWords(greetings, "ciao")); // Output: 3
//     console.log(countWords(greetings)); // Output: 2

// let greetings = ["ciao", "good morning", "ciao", "default", "ciao", "hello", "default", "bonjour", "buenos dias"];
// const countWords = (greetings, word="default") => {
//     let output= 0;
//     for (let i = 0; i <= greetings.length; i++) {
//         if (greetings[i] == word) {
//             output= output + 1;  
//         } 
//     }
//     return output;
// }
// console.log(countWords(greetings));
// console.log(countWords(greetings, "ciao"));

//----------------------------------------------------------------------------------//
// Metodo degli array .filter()
// Scrivere una funzione che, dato un array di numeri rappresentanti le età, restituisca un
// nuovo array contenente solo le età delle persone maggiorenni.
// N.B. come visto a lezione, il metodo filter ci ritorna un nuovo array.
// let ages= [17, 22, 15, 19, 12, 21, 16, 84, 61, 33, 17, 29, 48];

// let adults = ages.filter((ages)=> ages >=18);
// console.log(adults);