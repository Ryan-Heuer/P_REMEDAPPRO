const $ = document;
const query = queryItem => $.querySelector(queryItem);

// Sélectionner le bouton et la barre de progression
const button = query('.button');
const progress = query('.progress');
const value = query('.value');
let percent = 0;

// Fonction qui démarre l'animation du téléchargement
const startDownload = () => {
    // Désactive le bouton pendant l'animation
    button.removeEventListener('click', startDownload);

    const intervalItem = setInterval(() => {
        percent++;  // Incrémenter le pourcentage de la progression

        button.classList.add('start-download');  // Ajouter la classe pour démarrer l'animation
        progress.style.inset = `${percent}% 0 0 0`;  // Mettre à jour la barre de progression
        value.innerHTML = `${percent}%`;  // Afficher le pourcentage

        if (percent === 100) {
            clearInterval(intervalItem);  // Arrêter l'intervalle quand on atteint 100%
            percent = 0;
            button.classList.remove('start-download');  // Retirer l'animation du bouton
            progress.style.inset = '-20px 0 0 0';  // Remettre la barre de progression à son état initial
            value.innerHTML = 'Télécharger';  // Réinitialiser le texte

            // Télécharger le fichier
            const link = document.createElement('a');
            link.href = 'C:/Users/Ryan/Desktop/htlm/CV%20Ryan%20Heuer%202025.pdf';  // Remplace par le chemin du fichier sur ton PC
            link.download = 'CV_Ryan_Heuer_2025.pdf';  // Nom du fichier téléchargé
            link.click();  // Simuler un clic pour télécharger

            // Réactiver le bouton
            button.addEventListener('click', startDownload);
        }
    }, 30);
}

// Ajouter un événement au clic pour démarrer l'animation
button.addEventListener('click', startDownload);
