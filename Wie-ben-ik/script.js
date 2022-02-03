'use strict';

console.log('Youssef oefening werkt');



let h1Element = document.querySelector('.h1');

console.log(h1Element);

h1Element.style.backgroundColor = 'grey';



let Youssef = document.querySelector('#Youssef');

Youssef.style.textDecoration = "underline";



let klasseNaam = 'derde-rij';

let derderij = document.getElementsByClassName(klasseNaam);

for (let element of derderij) {
    console.log(element);
    element.style.backgroundColor = 'grey';
}



















