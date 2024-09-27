// importation du module readline pour lire les entrées utilisateur dans la console
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// définition de la class Exams avec une méthode static pour calculer la moyenne
class Exams {
  static average(exam1, exam2, exam3) {
    const avg = (exam1 + exam2 + exam3) / 3;
    // retourne la moyenne arrondi à l'entier le plus proche
    return Math.round(avg);
  }
}

// fonction principale qui demande les notes d'examen et la affiche la moyenne
function main() {
  r1.question("entrez la note de l\'examen 1 : ", (input1) => {
    const exam1 = parseInt(input1, 10);

    r1.question("entrez la note de l\'examen 2 : ", (input2) => {
      const exam2 = parseInt(input2, 10);

      r1.question("entrez la note de l\'examen 3 : ", (input3) => {
        const exam3 = parseInt(input3, 10);

        // appelle la méthode 'average' pour obtenir la moyenne des trois notes et affiche le résultat
        const result = Exams.average(exam1, exam2, exam3);
        console.log(`La moyenne est de : ${result}`);

        r1.close()
      })

    });
  });
}

main()