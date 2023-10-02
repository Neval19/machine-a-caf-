import {injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle');
wrapper.innerHTML = '<input id="input" type="text">' + wrapper.innerHTML;
const boutton = document.querySelector('#start');

boutton.textContent = "Calculer";
function start() {
    let input = document.querySelector('#input');
    calculer(Number(input.value));
    const etapes = [
        { title: "Commence à faire le café", duree: 2000 },
        { title: "Mouds les grains de café", duree: 1500 },
        { title: "Fait chauffer l'eau", duree: 2500 }, 
        { title: "Infuse les grains de café moulus", duree: 3000 },
        { title: "Verse le café dans une tasse", duree: 2000 },
        { title: "Ajoute un peu de lait dans la tasse", duree: 1500 },
        { title: "Le café est terminé.", duree: 1000 } 
    ];
    const laListe = renewTag('ul');
    wrapper.append(laListe);
    
    injectElements(etapes, laListe);
}

const ingredients = [
    
    { nom: "eau", quantité: 200, unité: "ml"},
    { nom: "lait", quantité: 50, unité:"ml"},
    { nom: "grains", quantité: 15, unité:"g"},
];

function calculer(nbCafe){
    for (let value of Object.values(ingredients)){
        wrapper.innerHTML += "<p>" + value.nom + " " + value.quantité*nbCafe + " " +value.unité + "</p>";
    }
}

document.querySelector('#start').addEventListener('click', start)