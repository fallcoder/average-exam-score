import { mainMenu } from "./menu.js";

mainMenu

let history = [];

export function saveToHistory(result) {
    history.push(result);
}

 export function showHistory(r1) {
    if(history.length === 0) {
        console.log("Aucune moyenne calculée pour l'instant")
    }
    else {
        console.log("*** Historique des moyennes ***");
        history.forEach((moyenne, index) => {
            console.log(`Moyenne ${index + 1} : ${moyenne}`);
        })
    }

    mainMenu(r1);
}