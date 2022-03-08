'use strict';

let Ronaldo = {Genre: "Sport" , Afkomst: "Portugees" , Hobby:"Voetballen" };
let Dicaprio = {Genre: "Acteur" , Afkomst: "Amerikaans" , Hobby: "Acteren" };
let Pewdiepie = {Genre: "Entertainer" , Afkomst: "Zweeds" , Hobby: "filmpjes maken" };
let lijstArtiesten = [Ronaldo, Dicaprio, Pewdiepie];

console.log(lijstArtiesten.length);

for (let i = 0; i < lijstArtiesten.length; i++) {
  
    artiestPrinten(lijstArtiesten[i]);

}

function artiestPrinten(parameter) {
    console.log(parameter.Genre + ' ' + parameter.Afkomst + ' ' + parameter.Hobby)
}




