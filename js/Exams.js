// définition de la class Exams avec une méthode static pour calculer la moyenne
class Exams {
  static average(notes) {
    const sum = notes.reduce((acc, note) => acc + note, 0);
    const avg = sum / notes.lenght;
    return avg.toFixed(2); // renvoie la moyenne avec 2 décimales
  }
}

// exporter directement la méthode average
export const average = Exams.average;