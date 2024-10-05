# Application de Calcul de la Moyenne des Examens
Ce projet est une application console qui permet à un utilisateur de saisir plusieurs notes d'examens et de calculer leur moyenne. Il est structuré de manière modulaire, facilitant ainsi la maintenance et l'évolution du code. Il inclut maintenant une gestion des erreurs modulaire.

## Fonctionnalités
* saisie interactive des notes d'examens
* validation des entrées pour s'assurer qu'elles sont des nombres valides (entre 0 et 20)
* calcul de la moyenne des notes entrées
* historique des moyennes calculées pour une consultation future
* le projet gère les erreurs comme les saisies non valides ou les échecs de sauvegarde via un fichier dédié
* chaque fonctionnalité est répartie dans des fichiers séparés pour plus de clarté et de maintenabilité

## Fichiers du Projet
Le projet est organisé en plusieurs fichiers JavaScript pour une meilleure modularité :
1. `main.js` : point d'entrée principal du programme. Il exécute le programme et gère le flux d'exécution
2. `menu.js` : gère le menu et la navigation entre les différentes fonctionnalités du programme
3. `inputHandler.js` : gère la saisie des notes, la validation et l'appel à la méthode de calcul de la moyenne
4. `Exams.js` : contient la logique de calcul des moyennes. La méthode `average` calcule la moyenne des notes fournies
5. `history.js` : gère l'historique des moyennes calculées, permettant à l'utilisateur de conserver une trace des résultats précédents 
6. `errorHandler.js` : gère les erreurs dans le programme


## Auteur
* Ce projet a été créé par Mouhamed Fall
* Github : [@fallcoder](https://github.com/fallcoder)
