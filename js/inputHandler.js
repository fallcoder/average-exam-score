import { average } from "./Exams.js"
import { saveToHistory } from "./history.js"
import { mainMenu } from "./menu.js"

export function enterNotes(r1) {
    r1.question("Combien de notes souhaitez-vous entrer ? ", (count) => {
        count = parseInt(count, 10)

        if(isNaN(count) || count <= 0) {
            console.log("veuillez entrer un nombre valide supérieur à 0")
            return mainMenu(r1)
        }

        let notes = [];

        function askForNote(i) {
            if(i < count) {
                r1.question(`entrez la note de ${i+1} (entre 0 et 20) : `, (input) => {
                    const note = parseInt(input, 10);

                    if(isNaN(note) || note < 0 || note > 20) {
                        console.log("Erreur: veuillez entrer une note valide entre 0 et 20");
                        return askForNote(r1)
                    }

                    notes.push(note);
                    askForNote(i + 1);
                });
            }
            else {
                const result = average(notes);
                console.log(`La moyenne des ${count} examens est de : ${result}`);
                saveToHistory(result);
                mainMenu(r1);
            }
        }

        askForNote(0);
    })
}