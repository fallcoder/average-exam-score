// importation du module readline pour lire les entrées utilisateur dans la console
import { createInterface } from 'readline';
import { mainMenu } from './menu.js';

// création de l'interface readline
const r1 = createInterface({
    input: process.stdin,
    output: process.stdout
});

// lancement du programme avec le menu principal
mainMenu(r1)