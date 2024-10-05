// fonction pour gérer les erreurs de saisie des notes
export function handleInputError(input, min = 0, max = 20) {
    const value = parseInt(input, 10);
    if(isNaN(value)) {
        return `Erreur: "${input}" n'est pas un nombre valide.`
    }
    else if(value < min || value > max) {
        return `Erreur: le nombre doit etre compris entre ${min} et ${max}`
    }
    
    return null;
}

// fonction pour gérer les erreurs de saisie du nombre de notes
export function handleCountError(count) {
    const value = parseInt(count, 10);
    if(isNaN(value) || value <= 0) {
        return `Erreur: "${count}" n'est pas un nombre valide ou est inférieur ou égal à zéro`
    }

    return null;
}

// gestion des erreurs de l'historique
export function handleEmptyHistoryError() {
    console.log("Erreur: aucun historique de moyenne trouvé");
}

// fonction générique pour afficher d'autres erreurs
export function handleGenericError(errorMessage) {
    console.log(`Erreur: ${errorMessage}`);
}