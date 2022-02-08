
// Dit geeft een alert bericht met de oplossing van de bewerking.


let getal1 = prompt('Geef het eerste getal');

let getal2 = prompt('Geef de tweede getal');

let som = (getal1*1) + (getal2*1); // de som van de getallen hierboven.
                                           
alert(som);


if (getal1 > getal2) {
    alert('getal 1 is kleiner')
} else  {
    alert('getal 2 is groter')
}



// we emoeten getal 1 en 2 vergelijken
let isGetal1KleinerDanGetal2 = getal1 < getal2; 

// bij if controleren we als iets juist of onjuist is
if (isGetal1KleinerDanGetal2) { 
    //dit voeren we uit indien juist
    alert('Getal 1 is kleiner dan getal 2');
} else if (isGetal1KleinerDanGetal2) { 
    // dit voeren we uit indien fout
    alert('Getal 1 is groter dan getal 2');
}


