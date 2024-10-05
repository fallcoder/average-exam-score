import { average } from "./Exams.js"
import { saveToHistory } from "./history.js"
import { mainMenu } from "./menu.js"
import { handleInputError, handleCountError } from "./errorHandler.js"

export function enterNotes(r1) {
    r1.question("Combien de notes souhaitez-vous entrer ? ", (count) => {
        const countError = handleCountError(count);

        if(countError) {
            console.log(countError)
            return mainMenu(r1)
        }

        let notes = [];

        function askForNote(i) {
            if(i < count) {
                r1.question(`entrez la note de ${i + 1} (entre 0 et 20) : `, (input) => {
                    const inputError = handleInputError(input);

                    if(inputError) {
                        console.log(inputError);
                        return askForNote(i)
                    }

                    notes.push(parseInt(input, 10));
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