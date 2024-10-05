import { mainMenu } from "./menu.js";
import { handleEmptyHistoryError, handleGenericError } from "./errorHandler.js";

let history = [];

export function saveToHistory(result) {
    try {
        history.push(result);
        console.log("Moyenne sauvegardée dans l'historique")
    }
    catch(error) {
        handleGenericError("Impossible de sauvegarder la moyenne")
    }
    
}

 export function showHistory(r1) {
    try {
        if(history.length === 0) {
            // appel de la fonction d'erreur pour l'historique vide
            handleEmptyHistoryError();
        }
        else {
            console.log("*** Historique des moyennes ***");
            history.forEach((moyenne, index) => {
                console.log(`Moyenne ${index + 1} : ${moyenne}`);
            })
        }
    }
    catch(error) {
        handleGenericError("Erreur lors de l'affichage de l'historique")
    }
   
    mainMenu(r1); // retour au menu principal   
}