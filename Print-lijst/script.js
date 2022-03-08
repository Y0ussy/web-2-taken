'use strict';


var Ronaldo = {Genre: "Sport" , Afkomst: "Portugees" , Hobby:"Voetballen" };

var Dicaprio = {Genre: "Acteur" , Afkomst: "Amerikaans" , Hobby: "Acteren" };

var Pewdiepie = {Genre: "Entertainer" , Afkomst: "Zweeds" , Hobby: "filmpjes maken" };

var lijstartiesten = [Ronaldo, Dicaprio, Pewdiepie];

for (let artiesten of lijstartiesten) {
    console.log(artiesten);
}








const namen = ["Dirk", "Sandy", "Tormund", "Dahlia"];

for (let i = 0; i < namen.length; i++) {
    // Gebruik de teller i als index van de array
    // Elke iteratie wordt er dus een nieuw element aangesproken
    console.log(namen[i]);
}
