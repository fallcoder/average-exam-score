import { showHistory } from "./history.js";
import { enterNotes } from "./inputHandler.js";

export function mainMenu(r1) {
    console.log("\n **** Bienvenue ****");
    console.log("1. Entrer des notes d'examens");
    console.log("2. Afficher l'historique des moyennes");
    console.log("3. Quittez");

    r1.question("Faites votre choix : ", (option) => {
        switch(option) {
            case '1':
                enterNotes(r1);
                break;
            case '2':
                showHistory(r1);
                break;
            case '3':
                console.log("Merci d'avoir utilisé ce programme !");
                r1.close();
                break;
            default:
                console.log("Option invalide. Veuillez choisir entre 1, 2 ou 3");
                mainMenu(r1);
        }
    })
}