
var color = prompt("give me a color?"); // dit stukje code, gaat een popup tonen (specifiek een vraag stellen)
var el = document.getElementsByTagName("body")[0]; // daarin gaan we het HTML-element steken met de naam body
console.log(el);
el.style.backgroundColor = color;

